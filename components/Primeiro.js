import React from "react";
import { View, Text } from "react-native";

// function Primeiro() {
//     return(
//         <View>
//             <Text>Primeiro!!!!!!</Text>
//         </View>
//     );
// }
// export default Primeiro;

// const App = function () {   //Função anônima
//     return(
//         <View>
//             <Text>Primeiro 1</Text>
//         </View>
//     );
// }
// export default App;

// export default function Primeiro() { //Exportando a função diretamente
//     return(
//         <View>
//             <Text>Primeiro 2</Text>
//         </View>
//     );
// }

// export default function () { //Exportando a função anônima diretamente
//     return(
//         <View>
//             <Text>Primeiro 3</Text>
//         </View>
//     );
// }

// export default () => { //Arrow function 
//     return(
//         <View>
//             <Text>Primeiro 4</Text>
//         </View>
//     );
// }

//export default () => <View><Text>Primeiro 5</Text></View>

// export default () => (
//     <View>
//         <Text>Primeiro 6</Text>
//     </View>
// )

// export default ({children}) => (
//     <View>
//         <Text>{children}</Text>
//     </View>
// )

export default ({children}) => (
    <View>
        <Text style={{color:"red"}}>{children}</Text>
    </View>
)