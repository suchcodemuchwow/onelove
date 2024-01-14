/** @type {Detox.DetoxConfig} */
module.exports = {
  logger: {
    level: "fatal",
  },
  testRunner: {
    args: {
      $0: "../../node_modules/.bin/jest",
      config: "config/setupDetox.json",
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  artifacts: {
    plugins: {
      log: process.env.CI ? "failing" : undefined,
      screenshot: "failing",
    },
  },
  apps: {
    "ios.release": {
      type: "ios.app",
      build:
        "xcodebuild -workspace ios/onelove.xcworkspace -scheme onelove -configuration Release -sdk iphonesimulator -arch x86_64 -derivedDataPath ios/build",
      binaryPath:
        "ios/build/Build/Products/Release-iphonesimulator/onelove.app",
    },
    "android.release": {
      type: "android.apk",
      build:
        "cd android && ./gradlew :app:assembleRelease :app:assembleAndroidTest -DtestBuildType=release && cd ..",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
    },
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 13 mini",
      },
    },
    attached: {
      type: "android.attached",
      device: {
        adbName: ".*",
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_3a_API_30_x86",
      },
    },
  },
  configurations: {
    "ios.debug": {
      device: "simulator",
      app: "ios.debug",
    },
    "ios.release": {
      device: "simulator",
      app: "ios.release",
    },
    "ios.sim.debug": {
      device: "simulator",
      app: "ios.debug",
    },
    "ios.sim.release": {
      device: "simulator",
      app: "ios.release",
    },
    "android.att.debug": {
      device: "attached",
      app: "android.debug",
    },
    "android.att.release": {
      device: "attached",
      app: "android.release",
    },
    "android.emu.debug": {
      device: "emulator",
      app: "android.debug",
    },
    "android.emu.release": {
      device: "emulator",
      app: "android.release",
    },
  },
};
