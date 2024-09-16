import { Text, View, SafeAreaView, Pressable } from "react-native";
import Primeiro from '../components/Primeiro'
import Teste from './Teste'
import { Texto, Texto1 } from './Teste'
import { Link } from "expo-router";
import Estilo from "../assets/style/geral";

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

      <Pressable style={Estilo.botaoGo}>
        <Link href="./pages/PageStyle">
          <Text style={Estilo.textLink}>
            Ir para a segunda
          </Text>
        </Link>
      </Pressable>

    </SafeAreaView>
  );
}
