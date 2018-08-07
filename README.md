# Edge Components

#### React Native Component catalog and development environment for iOS and Android

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![GitHub issues](https://img.shields.io/github/issues/EdgeApp/edge-components.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr/EdgeApp/edge-components.svg)

## Install Dependencies

````javascript
yarn```

## Install & Run
```javascript
# installs on iPhone6 by default
react-native run-ios
# In a browser, open localhost:7007 to use the web interface
````

```javascript
# installs on specific iOS
react-native run-ios --simulator="iPhone X"
# In a browser, open localhost:7007 to use the web interface
```

```javascript
react-native run-android
# In a browser, open localhost:7007 to use the web interface
```

## How To Develop A Component

- Setup new component
  - Add new component to `src/`
- Setup new story
  - Add new story to `storybook/`
  - Add a `<Scene>`
  - Add `<Header>`, `<Body>`, `<Footer>` (optional)
  - Add new component
- Tweak new component

## JSX Preview ([docs](https://github.com/storybooks/storybook/tree/master/addons/knobs))

Using the `Knobs` addon, users of this catalog can modify properties of the component from the web interface (`localhost:7007`)

## Knobs ([docs](https://github.com/storybooks/storybook/tree/master/addons/knobs))

Using the `Knobs` addon, users of this catalog can modify properties of the component from the web interface (`localhost:7007`)

## Having trouble?

#### Problem:

```javascript
TypeError: undefined is not a function (evaluating 'Object.getOwnPropertySymbols(object)')
```

#### Solution:

Android must be run in `debug mode` to function properly

#### Problem:

```javascript
'websocket: connection error', 'Failed to connect to localhost/127.0.0.1:7007'
```

#### Solution:

`adb reverse tcp:7007 tcp:7007`

## Contributing

##### Please follow the coding conventions defined in [Edge Conventions](https://github.com/Airbitz/edge-conventions)
