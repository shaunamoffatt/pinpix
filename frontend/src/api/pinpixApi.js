import axios from "axios";
//Could use ngrok for dev to connect mobile testing device to localhost 3000
// https://docs.expo.io/workflow/debugging/
// Android dev: instead of ngrok, get the device name run:
//  $ adb devices
// then run :
// $ adb -s <device name> reverse tcp:3000 tcp:3000
export default axios.create({
  baseURL: "http://localhost:3000/",
});
