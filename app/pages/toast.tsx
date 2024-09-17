import { Text, SafeAreaView, Pressable } from "react-native";
import { Link } from "expo-router";
import Estilo from "../../assets/style/geral"

export default function Toast(){
    return(
        <SafeAreaView style={Estilo.areView}>
            <Text style={Estilo.text}>Toast Page</Text>
            <Pressable style={Estilo.botaoGo}>
                <Link style={Estilo.textLink} href="/">
                    <Text>Show!!!</Text>
                </Link>
            </Pressable>
            <Pressable style={Estilo.botaoBack}>
                <Link style={Estilo.textLink} href="/">
                    <Text>Voltar</Text>
                </Link>
            </Pressable>
        </SafeAreaView>
    );
}