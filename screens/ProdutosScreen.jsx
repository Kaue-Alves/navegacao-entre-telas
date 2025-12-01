import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import lista from "../data/lista";
import ItemProduto from "../components/ItemProduto";
import { useFocusEffect } from "@react-navigation/native";

export default function ProdutosScreen() {
    const [listaDeProdutos, setListaDeProdutos] = useState([...lista]);

    useFocusEffect(
        React.useCallback(() => {
            setListaDeProdutos([...lista]);
        }, [])
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Lista de Produtos Cadastrados
                    </Text>

            {listaDeProdutos.length > 0 ? (
              <FlatList
                        style={styles.flatList}
                        data={listaDeProdutos}
                        renderItem={({ item }) => (
                            <ItemProduto
                                nome={item.nome}
                                imagem={item.imagem}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                    />
            ) : (
                <Text style={styles.mensagem}>Cadastre Um Produto Para Visualizar</Text>
                    )}

                    
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8E9EB",
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    flatList: {
        width: "100%",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#333",
        marginBottom: 32,
        textAlign: "center",
  }, mensagem: {
      fontSize: 18,
        fontWeight: "700",
        color: "#914040",
        marginTop: 62,
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
