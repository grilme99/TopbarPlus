# @roblox-ts/topbar-plus
This ia a Typescript port of [ForeverHD's Topbar+ module](https://github.com/1ForeverHD/TopbarPlus).

This port does change some usage of the module, so the official documentation may not work 1:1.
<!--- OLD README, TODO UPDATE EXAMPLES
# Example
Part of this module must be initiated on the server.

**Server**
```typescript
import '@rbxts/topbar-plus'
```

**Client**
```typescript
import TopbarPlus from '@rbxts/topbar-plus'

const selectedColor = Color3.fromRGB(0, 170, 255)
const selectedColorDarker = Color3.fromRGB(0, 120, 180)
TopbarPlus.setGameTheme({
    toggleTweenInfo: new TweenInfo(0.15, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),

    button: {
        selected: {
            ImageTransparency: 0.1,
            ImageColor3: Color3.fromRGB(255, 255, 255),
        },
    },
    image: {
        selected: {
            ImageColor3: Color3.fromRGB(255, 255, 255),
        },
        deselected: {
            ImageColor3: Color3.fromRGB(255, 255, 255),
        },
    },
    notification: {
        selected: {
            Image: 'http://www.roblox.com/asset/?id=4882430005',
            ImageColor3: Color3.fromRGB(255, 255, 255),
        },
        deselected: {
            Image: 'http://www.roblox.com/asset/?id=4882430005',
            ImageColor3: selectedColor,
        },
    },
    amount: {
        selected: {
            TextColor3: selectedColor,
        },
        deselected: {
            TextColor3: Color3.fromRGB(255, 255, 255),
        },
    },
    gradient: {
        selected: {
            Color: new ColorSequence(selectedColor, selectedColorDarker),
            Rotation: 90,
        },
    },
    label: {
        selected: {
            TextColor3: Color3.fromRGB(255, 255, 255),
        },
    },
})

{
    const icon = TopbarPlus.createFakeChat()
    icon.setCaption('Chat')
}

{
    const icon = TopbarPlus.createIcon('HD', 4882428756, 0)
    icon.setCaption('Hd Admin')
    icon.setTip('Right click for dropdown')
    icon.createDropdown([
        {
            name: 'About',
            icon: 'rbxassetid://2746077483',
            clicked: () => {
                print('Navigate to About')
            },
            events: [],
        },
        {
            name: 'Commands',
            icon: 'rbxassetid://2746074974',
            clicked: () => {
                print('Navigate to Commands')
            },
            events: [icon.selected],
        },
        {
            name: 'Roles',
            icon: 'rbxassetid://2746105644',
            clicked: () => {
                print('Navigate to Roles')
            },
            events: [],
        },
        {
            name: 'Settings',
            icon: 'rbxassetid://2746112353',
            clicked: () => {
                print('Navigate to Settings')
            },
            events: [],
        },
    ])
}

{
    const icon = TopbarPlus.createIcon('Shop', 4882429582, 1)
    icon.setCaption('Shop')
}

{
    const icon = TopbarPlus.createIcon('Play', 2691104402, 1)
    icon.setMid()
    icon.setLabel('Play')
    icon.setTip('Click to enter the game!')
    icon.setImageSize(20, 16)
}

{
    const icon = TopbarPlus.createIcon('Settings', 2484556379, 1)
    icon.setRight()
    icon.notify()
    icon.setControllerTip('Settings')
    coroutine.wrap(() => {
        while (true) {
            icon.notify(icon.selected)
            wait(5)
        }
    })()
}

{
    const icon = TopbarPlus.createIcon('Menu', 5855364984, 3)
    icon.setRight()
    icon.notify(icon.selected)
    icon.createDropdown([
        {
            name: 'About',
            icon: 'rbxassetid://2746077483',
            clicked: () => {
                print('Navigate to About')
            },
            events: [],
        },
        {
            name: 'Commands',
            icon: 'rbxassetid://2746074974',
            clicked: () => {
                print('Navigate to Commands')
            },
            events: [icon.selected],
        },
        {
            name: 'Roles',
            icon: 'rbxassetid://2746105644',
            clicked: () => {
                print('Navigate to Roles')
            },
            events: [],
        },
        {
            name: 'Settings',
            icon: 'rbxassetid://2746112353',
            clicked: () => {
                print('Navigate to Settings')
            },
            events: [],
        },
    ])
}
```
--->