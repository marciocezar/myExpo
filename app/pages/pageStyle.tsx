import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import Estilo from "../../assets/style/geral";

export default ()=> {
  return (
    <View style={Estilo.areView}>
      <Text>Segunda Pagina</Text>
      <Text>Olá mundo!</Text>

      <Pressable style={Estilo.botaoBack}>
        <Link href="/">
          <Text style={Estilo.textLink}>Voltar Home</Text>
        </Link>
      </Pressable>
    </View>
  );
}