import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 24,
    backgroundColor: Colors.earthGreen,
  },
  containerWhite: {
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
  largeTextDark: {
    fontSize: 60,
    fontWeight: "bold",
    color: Colors.darkH,
    marginTop: 30,
    marginBottom: 40,
    //paddingLeft: 50,
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
  mediumTextDark: {
    fontSize: 20,
    color: Colors.darkH,
    // margin: 25,
    marginTop: 10,
    marginLeft: 50,
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
    marginLeft: 50,
    marginRight: 50,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    flex: 0.75,
    resizeMode: "contain",
    marginTop: 90,
    padding: 20,
  },
  logo: {
    flex: 0.5,
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 75,
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
  backgroundContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
    backgroundColor: Colors.earthGreen,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  buttonSmallRound: {
    width: 50,
    height: 50,
    backgroundColor: Colors.lightH,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  colorWhite: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonWhite: {
    backgroundColor: "rgba(0,0,0,0.4)",
    borderColor: "white",
    width: "75%",
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  colorPink: {
    color: Colors.earthGreen,
  },
  input: {
    margin: 20,
    height: 50,
    borderColor: Colors.earthGreen,
    borderWidth: 1,
    borderRadius: 10,
  },
  errorMessage: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.orangeH,
    padding: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#fff",
    marginLeft: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    color: Colors.earthGreen,
  },
});

export { styles };
