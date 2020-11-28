import Icon from 'Icons'
import { IDropdownOption, IDropdownSettings } from 'types'

declare interface Dropdown {
    // Properties
    /** The icon the dropdown is associated with. */
    readonly icon: Icon

    /** A bool indicating wether the dropdown is open or not. */
    readonly isOpen: boolean

    /** An array containing objects that describe an option */
    readonly options: IDropdownOption[]

    /**
     * A dictionary containing the dropdowns settings. Use
     * `dropdown:set()` to change a setting.
     */
    readonly settings: IDropdownSettings

    // Methods
    /**
     * Sets the specified setting to the given value. For example:
     * ```typescript
     * dropdown.set("backgroundColor", Color3.fromRGB(100, 100, 100))
     * ```
     */
    set(setting: keyof IDropdownSettings, value: unknown): void

    /**
     * Forces the dropdown to update colors and text alignment.
     * If the dropdown is visible when this is called, the dropdown
     * will be hidden.
     */
    update(): void

    /** Hides the dropdown. */
    hide(): void

    /**
     * Displays the dropdown at the passed Vector2 position. If `position`
     * is not defined, the dropdown will appear automatically at the icon.
     */
    show(position?: Vector2): void

    /**
     * Creates an option menu based on the given option details, and returns
     * the passed option table.
     *
     * ```typescript
     * const updatedOption = dropdown.createOption(option)
     * ```
     */
    createOption(option: IDropdownOption): IDropdownOption

    /** Destroys an option with the given name or index. */
    removeOption(nameOrIndex: string | number): void

    /**
     * Destroys all instances, connections and signals associated with
     * the dropdown.
     */
    destroy(): void
}

declare interface DropdownConstructor {
    new (icon: Icon, options: IDropdownOption[]): Dropdown
}

declare const Dropdown: DropdownConstructor
export = Dropdown
