import { Text, View } from 'react-native'

export default ({ cor1, cor2 }: { cor1: string, cor2: string }) => {
    return (
        <View>
            <Text style={{ color: cor1 }}>Teste do conteudo...1</Text>
            <Text style={{ color: cor2 }}>Teste do conteudo...2</Text>
        </View>
    );
}

export function Texto({ children, cor }:
    { children: React.ReactNode, cor: string }) {
    return (
        <Text style={{ color: cor }}>{children}</Text>
    );
}

export function Texto1({ children }: { children: React.ReactNode }) {
    return (
        <Text>{children}</Text>
    );
}