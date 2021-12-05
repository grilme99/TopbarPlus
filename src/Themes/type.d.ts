declare interface ToggleStateTheme {
	iconBackgroundColor?: Color3;
	iconBackgroundTransparency?: number;
	iconCornerRadius?: UDim;
	iconGradientColor?: ColorSequence;
	iconGradientRotation?: number;
	iconImage?: string;
	iconImageColor?: Color3;
	iconImageTransparency?: number;
	iconScale?: UDim2;
	forcedIconSize?: UDim2;
	iconSize?: UDim2;
	iconOffset?: UDim2;
	iconText?: string;
	iconTextColor?: Color3;
	iconFont?: Enum.Font;
	iconImageYScale?: number;
	iconImageRatio?: number;
	iconLabelYScale?: number;
	noticeCircleColor?: Color3;
	noticeCircleImage?: string;
	noticeTextColor?: Color3;
	noticeImageTransparency?: number;
	noticeTextTransparency?: number;
	baseZIndex?: number;
	order?: number;
	alignment?: "left" | "mid" | "right";
	iconImageVisible?: boolean;
	iconImageAnchorPoint?: UDim2;
	iconImagePosition?: UDim2;
	iconImageSize?: UDim2;
	iconImageTextXAlignment?: Enum.TextXAlignment;
	iconLabelVisible?: boolean;
	iconLabelAnchorPoint?: UDim2;
	iconLabelPosition?: UDim2;
	iconLabelSize?: UDim2;
	iconLabelTextXAlignment?: Enum.TextXAlignment;
	iconLabelTextSize?: UDim2;
	noticeFramePosition?: UDim2;
	clickSoundId?: string;
	clickVolume?: number;
	clickPlaybackSpeed?: number;
	clickTimePosition?: number;
}

declare interface Theme {
	/** Settings which describe how an item behaves or transitions between states */
	action?: {
		toggleTransitionInfo?: TweenInfo;
		resizeInfo?: TweenInfo;
		repositionInfo?: TweenInfo;
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

		hovering?: ToggleStateTheme;
	};

	/** Settings where toggleState doesn't matter (they have a singular state) */
	other?: {
		// Caption settings
		captionBackgroundColor?: Color3;
		captionBackgroundTransparency?: number;
		captionTextColor?: Color3;
		captionTextTransparency?: number;
		captionBlockerTransparency?: number;	// this isn't present in the upstream, leaving in place
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
		dropdownSize?: UDim2;	// this isn't present in the upstream, leaving in place
		dropdownCanvasSize?: UDim2;	// this isn't present in the upstream, leaving in place
		dropdownMaxIconsBeforeScroll?: number;	// this isn't present in the upstream, leaving in place
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
		dropdownIgnoreClipping?: boolean;	// this isn't present in the upstream, leaving in place
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
		menuSize?: UDim2;	// this isn't present in the upstream, leaving in place
		menuCanvasSize?: UDim2;	// this isn't present in the upstream, leaving in place
		menuListPadding?: UDim;	// this isn't present in the upstream, leaving in place

		menuScrollBarColor?: Color3;
		menuScrollBarTransparency?: number;
		menuScrollBarThickness?: number;
		menuIgnoreClipping?: boolean;	// this isn't present in the upstream, leaving in place
	};
}
