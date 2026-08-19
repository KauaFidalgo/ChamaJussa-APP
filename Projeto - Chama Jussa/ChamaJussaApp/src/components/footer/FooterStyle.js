import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        height: 90,

        width: "100%",

        backgroundColor: "#080808",

        borderTopWidth: 1,

        borderTopColor: "#252525",

        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-around",

        paddingHorizontal: 5,

        marginTop: 10,
    },


    item: {
        flex: 1,

        height: "100%",

        alignItems: "center",

        justifyContent: "center",

        position: "relative",

        gap: 5,
    },


    texto: {
        color: "#858585",

        fontSize: 13,

        textAlign: "center",
    },


    textoAtivo: {
        color: "#ed1c24",

        fontWeight: "500",
    },

});