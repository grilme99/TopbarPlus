type ToggleState = "selected" | "deselected";
type IconState = ToggleState | "hovering";
type TopbarBehavior = "dropdown" | "menu" | "caption" | "tip";

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
		iconState?: IconState,
		setAdditional?: string
	): Icon;

	setAdditionalValue(
		settingName: string,
		setAdditional: string,
		value: unknown,
		iconState?: IconState,
	): Icon;

	/**
	 * Retrieves the given settings value. If the setting falls under the 'toggleable'
	 * category then "deselected" or "selected" can be specified, otherwise if left empty
	 * or `nil` will default to retrieving the deselected value.
	 */
	get<T, Y>(
		settingName: string,
		iconState?: IconState,
		getAdditional?: string
	): LuaTuple<[T, Y]>;

	getHovering<T>(settingName: string): T;

	/** Returns the current toggleState, either `"deselected"` or `"selected"`. */
	getToggleState(isSelected?: boolean): ToggleState;

	getIconState(): IconState;

	/**
	 * Applies a theme to the given icon. See
	 * [themes](https://1foreverhd.github.io/TopbarPlus/features/#themes) for more information.
	 */
	setTheme(theme: Theme, updateAfterSettingAll?: boolean): Icon;

	getInstance(instanceName: string): Instance | Icon;

	setInstance(instanceName: string, instance: Instance | Icon): Icon;

	getSettingDetail<T>(targetSettingName: string): T | false;

	modifySetting(settingName: string, dictionary: object): Icon;

	/**
	 * Takes a [NumberSpinner](https://devforum.roblox.com/t/numberspinner-module/1105961) object (by boatbomber) and converts it into the icons label.
	 */
	convertLabelToNumberSpinner(numberSpinner: any): Icon;

	/** When set to `false`, the icon will be disabled and hidden. */
	setEnabled(enabled: boolean): Icon;

	/**
	 * Associates the given name to the icon which enables it to be retrieved with
	 * `IconController.getIcon(name)`.
	 */
	setName(name: string): Icon;

	/**
	 * An alternative way of doing ``zone[propertyName] = value``. This enables the easy-configuration of icon properties within chained methods.
	 */
	setProperty<T>(propertyName: string, value: T): Icon;

	/** Selects the icon (as if it were clicked once). */
	select(byIcon?: Icon): Icon;

	/** Deselects the icon (as if it were clicked, then clicked again). */
	deselect(byIcon?: Icon): Icon;

	/**
	 * Prompts a notice bubble which accumulates the further it is prompted. If the
	 * icon belongs to a dropdown or menu, then the notice will appear on the parent
	 * icon when the parent icon is deselected.
	 */
	notify(clearNoticeEvent?: RBXScriptSignal, noticeId?: string): Icon;
	clearNotices(): Icon;

	/**
	 * When set to true, disables the shade effect which appears when the icon is
	 * pressed and released.
	 */
	disableStateOverlay(disable: boolean): Icon;

	setLabel(text: string, iconState?: IconState): Icon;
	setCornerRadius(
		scale?: number,
		offset?: number,
		iconState?: IconState
	): Icon;
	/**
	 * Applies an image to the icon based on the given `imageId`. `imageId` can be
	 * an assetId or a complete asset string.
	 */
	setImage(imageId: string | number, iconState?: IconState): Icon;
	setOrder(order: number, iconState?: IconState): Icon;
	setLeft(iconState?: IconState): Icon;
	setMid(iconState?: IconState): Icon;
	setRight(iconState?: IconState): Icon;

	/** Defines the proportional space the icons image takes up within the icons container. */
	setImageYScale(yScale: number, iconState?: IconState): Icon;

	/** Defines the x:y ratio dimensions as a number. By default ratio is `1.00`. */
	setImageRatio(ratio: number, iconState?: IconState): Icon;

	/** Defines how large label text appears.By default YScale is `0.45`. */
	setLabelYScale(yScale: number, iconState?: IconState): Icon;

	/**
	 * Calculates the difference between the existing baseZIndex
	 * (i.e. `instances.iconContainer.ZIndex`) and new value, then updates the ZIndex of
	 * all objects within the icon accordingly using this difference.
	 */
	setBaseZIndex(zIndex: number, iconState?: IconState): Icon;

	/** Determines the icons container size. By default `XOffset` and `YOffset` are `32`. */
	setSize(xOffset: number, yOffset: number, iconState?: IconState): Icon;

	/**
	 * Connects to an [icon event](https://1foreverhd.github.io/TopbarPlus/api/icon/#events) based upon the given ``iconEventName`` and call ``eventFunction`` with arguments ``(self, ...)`` when the event is triggered.
	 */
	bindEvent(iconEventName: string, eventFunction: (icon: Icon, ...args: any[]) => void): Icon;

	/**
	 * Unbinds the connection of the associated ``iconEventName``.
	 */
	unbindEvent(iconEventName: string): Icon;

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

	/** Binds a GuiObject or LayerCollector to appear and disappeared when the icon is toggled. */
	bindToggleItem(guiObjectOrLayerCollector: GuiObject | LayerCollector): Icon;

	/** Unbinds the given GuiObject or LayerCollector from the toggle. */
	unbindToggleItem(guiObjectOrLayerCollector: GuiObject | LayerCollector): Icon;

	/**
	 * Passes the given userdata to the Icons maid to be destroyed/disconnected on the icons destruction. If a function is passed, it will be executed right away with its self (the icon) being passed as the first argument. The return value is then given to the maid (instead of the function).
	 */
	give(userData: any): Icon;

	/** Sets a tip. To remove, pass `nil` as `text`. */
	setTip(text?: string): Icon;

	displayTip(display?: boolean): Icon;

	/** Sets a caption. To remove, pass nil as text. */
	setCaption(text?: string): Icon;

	displayCaption(display?: boolean): Icon;

	/**
	 * Parents the icon to the given parentIcon under the specified
	 * feature, either `"dropdown"`, `"menu"`, `"caoption"`, or `"tip"`.
	 */
	join(parentIcon: Icon, featureName: TopbarBehavior, dontUpdate?: boolean): Icon;

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

	/** an alias for you maid-using Pascal lovers */
	Destroy(): Icon;
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
export = Icon;
