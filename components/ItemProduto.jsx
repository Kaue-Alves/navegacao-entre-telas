import { Image, StyleSheet, Text, View } from "react-native";

export default function ItemProduto(item) {
    return (
        <View style={styles.container}>
            <Text style={styles.nomeDoProduto}>{item.nome}</Text>
            <Image
                source={{ uri: item.imagem }}
                style={styles.imagemDoProduto}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 66,
        marginBottom: 16,
        paddingHorizontal: 16,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#E0DFD5",
    },
    nomeDoProduto: {
        fontSize: 18,
    },
    imagemDoProduto: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 20,
    },
});
