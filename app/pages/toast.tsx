import { Text, SafeAreaView, Pressable, Dimensions } from "react-native";
import { Link } from "expo-router";
import Estilo from "../../assets/style/geral";
import Toast from "react-native-toast-message";

export default function App(){
    const windowHeight = Dimensions.get('window').height;

    const showToast = () => {
        Toast.show({
            type: 'success', //success, error , info
            text1: 'Teste de titulo', // Titulo da minha mensagem
            text2: 'Teste da minha mensagem.', // Minha mensagem 
            position: 'bottom', // top, bottom
        });
    };
    const showToast1 = () => {
        Toast.show({
            type: 'success', //success, error , info
            text1: 'Mensagem 2', // Titulo da minha mensagem
            text2: 'Texto de msg 2.', // Minha mensagem 
            position: 'top', // top, bottom
            topOffset: windowHeight / 2 - 50,
        });
    };    
    return(
        <SafeAreaView style={Estilo.areView}>

            <Text style={Estilo.text}>Toast Page</Text>
            
            <Pressable style={Estilo.botaoGo}
             onPress={showToast}>
                    <Text style={Estilo.textToast} >Show 1!!!</Text>
            </Pressable>

            <Pressable style={Estilo.botaoGo}
             onPress={showToast1}>
                    <Text style={Estilo.textToast} >Show 2!!!</Text>
            </Pressable>

            <Pressable style={Estilo.botaoBack}>
                <Link style={Estilo.textLink} href="/">
                    <Text>Voltar</Text>
                </Link>
            </Pressable>
            <Toast/>
        </SafeAreaView>
    );
}