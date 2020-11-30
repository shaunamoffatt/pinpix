 import { StyleSheet } from 'react-native'

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  image: {
    flex: 0.75,
    marginTop: 100,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  button: {
    width: "100%",
    backgroundColor: "#d81159",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  colorWhite: {
    color: "white"
  },
  buttonWhitePinkBorder: {
    backgroundColor: "white",
    borderColor: "#d81159",
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  colorPink: {
    color: "#d81159"
  }

  });

  export { styles }