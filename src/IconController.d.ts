import Icon from './Icons'
import { IThemeStructure } from './types'

declare interface IconController {
    /**
     * Creates, stores and returns an icon, where `name` is a unique string identifying the
     * icon, `imageId` an int representing the icons image, and `order`, a number defining how
     * the icon should be positioned in relation to neighboring icons, greater values being
     * shifted rightward.
     */
    createIcon(name: string, image: number, order: number): Icon

    /**
     * When set to false, hides all icons created with Topbar+. This can also be
     * achieved by doing `starterGui:SetCore("TopbarEnabled", bool)`. `forceBool` forces
     * topbar into going into the passed `bool` state, this does only affect the topbar
     * when in controller mode. If in controller mode and `forceBool` is `false` then it
     * will make the topbar move into/out of the screen, instead of making the topbar
     * invisible. `forceBool` defaults to `true`.
     */
    setTopbarEnabled(bool: boolean, forceBool?: boolean): void

    /**
     * Used internally to enable/disable controller mode; can be used to force the
     * controller display for a client.
     */
    enableControllerMode(bool: boolean): void

    /**
     * Disables the default core chat icon, and creates and returns a new icon imitating
     * it. The icon can be enabled and disabled by doing `icon:setEnabled(bool)` or
     * `StarterGui:SetCoreGuiEnabled("Chat", bool)`.
     */
    createFakeChat(): void

    /**
     * Destroys and removes references of the fake chat icon.
     */
    removeFakeChat(): void

    /**
     * Sets the default theme which is applied to all existing and future icons.
     */
    setGameTheme(theme: IThemeStructure): void

    /**
     * Changes the DisplayOrder of the Topbar+ ScreenGui to the given value.
     */
    setDisplayOrder(displayOrder: number): void

    /**
     * Returns an icon of the corresponding name.
     */
    getIcon(icon: string): Icon

    /**
     * Returns an array containing every icon.
     */
    getAllIcons(): Icon[]

    /**
     * Destroys and removes references of the corresponding icon.
     */
    removeIcon(icon: string): void
}

export = IconController
