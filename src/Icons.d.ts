import Dropdown from './Dropdown'
import { IDropdownOption, IThemeStructure } from './types'

declare interface Icon {
    // Properties
    /** A dictionary of instances that make up the icon. */
    objects: {
        /** The icon container. */
        container: Frame
        /** The icon background. */
        button: ImageButton
        /** The icon image. */
        image: ImageLabel
        /** The icons label. Set using `icon:setLabel()`. */
        label: TextLabel
        /** Decides the icons corner radius. */
        corner: UICorner
        /** The notification container and background. */
        notification: ImageLabel
        /** The notification amount text. */
        amount: TextLabel
        /** The gradient used to make the icon look fancy. */
        gradient: UIGradient
    }

    /**
     * A dictionary describing the icons theme. To change,
     * use `icon:setTheme()`.
     */
    readonly theme: IThemeStructure

    /**
     * A string describing the toggle status: "selected" or "deselected".
     * To change, use `icon:select()` and `icon:deselect()`.
     */
    readonly toggleStatus: 'selected' | 'deselected'

    /** The icon creation name. */
    name: string

    /**
     * A function that is called every time an icons caption is highlighted
     * and unhighlighted to make it fade in or out.
     */
    captionTween: Callback

    /**
     * The tip (`string`) shown when the icon is highlighted (mouse hovering
     * over the icon or gamepad selection has the icon selected).
     */
    readonly tip: string

    /**
     * The controller tip that overrides the normal tip when the player is
     * in controller mode.
     */
    readonly controllerTip: string

    /** The icons imageId. To change, use `icon:setImage()`. */
    readonly imageId: string

    /**
     * A Vector2 representing the images size. To change, use `icon:setImageSize()`.
     * Default: 20px
     */
    readonly imageSize: Vector2

    /**
     * The icons order. This determines whether the icon comes before or after
     * other icons. Defaults to `1`. To change, use `icon:setOrder()`.
     */
    readonly order: number

    /**
     * A bool describing whether the icon is enabled or not. To change, use
     * `icon:setEnabled()`.
     */
    readonly enabled: boolean

    /** A bool describing whether a mouse or controller is hovering over the icon. */
    readonly hovering: boolean

    /**
     * A string describing the alignment of the icon, there are three alignments:
     * `left`, `mid`, `right`.
     */
    readonly alignment: 'left' | 'mid' | 'right'

    /** An int representing the amount of active notifications. */
    readonly totalNotifications: number

    /** A GuiObject binded by `icon:setToggleMenu()`. */
    readonly toggleMenu: BasePlayerGui

    /**
     * A custom function called during `icon:select()` and `icon:deselect()`.
     * To change, use `icon:setToggleFunction()`.
     */
    readonly toggleFunction: Callback

    /**
     * A custom function called when the icon is highlighted or unhighlighted.
     * To change, use `icon:setHoverFunction()`.
     */
    readonly hoverFunction: Callback

    /**
     * A bool deciding whether the icon will be deselected when another
     * icon is selected. Defaults to `true`.
     */
    deselectWhenOtherIconSelected: boolean

    // Events
    /** Fired when the icon causes a position shift of other icons. */
    updated: RBXScriptSignal

    /** Fired when the icon is selected. */
    selected: RBXScriptSignal

    /** Fired when the icon is deselected. */
    deselected: RBXScriptSignal

    /** Fired when the icons notifications are cleared. */
    endNotifications: RBXScriptSignal

    // Methods
    /**
     * Expands the icon and sets a piece of text that appears next to
     * the image. Setting to `nil` or `""` will remove the label.
     */
    setLabel(text: string): void

    /**
     * Creates a box that appears below the icon when hovered
     * over. Setting to `nil` or `""` will remove the caption.
     */
    setCaption(text: string): void

    /**
     * Sets a tip that is displayed when hovering over the icon.
     * Setting to `nil` or `""` will remove the tip.
     */
    setTip(text: string): void

    /**
     * Overrides the normal tip, if the player is in controller mode.
     */
    setControllerTip(text: string): void

    /**
     * Creates a dropdown that will be shown when the icon is right-clicked
     * or long-pressed on mobile. Returns the dropdown created. If there
     * already is an `icon.dropdown`, `icon:removeDropdown()` will be called
     * before creating a new one.
     */
    createDropdown(options: IDropdownOption[]): Dropdown

    /**
     * Destroys and removes all references of `icon.dropdown`.
     */
    removeDropdown(): void

    /**
     * Sets the icons image, where `imageId` can be an int representing an asset
     * id (such as `4882428756`), or a string representing an assets pathway (such
     * as `"rbxasset://textures/ui/TopBar/chatOff.png"`).
     */
    setImage(image: string): void

    /**
     * Sets the icons priority order, determining whether it will appear before
     * or after other icons.
     */
    setOrder(order: number): void

    /**
     * Aligns the icon on the left-side of the topbar (this happens by default).
     * The greater the `order`, the further rightward the icon will appear relative
     * to other icons set-left.
     */
    setLeft(): void

    /**
     * Aligns the icon in the middle of the topbar. The greater the `order`, the
     * further rightward the icon will appear relative to other icons set-mid.
     */
    setMid(): void

    /**
     * Aligns the icon on the right-side of the topbar, next to the leaderboard/
     * emotes/inventory toggle. The greater the `order`, the further rightward the
     * icon will appear relative to other icons set-right.
     */
    setRight(): void

    /**
     * Sets the image size in pixels. Height will equal width if not specified.
     */
    setImageSize(width: number, height?: number): void

    /**
     * Sets the icons visibility.
     */
    setEnabled(enabled: boolean): void

    /**
     * Changes the container size of icon to be `X pixels` by `Y pixels`. Defaults
     * to 32.
     */
    setCellSize(pixels: number): void

    /**
     * Calculates the difference between the existing baseZIndex (i.e. the
     * `object.container.ZIndex`) and new value, then updates the ZIndex of all
     * objects within the icon accordingly using this difference.
     */
    setBaseZIndex(zindex: string): void

    /**
     * You must ensure the GuiObject has 'ResetOnSpawn' set to `false`, or that
     * you are calling `icon:setToggleMenu(guiObject)` every time the player
     * respawns, for the menu to persist.
     */
    setToggleMenu(guiObject: BasePlayerGui): void

    /**
     * Sets a function that is called every time the icon is selected and
     * deselected.
     */
    setToggleFunction(toggleFunction: Callback): void

    /**
     * A function that is called when the icon is highlighted and
     * unhighlighted. The first argument passed is `icon.hovering`.
     */
    setHoverFunction(hoverFunction: (hovering?: boolean) => void): void

    /**
     * Applies the specified theme to the icon.
     */
    setTheme(theme: IThemeStructure): void

    /**
     * If set to true, disables the state overlay (the color and transparency
     * changes when an icon is hovered over and pressed).
     */
    disableStateOverlay(bool: boolean): void

    /** Selects the icon. */
    select(): void

    /** Deselects the icon. */
    deselect(): void

    /**
     * Prompts a notification that appears in the top-right corner of the
     * icon. Specify clearNoticeEvent with an event to determine when to
     * end the notification. If not specified, clearNoticeEvent defaults to
     * icon.deselected.
     */
    notify(clearNoticeEvent: RBXScriptSignal): void

    /** Clears all notifications. */
    clearNotifications(): void

    /**
     * Destroys all instances, connections and signals associated with
     * the icon.
     */
    destroy(): void
}

declare interface IconConstructor {
    /**
     * Constructs a new icon where `name` is a unique string identifying the
     * icon, `imageId` an int representing the icons image, and `order`, a number
     * defining how the icon should be positioned in relation to neighboring
     * icons.
     */
    new (name: string, image: string, order: number): Icon
}

declare const Icon: IconConstructor
export = Icon
