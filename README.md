# Poke Speedtest

#### *An app that sends a query to the Speedtest server every 15 seconds in background
#### *[Experimental] This app can bypass some ISP limit your Internet speed

## Platform Support

| OS | Background Mode
| ------- | :-----:
| Android | ✓ 
| iOS | ✓ 

## How To Install

### Android
Download the release APK, install and run the app

### iOS

#### First
You must clone the repository and prepare a computer that the operating system is macOS
```bash
git clone https://github.com/pwin519/poke-speedtest.git
``` 

#### Second
Setting up the React Native development environment as follow
[Install react native](https://reactnative.dev/docs/environment-setup)

Install Xcode from Mac app store
[Xcode on app store](https://apps.apple.com/tw/app/xcode/id497799835)

#### Third
In the root directory of repository
```bash
yarn
cd ios && pod install && cd ..
```

#### Finally
Open the project using Xcode, select "Product" -> "Scheme" -> "Edit Scheme" on menu.
Modify the "Build Configuration" from "Debug" to "Release"

Connect your iPhone to the computer via cable, select your iPhone on Xcode, and build the app

### GNU General Public License
