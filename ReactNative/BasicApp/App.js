import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";

export default function App() {
  let x = 1;
  console.log("App executed");

  const textPress = () => {
    console.log("Text Pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={textPress}>Hello world, Mr. Saha!</Text>
      <Button
        title="Clickme"
        color="black"
        onPress={() => {
          Alert.alert("Message", "Empty :)", [{ text: "Yes" }, { text: "No" }]);
        }}
      ></Button>
      <TouchableHighlight onPress={() => console.log("Image tap")}>
        <Image
          fadeDuration={1000}
          source={{
            width: 300,
            height: 300,
            uri: "https:/picsum.photos/200/237",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});
