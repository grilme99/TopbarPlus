import Icon from 'Icons'
import { IThemeStructure } from 'types'

declare namespace IconController {
    /**
     * Creates, stores and returns an icon, where `name` is a unique string identifying the
     * icon, `imageId` an int representing the icons image, and `order`, a number defining how
     * the icon should be positioned in relation to neighboring icons, greater values being
     * shifted rightward.
     */
    export function createIcon(name: string, image: number, order: number): Icon

    /**
     * When set to false, hides all icons created with Topbar+. This can also be
     * achieved by doing `starterGui:SetCore("TopbarEnabled", bool)`. `forceBool` forces
     * topbar into going into the passed `bool` state, this does only affect the topbar
     * when in controller mode. If in controller mode and `forceBool` is `false` then it
     * will make the topbar move into/out of the screen, instead of making the topbar
     * invisible. `forceBool` defaults to `true`.
     */
    export function setTopbarEnabled(bool: boolean, forceBool?: boolean): void

    /**
     * Used internally to enable/disable controller mode; can be used to force the
     * controller display for a client.
     */
    export function enableControllerMode(bool: boolean): void

    /**
     * Disables the default core chat icon, and creates and returns a new icon imitating
     * it. The icon can be enabled and disabled by doing `icon:setEnabled(bool)` or
     * `StarterGui:SetCoreGuiEnabled("Chat", bool)`.
     */
    export function createFakeChat(): void

    /**
     * Destroys and removes references of the fake chat icon.
     */
    export function removeFakeChat(): void

    /**
     * Sets the default theme which is applied to all existing and future icons.
     */
    export function setGameTheme(theme: IThemeStructure): void

    /**
     * Changes the DisplayOrder of the Topbar+ ScreenGui to the given value.
     */
    export function setDisplayOrder(displayOrder: number): void

    /**
     * Returns an icon of the corresponding name.
     */
    export function getIcon(icon: string): Icon

    /**
     * Returns an array containing every icon.
     */
    export function getAllIcons(): Icon[]

    /**
     * Destroys and removes references of the corresponding icon.
     */
    export function removeIcon(icon: string): void
}

export = IconController
