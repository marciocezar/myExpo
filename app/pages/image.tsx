import { Text, SafeAreaView, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import Estilo from "../../assets/style/geral";
export default function App() {
    const router = useRouter();
    return (
        <SafeAreaView style={Estilo.safeArea}>
            <Text>Teste de Image</Text>
            <Pressable style={Estilo.botaoGo}
                onPress={() => router.push("/")}>
                <Text style={Estilo.textLink} >Voltar</Text>
            </Pressable>
        </SafeAreaView>
    );
}