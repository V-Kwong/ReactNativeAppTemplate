# Template Set Up

will need to add things here

1. AWS

2. Firebase

3. rename app https://github.com/junedomingo/react-native-rename https://github.com/V-Kwong/WorryFreeFinance/commit/d89b6bdce45ea6cf82ee1972275d567c1a68b158

# Template

Hey yo, welcome to the \_\_\_ software!

PLS USE yarn and NOT npm

## Set up

1. https://reactnative.dev/docs/environment-setup \
   Select _React Native CLI Quickstart_, we do NOT use expo
2. yarn install
3. npx pod-install
4. git config --global pull.rebase true

---

if you have Apple Silicon \
 brew install cocoapods \
 cd ios/ \
 sudo arch -x86_64 gem install ffi \
 arch -x86_64 pod install \

---

## Run App

1. yarn start --reset-cache (might need the reset cache flag if npm modules or pods are out of)
2. Choose your own adventure (pick one to use)\
    a) yarn run android \
    b) yarn run ios \
    c) Open XCode @ Dawn/ios/Dawn.xcworkspace, then build project \
    d) Open Android Studio @ Dawn/android, then build project \

   Running On Physical Device: https://reactnative.dev/docs/running-on-device

3. For XCode, you will need to be added to the Dawn iOS development team. Please contact Vincent for set up. https://appstoreconnect.apple.com/access/users

## Visual Studio Code + Making Small edits

Download: https://code.visualstudio.com/download \
Lets make some edits to the app! Near the top of the discover theres a timer with the words "new daily suggested in:". Why don't we change that?\
0. Run the App

1. Open VS Code
2. Open the "Dawn" folder in VSCode
3. Look up "new daily suggested in" in VS Code under the "DiscoverScreen.js"
4. Go ahead and change that to something else
5. Save the changes (CNTRL + S)
6. The changes should happen in real time

## Making Visual Studios Prettier

So nice, we got visual studios to work. Awesome! But, with so many people on the code base, formating it so it looks nice and neat can be a challange. \
Enter "Prettier". Prettier is a VScode extension that makes all your code look, well prettier!\

1. open Visual Studio code
2. Go to the "Extensions" tab. It's on the right right under "Run and Debug"
3. In the "Extensions" tab, search for "Prettier" and hit install
4. Now that we have Prettier lets change the settings so they match the Dawn team settings
5. Click the gear at the bottom of the tab. Then go to "Settings". You can also use CNTRL + ' (windows) or CMND + ' (mac) shortcuts to do the same thing
6. In the settings tab look up "Editor: Default Formatter", select "Prettier - Code formatter" in the drop-down menu
7. Look up "Prettier: Bracket Spacing" and uncheck the box
8. Look up "Prettier: jsx Bracket Same Line" and check the box
9. Look up "Prettier: Single Quote" and check the box
10. Look up "Prettier: Trailing Comma" and select "all"
11. Look Up "Prettier: Arrow Parens" and select "avoid"
12. Look up "Editor: Format on Save" and check the box

## File Imports

we try to sort imports so that we can easily scan a file and know whats imported and whats not. here is the import order:

1. third party UI libraries (from first used to last) (ex. React, React Native (View), React Native Safe Area Context (SafeAreaView), React Native Paper (TextInput), etc)

2. third party functional libraries (ex. notifee, screenshot listener)

3. internal functional files (any util files)

4. internal UI files (Colors, styles, Internal Components (AppText, CarouselSlide))

## Development

the below isnt ideal. good to know some git CLI tho, but please download Github Desktop https://desktop.github.com/

Link the local repo with github Desktop. You may need to sign to your github account at some point and may need to enter a username and a Personal Access Token. Check this link out 👇 \
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

each commit you make should be for a specific change. keep them small and granular. all good if you have a lot of commits 👌

throw up a Pull Request asap. if you ever need help, you can send a link to your PR so everyone can see what changes you've made so far. early feedback is always best 👌

~~1. create branch - git branch branch-name~~
~~2. push branch to remote - git push origin branch-name~~
~~3. do regular stuff~~
~~4. time to merge~~
~~5. git fetch~~
~~6. git rebase master~~
~~7. work through commit conflicts~~
~~8. do below if dependency conflicts~~
~~9. git checkout --ours package-lock.json && npm install~~
~~10. git checkout --ours ios/Podfile.lock && npx pod-install~~
~~11. Open Github Desktop~~
~~12. In Menu, click Branch > Create Pull Request~~
~~13. nice~~
~~14. deploy after review~~

## Firebase Cloud Functions

We use Firebase cloud functions to offload some tasks to the cloud (rather than running it client side).

To test cloud functions run "firebase experimental:functions:shell" in a terminal at the DawnBlindDating folder. To run a function, simply call that function and pass in any needed parameters. For example, if I want to run getDailyRecs locally, I might enter getDailyRecs({locationDoc:'sfu', modeCollection:'solo', gender:'non-binary',currFetchTime:'Fri Aug 11 2023 12:00:00 GMT-0700'}) into the terminal.

Remember that the local emulator has no access to the context parameter. You will have to replace something like clientUserID = context.auth.uid, with clientUserID = 'NXqiara67OUVNh8BOLH5AkDgDoI2'.

Here's a blog that goes step by step on how to set it up -> https://firebase.blog/posts/2017/09/testing-functions-locally-with-cloud/

To deploy functions, simply run firebase deploy. If it asks you to delete things, just say no. Remember to bring back the context parameters if you replaced them while testing!

## Publish iOS (https://reactnative.dev/docs/publishing-to-app-store)

1. Change Info.plist (NSExceptionDomains, NSAllowsArbitraryLoads)
   ![Screenshot 2023-08-26 at 7 36 31 PM](https://github.com/V-Kwong/DawnBlindDating/assets/19319237/4197b8aa-3fb0-48da-86eb-8bb676298e1e)
2. Open Xcode → Dawn → General. Change Build Number and/or Version.
   ![Screenshot 2023-08-26 at 7 41 54 PM](https://github.com/V-Kwong/DawnBlindDating/assets/19319237/52b80c23-638b-481d-8f90-d4353ff5cb95)
3. Xcode → Product → Scheme → Edit Scheme. Select the Run tab in the sidebar, then set the Build Configuration dropdown to Release.
   ![Screenshot 2023-08-26 at 7 42 30 PM](https://github.com/V-Kwong/DawnBlindDating/assets/19319237/713c2320-c10a-4713-9dca-3a86da415721)
4. Build + Test on device
5. Select "Any iOS Device (arm64, armv7)" for device
   ![Screenshot 2023-08-26 at 7 43 09 PM](https://github.com/V-Kwong/DawnBlindDating/assets/19319237/c2603939-8228-4846-8bcc-9f85e645e800)
6. Product → Archive (this build takes awhile, run it before you go cook dinner or something)
7. Window → Organizer
8. Select Build and Distribute App
9. Click Distribute App and then keep clicking through
   ![Screenshot 2023-08-26 at 9 27 50 PM](https://github.com/V-Kwong/DawnBlindDating/assets/19319237/23c992b3-cfcf-4187-aa9b-dcbdef9bfcbd)
10. https://appstoreconnect.apple.com/login

git stash apply stash^{/release} if changes are stashed

## Publish Android (https://reactnative.dev/docs/signed-apk-android)

1. Update versionCode and/or versionName in android/app/build.gradle
2. Update android/gradle.properties with

MYAPP_UPLOAD_STORE_FILE=\*\*\*

MYAPP_UPLOAD_KEY_ALIAS=\*\*\*

MYAPP_UPLOAD_STORE_PASSWORD=\*\*\*

MYAPP_UPLOAD_KEY_PASSWORD=\*\*\*

3. cd android
4. ./gradlew clean && ./gradlew bundleRelease
5. ./gradlew --stop (in the case of errors)
6. Test release build
7. cd ..
8. npx react-native run-android --variant=release
9. https://play.google.com/console/u/1/developers/6984240603532245654/app/4974682902251400878/tracks/production
10. 'Create new release' in top right corner
11. 'Upload'
12. Select `app-release.aab` in `__/android/app/build/outputs/bundle/release` (takes a second to upload)
13. Fill in Release notes
14. Click save and then keep clicking through

git stash apply stash^{/release} if changes are stashed

## Sentry Upload Source Maps

1. Bundle/minify with metro (react-native) to get the packager source map (.packager.map):

2. Compile to bytecode using hermes to get the compiler source map (.hbc.map). OS-BIN is osx-bin, win64-bin, or linux64-bin, depending on which operating system you are using.

3. Merge the two source maps using compose-source-maps to get the final source map (.map):

   npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output index.android.bundle --sourcemap-output index.android.bundle.packager.map && node_modules/hermes-engine/osx-bin/hermesc -O -emit-binary -output-source-map -out=index.android.bundle.hbc index.android.bundle && node node_modules/react-native/scripts/compose-source-maps.js index.android.bundle.packager.map index.android.bundle.hbc.map -o index.android.bundle.map

   npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output main.jsbundle --sourcemap-output main.jsbundle.packager.map && node_modules/hermes-engine/osx-bin/hermesc -O -emit-binary -output-source-map -out=main.jsbundle.hbc main.jsbundle && node node_modules/react-native/scripts/compose-source-maps.js main.jsbundle.packager.map main.jsbundle.hbc.map -o main.jsbundle.map

4. Upload the bundle and source maps

   sentry-cli releases -o emergence -p dawn &#92; \
    files dawn-android@<version> &#92; \
    upload-sourcemaps &#92; \
    --dist <buildNum> &#92; \
    --strip-prefix /Users/vkwong/ReactNativeProjects/Dawn &#92; \
    --rewrite index.android.bundle index.android.bundle.map

   sentry-cli releases -o emergence -p dawn &#92; \
    files dawn-ios@<version> &#92; \
    upload-sourcemaps &#92; \
    --dist <buildNum> &#92; \
    --strip-prefix /Users/vkwong/ReactNativeProjects/Dawn &#92; \
    --rewrite main.jsbundle main.jsbundle.map

change to version name 10.0.3 versionCode/build 126

## Sentry iOS Uploading Debug Symbols

1. Open Xcode Organizer, go to your app, and click “Download dSYMs...”
2. Login to iTunes Connect, go to your app, go to “Activity, click the build number to go into the detail page, and click “Download dSYM”
3. Download appDsyms.zip into root directory from App Store Connect > Dawn > Current Version > Build > Build Metadata > Includes Symbols Yes | Download dSYM
4. sentry-cli --auth-token $SENTRY_AUTH_TOKEN upload-dif --org emergence --project dawn appDsyms.zip
