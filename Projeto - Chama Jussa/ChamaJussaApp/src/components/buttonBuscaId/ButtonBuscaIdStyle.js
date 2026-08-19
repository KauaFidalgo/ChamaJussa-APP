import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flexDirection: "row",

        paddingHorizontal: 15,

        marginBottom: 15,

        gap: 8,

        flexWrap: "wrap",
    },

    botao: {
        height: 36,

        paddingHorizontal: 14,

        borderWidth: 1,

        borderColor: "#555555",

        borderRadius: 20,

        justifyContent: "center",

        alignItems: "center",
    },

    botaoSelecionado: {
        backgroundColor: "#ed1c24",

        borderColor: "#ed1c24",
    },

    texto: {
        color: "#999999",

        fontSize: 13,

        fontWeight: "500",
    },

    textoSelecionado: {
        color: "#ffffff",

        fontWeight: "bold",
    },

});