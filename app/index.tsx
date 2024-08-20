import { Text, View, SafeAreaView } from "react-native";
import Primeiro from '../components/Primeiro'
import Teste from './Teste'
import {Texto, Texto1} from './Teste'
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
      <Teste cor1="blue" cor2="red" />
      <Texto cor="red">Teste de Texto 2</Texto>
      <Texto1>TESTE TEXTO 1</Texto1>

 
    </SafeAreaView>
  );
}
