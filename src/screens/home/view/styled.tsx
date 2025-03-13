import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const StyledCarousel = StyleSheet.create({
    itemContainer: {
      width: width * 0.4,
      height: 180,
      borderRadius: 15,
      overflow: "hidden",
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 6,
      elevation: 5, 
    },
    backgroundImage: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0,0,0,0.3)", 
      borderRadius: 15,
    },
    imageRadius: {borderRadius: 15},
    itemText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
      position: "absolute",
      bottom: 15,
      textAlign: "center",
    },
    paginationContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 10,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "gray",
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: "black",
    },
  });