import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        height: 76,

        width: "100%",

        backgroundColor: "#090909",

        borderWidth: 1,

        borderColor: "#123d20",

        borderRadius: 12,

        paddingHorizontal: 16,

        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",

        marginBottom: 10,

        shadowColor: "#22c55e",

        shadowOffset: {
            width: 0,
            height: 0,
        },

        shadowOpacity: 0.15,

        shadowRadius: 8,

        elevation: 3,
    },


    informacoes: {
        justifyContent: "center",

        flex: 1,
    },


    ola: {
        color: "#dddddd",

        fontSize: 14,

        marginBottom: 3,
    },


    titulo: {
        color: "#ffffff",

        fontSize: 18,

        fontWeight: "bold",
    },


    headerCentral: {
        flexDirection: "row",

        alignItems: "center",

        gap: 8,

        marginHorizontal: 12,
    },


    headerTexto: {
        color: "#22c55e",

        fontSize: 17,

        fontWeight: "500",
    },


    botaoNovaOS: {
        height: 38,

        paddingHorizontal: 14,

        backgroundColor: "#22c55e",

        borderRadius: 8,

        flexDirection: "row",

        alignItems: "center",

        justifyContent: "center",

        gap: 7,

        shadowColor: "#22c55e",

        shadowOffset: {
            width: 0,

            height: 3,
        },

        shadowOpacity: 0.35,

        shadowRadius: 5,

        elevation: 5,
    },


    botaoTexto: {
        color: "#ffffff",

        fontSize: 14,

        fontWeight: "bold",
    },

});