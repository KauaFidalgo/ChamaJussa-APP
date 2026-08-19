import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    card: {
        backgroundColor: "#0d0d0d",

        borderWidth: 1,

        borderColor: "#14591f",

        borderRadius: 12,

        padding: 20,

        marginBottom: 15,
    },

    topo: {
        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "center",

        marginBottom: 12,
    },

    id: {
        color: "#22c55e",

        fontSize: 18,

        fontWeight: "bold",
    },

    titulo: {
        color: "#eeeeee",

        fontSize: 16,

        fontWeight: "bold",

        marginBottom: 8,
    },

    descricao: {
        color: "#858585",

        fontSize: 14,

        lineHeight: 20,
    },

    status: {
        flexDirection: "row",

        alignItems: "center",

        backgroundColor: "#103218",

        paddingHorizontal: 12,

        paddingVertical: 7,

        borderRadius: 20,
    },

    ponto: {
        width: 7,

        height: 7,

        borderRadius: 10,

        backgroundColor: "#22c55e",

        marginRight: 6,
    },

    statusTexto: {
        color: "#22c55e",

        fontSize: 13,

        fontWeight: "bold",
    },

});