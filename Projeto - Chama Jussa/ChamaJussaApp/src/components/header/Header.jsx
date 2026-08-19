import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./HeaderStyle";

export function Header() {
    return (
        <View style={styles.container}>

            {/* PARTE ESQUERDA */}
            <View style={styles.informacoes}>
                <Text style={styles.ola}>
                    Olá, Késsia
                </Text>

                <Text style={styles.titulo}>
                    Minhas OS’s
                </Text>
            </View>


            


            {/* BOTÃO NOVA OS */}
            <TouchableOpacity
                style={styles.botaoNovaOS}
                activeOpacity={0.8}
            >

                <Ionicons
                    name="document-text-outline"
                    size={20}
                    color="#ffffff"
                />

                <Text style={styles.botaoTexto}>
                    Nova OS
                </Text>

            </TouchableOpacity>

        </View>
    );
}