import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 24,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    //backgroundColor: "white",
    padding: 24,
  },
  headerRight: {
    alignItems: "flex-end",
    paddingRight: 20,
    paddingTop: 40,
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
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
    marginTop: 30,
    marginBottom: 10,
    paddingLeft: 24,
  },
  mediumText: {
    fontSize: 32,
    color: "white",
    margin: 25,
    marginTop: 10,
    marginRight: 50,
  },
  formView: {
    marginTop: 100,
    padding: 20,
  },
  form: {
    flex: 2,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  onBoardingIconCenter: {
    flex: 0.4,
    marginTop: 75,
    marginLeft:50,
    marginRight:50,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    flex: 0.75,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
    marginTop: 90,
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  profilePicBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
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
  errorMessage: {
    fontSize: 16,
    color: Colors.pink,
    marginTop: 15,
  },
});

export { styles };
