# React-Native with Rails for Building a Cross-Platform Mobile Application.

<div align="center">
  <a href="https://youtu.be/4JeHgpa4GPA">
    <img src="https://i.imgur.com/DyWSamF.gif" width="200"/>
  </a>
</div>

## Description

Cross-platform mobile app prototype, created with a Ruby on Rails API, a React Native front-end and a MongoDB database system. Images can be uploaded and stored on AWS s3 bucket.

## Prerequisites

- [Ruby on Rails](https://rubyinstaller.org/)
- [NPM](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/)
- Android [Command Line Tools](https://developer.android.com/studio#downloads)(for adb )
- Expo Go App for Android : which is available on [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_IE&gl=US) 

## Executing program 

Clone down the repo
```
git clone https://github.com/shaunamoffatt/pinpix.git
```

### Frontend
From the root of the folder
```
cd frontend
```
Set up Expo CLi:
```
npm install -g expo-cli
```
[Running On Android-Device](https://reactnative.dev/docs/running-on-device#method-1-using-adb-reverse-recommended):  Ensure developers options are enabled, device is debugging and device connected to machine via USB cable. Run:
```
adb reverse tcp:3000 tcp:3000
```
Now start expo
```
expo start
```
Ensure that the Expo Go app is one your phone (if it hasn't already opened, open http://localhost:19002, here you can run on android, or press "a" in the terminal).

### Back
From the root of the folder
```
cd backend
```
The environment file is needed. Add it to the root of the backend folder.
It should Look something like this:
```
AWS_ACCESS_KEY_ID='access key id is stored here'
AWS_SECRET_ACCESS_KEY='secret access key id is stored here'
AWS_REGION='us-east-1'
API_SECRET_KEY='secret key for the authentication of the user and their requests to the api is stored here'
```
Bundle the gems
```
bundle install
```
Start the server on localhost:3000
```
rails s
```

