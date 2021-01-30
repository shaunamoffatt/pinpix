import { StyleSheet } from "react-native";

const pink = "#d81159";
const navy = "#07002e";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
    zIndex: 0,
    elevation: 0,
  },
  formView: {
    marginTop: 100,
    padding: 20,
  },
  form: {
    flex: 2,
  },
  image: {
    flex: 0.75,
    marginTop: 100,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  buttonPink: {
    width: "100%",
    backgroundColor: pink,
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
    borderColor: pink,
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
    color: pink,
  },
  input: {
    margin: 20,
    height: 50,
    borderColor: pink,
    borderWidth: 1,
    borderRadius: 10,
  },
  largeText: {
    fontSize: 65,
    fontWeight: "bold",
    color: navy,
    marginTop: 30,
    marginBottom: 10,
  },
});

export { styles };
