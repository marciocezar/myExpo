import { Text, View, SafeAreaView } from "react-native";
import Primeiro from '../components/Primeiro'

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Bem-vindo ao novo teste!!!  </Text>
      
      <Primeiro>Primeiro 7</Primeiro>

    </SafeAreaView>
  );
}
