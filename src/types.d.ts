type Template<T extends Instance> = Partial<Pick<T, GetProperties<T>>>

interface IToggleDetails<T extends Instance> {
    selected?: Template<T>
    deselected?: Template<T>
}

export interface IThemeStructure {
    toggleTweenInfo: TweenInfo

    container?: IToggleDetails<Frame>
    button?: IToggleDetails<ImageButton>
    image?: IToggleDetails<ImageLabel>
    notification?: IToggleDetails<ImageLabel>
    amount?: IToggleDetails<TextLabel>
    gradient?: IToggleDetails<UIGradient>
    corner?: IToggleDetails<UICorner>
    label?: IToggleDetails<TextLabel>
}

export interface IDropdownOption {
    /** The option name that will appear in the dropdown */
    name: string
    /** An image that appears to the left of the name */
    icon?: string
    /** A function called when the option is pressed */
    clicked: Callback
    /**
     * An array of `signals` or `events` that bind to
     * `Icon:notify()` to create a notification prompt
     * to the right of the option name
     */
    events: RBXScriptSignal[]
}

export interface IDropdownSettings {
    /** Hides the playerlist if overlapping the dropdown */
    canHidePlayerlist: boolean
    /** Hides the chat if overlapping the dropdown */
    canHideChat: boolean
    /** Forces the chats DisplayOrder to this value */
    chatDefaultDisplayOrder: number
    /** How fast the dropdown appears/disappears */
    tweenSpeed: number
    /** Affects how the dropdown appears/disappears */
    easingDirection: Enum.EasingDirection
    /** Affects how the dropdown appears/disappears */
    easingStyle: Enum.EasingStyle
    /** The background color of dropdown options */
    backgroundColor: Color3
    /** The name color of dropdown options */
    textColor: Color3
    /** The icon color of dropdown options */
    imageColor: Color3
}
