import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 24,
    backgroundColor: "white",
  },
  contentContainer:{
    flex:1,
    backgroundColor: "white",
    padding: 24
  },
  text: {
    fontSize: 20,
  },
  centerText: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
  largeText: {
    fontSize: 65,
    fontWeight: "bold",
    color: Colors.navy,
    marginTop: 30,
    marginBottom: 10,
  },
  formView: {
    marginTop: 100,
    padding: 20,
  },
  form: {
    flex: 2,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 0.75,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
    marginTop:90,
    padding: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
  },
  profilePicBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: 16,
  },
  buttonPink: {
    width: "100%",
    backgroundColor: Colors.pink,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  colorWhite: {
    color: "white",
  },
  buttonWhite: {
    backgroundColor: "white",
    borderColor: Colors.pink,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  colorPink: {
    color: Colors.pink,
  },
  input: {
    margin: 20,
    height: 50,
    borderColor: Colors.pink,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export { styles };
