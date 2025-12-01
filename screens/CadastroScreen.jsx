import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import lista from "../data/lista";

export default function CadastroScreen() {
    const [produto, setProduto] = useState("");
    const [imagem, setImagem] = useState("");
    const [isNomeFocused, setIsNomeFocused] = useState(false);
    const [isImagemFocused, setIsImagemFocused] = useState(false);

    const handleSubmit = () => {
        let tamanho = lista.length;

        if (produto !== "") {
            lista.push({
                id: tamanho + 1,
                nome: produto,
                imagem: imagem,
            });

            alert("produto inserido com sucesso!");
            setProduto("");
            setImagem("");
            return;
        }

        alert("Digite o nome do produto!");
        return;
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Cadastro de Produtos</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nome do Produto</Text>
                        <TextInput
                            value={produto}
                            onChangeText={setProduto}
                            onFocus={() => setIsNomeFocused(true)}
                            onBlur={() => setIsNomeFocused(false)}
                            style={[
                                styles.inputTexto,
                                isNomeFocused && styles.inputFocused,
                            ]}
                            placeholder="Digite o nome do produto"
                            placeholderTextColor="#999"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Imagem do Produto</Text>
                        <TextInput
                            value={imagem}
                            onChangeText={setImagem}
                            onFocus={() => setIsImagemFocused(true)}
                            onBlur={() => setIsImagemFocused(false)}
                            style={[
                                styles.inputTexto,
                                isImagemFocused && styles.inputFocused,
                            ]}
                            placeholder="Digite o link para imagem do produto"
                            placeholderTextColor="#999"
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </Pressable>
                    </View>

                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

//cores: "#F06543", "#E8E9EB", "#E0DFD5"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8E9EB",
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#333",
        marginBottom: 32,
        textAlign: "center",
    },
    inputContainer: {
        width: "100%",
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#555",
        marginBottom: 8,
    },
    inputTexto: {
        width: "100%",
        height: 48,
        backgroundColor: "#E0DFD5",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#333",
    },
    inputFocused: {
        borderColor: "#F06543",
        borderWidth: 2,
    },
    buttonContainer: {
        width: "100%",
        marginBottom: 16,
    },
    button: {
        width: "100%",
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F06543",
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: 400,
    },
});
