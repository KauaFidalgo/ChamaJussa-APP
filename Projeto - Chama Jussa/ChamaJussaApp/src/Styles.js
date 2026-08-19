import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    safeContainer: {
        flex: 1,

        backgroundColor: "#080808",
    },

    container: {
        flex: 1,

        backgroundColor: "#080808",
    },

    scroll: {
        flex: 1,

        paddingHorizontal: 15,
    },

    scrollContent: {
        paddingBottom: 20,
    },

    loading: {
        alignItems: "center",

        justifyContent: "center",

        paddingVertical: 40,
    },

    loadingText: {
        color: "#777",

        fontSize: 14,

        marginTop: 10,
    },

    erroContainer: {
        alignItems: "center",

        justifyContent: "center",

        padding: 30,
    },

    erroText: {
        color: "#ff1c24",

        fontSize: 15,

        textAlign: "center",
    },

    vazioContainer: {
        alignItems: "center",

        justifyContent: "center",

        paddingVertical: 40,
    },

    vazioText: {
        color: "#777",

        fontSize: 15,

        textAlign: "center",
    },

});

export default styles;