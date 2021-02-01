export type ToggleState = "selected" | "deselected";

declare interface ToggleStateTheme {
	iconBackgroundColor?: Color3;
	iconBackgroundTransparency?: number;
	iconCornerRadius?: UDim;
	iconGradientColor?: ColorSequence;
	iconGradientRotation?: number;
	iconImage?: string;
	iconImageColor?: Color3;
	iconImageTransparency?: number;
	iconImageYScale?: number;
	iconImageRatio?: number;
	iconLabelYScale?: number;
	iconScale?: UDim2;
	iconSize?: UDim2;
	iconOffset?: UDim2;
	iconText?: string;
	iconTextColor?: Color3;
	iconFont?: Enum.Font;
	noticeCircleColor?: Color3;
	noticeCircleImage?: string;
	noticeTextColor?: Color3;
	baseZIndex?: number;
	order?: number;
	alignment?: "left" | "mid" | "right";
	clickSoundId?: string;
	clickVolume?: number;
	clickPlaybackSpeed?: number;
	clickTimePosition?: number;
}

export interface Theme {
	/** Settings which describe how an item behaves or transitions between states */
	action?: {
		toggleTransitionInfo?: TweenInfo;
		captionFadeInfo?: TweenInfo;
		tipFadeInfo?: TweenInfo;
		dropdownSlideInfo?: TweenInfo;
		menuSlideInfo?: TweenInfo;
	};

	/** Settings which describe how an item appears when 'deselected' and 'selected' */
	toggleable?: {
		/* How items appear normally (i.e. when they're 'deselected') */
		deselected: ToggleStateTheme;

		/*
		 * How items appear after the icon has been clicked (i.e. when they're 'selected')
		 * If a selected value is not specified, it will default to the deselected value
		 */
		selected?: ToggleStateTheme;
	};

	/** Settings where toggleState doesn't matter (they have a singular state) */
	other?: {
		// Caption settings
		captionBackgroundColor?: Color3;
		captionBackgroundTransparency?: number;
		captionTextColor?: Color3;
		captionTextTransparency?: number;
		captionFont?: Enum.Font;
		captionOverlineColor?: Color3;
		captionOverlineTransparency?: number;
		captionCornerRadius?: UDim;
		// Tip settings
		tipBackgroundColor?: Color3;
		tipBackgroundTransparency?: number;
		tipTextColor?: Color3;
		tipTextTransparency?: number;
		tipFont?: Enum.Font;
		tipCornerRadius?: UDim;
		// Dropdown settings
		/** `auto` is where the dropdown alignment matches the icons alignment */
		dropdownAlignment?: "left" | "mid" | "right" | "auto";
		dropdownMaxIconsBeforeScroll?: number;
		dropdownMinWidth?: number;
		dropdownSquareCorners?: boolean;
		dropdownBindToggleToIcon?: boolean;
		dropdownToggleOnLongPress?: boolean;
		dropdownToggleOnRightClick?: boolean;
		dropdownCloseOnTapAway?: boolean;
		dropdownHidePlayerlistOnOverlap?: boolean;
		dropdownListPadding?: UDim;
		dropdownScrollBarColor?: Color3;
		dropdownScrollBarTransparency?: number;
		dropdownScrollBarThickness?: number;
		// Menu settings
		/**
		 * for `auto`, if alignment is `left` or `mid`, menuDirection will be `right`, else
		 * menuDirection is 'left'
		 */
		menuDirection?: "left" | "right" | "auto";
		menuMaxIconsBeforeScroll?: number;
		menuBindToggleToIcon?: boolean;
		menuToggleOnLongPress?: boolean;
		menuToggleOnRightClick?: boolean;
		menuCloseOnTapAway?: boolean;
		menuScrollBarColor?: Color3;
		menuScrollBarTransparency?: number;
		menuScrollBarThickness?: number;
	};
}

declare interface Icon {
	// Properties
	/**
	 * A bool deciding whether the icon will be deselected when another icon is selected.
	 * Defaults to `true`.
	 */
	deselectWhenOtherIconSelected: boolean;

	/**
	 * A bool deciding whether to continue accounting for and updating the icons position
	 * on the topbar when disabled
	 */
	accountForWhenDisabled: boolean;

	readonly name: string;
	readonly isSelected: boolean;
	readonly enabled: boolean;
	readonly hovering: boolean;
	readonly tipText?: string;
	readonly captionText?: string;
	readonly totalNotices: number;
	readonly dropdownIcons?: Icon[];
	readonly menuItems?: Icon[];
	readonly menuOpen: boolean;
	readonly locked: boolean;
	readonly topPadding: UDim;
	readonly targetPosition: UDim2;

	// Events
	selected: RBXScriptSignal;
	deselected: RBXScriptSignal;
	toggled: RBXScriptSignal;
	hoverStarted: RBXScriptSignal;
	hoverEnded: RBXScriptSignal;
	dropdownOpened: RBXScriptSignal;
	dropdownClosed: RBXScriptSignal;
	menuOpened: RBXScriptSignal;
	menuClosed: RBXScriptSignal;
	notified: RBXScriptSignal;

	// Methods
	/**
	 * Applies a specific setting to an icon. If the setting falls under the 'toggleable'
	 * category then "deselected" or "selected" can be specified, otherwise if left empty
	 * or `nil` will apply to both states. For most scenarios, it's recommended instead
	 * to apply settings using themes.
	 */
	set(
		settingName: string,
		value: unknown,
		toggleState?: ToggleState,
		setAdditional?: string
	): Icon;

	/**
	 * Retrieves the given settings value. If the setting falls under the 'toggleable'
	 * category then "deselected" or "selected" can be specified, otherwise if left empty
	 * or `nil` will default to retrieving the deselected value.
	 */
	get<T, Y>(
		settingName: string,
		toggleState?: ToggleState,
		getAdditional?: string
	): LuaTuple<[T, Y]>;

	/** Returns the current toggleState, either `"deselected"` or `"selected"`. */
	getToggleState(): ToggleState;

	/**
	 * Applies a theme to the given icon. See
	 * [themes](https://1foreverhd.github.io/TopbarPlus/features/#themes) for more information.
	 */
	setTheme(theme: Theme): Icon;

	/** When set to `false`, the icon will be disabled and hidden. */
	setEnabled(enabled: boolean): Icon;

	/**
	 * Associates the given name to the icon which enables it to be retrieved with
	 * `IconController.getIcon(name)`.
	 */
	setName(name: string): Icon;

	/** Selects the icon (as if it were clicked once). */
	select(): Icon;

	/** Deselects the icon (as if it were clicked, then clicked again). */
	deselect(): Icon;

	/**
	 * Prompts a notice bubble which accumulates the further it is prompted. If the
	 * icon belongs to a dropdown or menu, then the notice will appear on the parent
	 * icon when the parent icon is deselected.
	 */
	notify(clearNoticeEvent?: RBXScriptSignal): Icon;
	clearNotices(): Icon;

	/**
	 * When set to true, disables the shade effect which appears when the icon is
	 * pressed and released.
	 */
	disableStateOverlay(disable: boolean): Icon;

	/**
	 * Applies an image to the icon based on the given `imageId`. `imageId` can be
	 * an assetId or a complete asset string.
	 */
	setImage(imageId: string | number, toggleState?: ToggleState): Icon;
	setLabel(text: string, toggleState?: ToggleState): Icon;
	setOrder(order: number, toggleState?: ToggleState): Icon;
	setCornerRadius(
		scale?: number,
		offset?: number,
		toggleState?: ToggleState
	): Icon;
	setLeft(toggleState?: ToggleState): Icon;
	setMid(toggleState?: ToggleState): Icon;
	setRight(toggleState?: ToggleState): Icon;

	/** Defines the proportional space the icons image takes up within the icons container. */
	setImageYScale(yScale: number, toggleState?: ToggleState): Icon;

	/** Defines the x:y ratio dimensions as a number. By default ratio is `1.00`. */
	setImageRatio(ratio: number, toggleState?: ToggleState): Icon;

	/** Defines how large label text appears.By default YScale is `0.45`. */
	setLabelYScale(yScale: number, toggleState?: ToggleState): Icon;

	/**
	 * Calculates the difference between the existing baseZIndex
	 * (i.e. `instances.iconContainer.ZIndex`) and new value, then updates the ZIndex of
	 * all objects within the icon accordingly using this difference.
	 */
	setBaseZIndex(zIndex: number, toggleState?: ToggleState): Icon;

	/** Determines the icons container size. By default `XOffset` and `YOffset` are `32`. */
	setSize(xOffset: number, yOffset: number, toggleState?: ToggleState): Icon;

	/** Binds a GuiObject or LayerCollector to appear and disappeared when the icon is toggled. */
	bindToggleItem(guiObjectOrLayerCollector: GuiObject | LayerCollector): Icon;

	/** Unbinds the given GuiObject or LayerCollector from the toggle. */
	unbindToggleItem(guiObjectOrLayerCollector: GuiObject | LayerCollector): Icon;

	/** Binds a keycode which toggles the icon when pressed. */
	bindToggleKey(keyCode: Enum.KeyCode): Icon;

	/** Unbinds the given keycode. */
	unbindToggleKey(keyCode: Enum.KeyCode): Icon;

	/** Prevents the icon from being pressed and toggled. */
	lock(): Icon;

	/** Enables the icon to be pressed and toggled. */
	unlock(): Icon;

	/** The gap between the top of the screen and the icon. */
	setTopPadding(offset?: number, scale?: number): Icon;

	/** Sets a tip. To remove, pass `nil` as `text`. */
	setTip(text?: string): Icon;

	/** Sets a caption. To remove, pass nil as text. */
	setCaption(text?: string): Icon;

	/**
	 * Parents the icon to the given parentIcon under the specified
	 * feature, either `"dropdown"` or `"menu"`.
	 */
	join(parentIcon: Icon, featureName: "dropdown" | "menu"): Icon;

	/** Unparents an icon from a parentIcon if it belongs to a dropdown or menu. */
	leave(): Icon;

	/**
	 * Creates a vertical dropdown based upon the given `table array` of `icons`.
	 * Pass an empty table `{}` to remove the dropdown. Dropdown settings can be
	 * configured using themes or the set method.
	 */
	setDropdown(icons: Icon[]): Icon;

	/**
	 * Creates a horizontal menu based upon the given `table array` of icons. Pass an
	 * empty table `{}` to remove the menu. Menu settings can be configured using themes
	 * or the set method.
	 */
	setMenu(icons: Icon[]): Icon;

	/** Clears all connections and destroys all instances associated with the icon. */
	destroy(): Icon;
}

declare interface IconConstructor {
	/** Constructs an empty `32x32` icon on the topbar. */
	new (): Icon;

	/**
	 * Constructs an icon to replace its CoreGui equivalent and accurately mimic
	 * its behavior. This allows for the persistence of core gui items (such as
	 * the chatbar, leaderboard, emotes, etc) while having full control over the
	 * appearance and behavior of the icon to toggle it.
	 *
	 * @param coreIconToMimic Mimicable Items: `"PlayerList"`, `"Backpack"`,
	 * `"Chat"`, `"EmotesMenu"`
	 */
	mimic: (
		coreIconToMimic: "PlayerList" | "Backpack" | "Chat" | "EmotesMenu"
	) => Icon;
}

declare const Icon: IconConstructor;
export default Icon;
