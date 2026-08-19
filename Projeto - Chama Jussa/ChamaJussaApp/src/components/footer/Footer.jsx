import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./FooterStyle";

export function Footer() {

    return (
        <View style={styles.container}>

            {/* MINHAS OS */}
            <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
            >

                <Ionicons
                    name="clipboard-outline"
                    size={28}
                    color="#ed1c24"
                />

                <Text style={[styles.texto, styles.textoAtivo]}>
                    Minhas OS
                </Text>

            </TouchableOpacity>


            {/* CRIAR OS */}
            <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
            >

                <Ionicons
                    name="add-circle-outline"
                    size={31}
                    color="#999999"
                />

                <Text style={styles.texto}>
                    Criar OS
                </Text>

            </TouchableOpacity>


            {/* NOTIFICAÇÕES */}
            <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
            >

                <Ionicons
                    name="notifications-outline"
                    size={29}
                    color="#999999"
                />

                <Text style={styles.texto}>
                    Notificações
                </Text>

            </TouchableOpacity>


            {/* PERFIL */}
            <TouchableOpacity
                style={styles.item}
                activeOpacity={0.7}
            >

                <Ionicons
                    name="person-outline"
                    size={29}
                    color="#999999"
                />

                <Text style={styles.texto}>
                    Perfil
                </Text>

            </TouchableOpacity>

        </View>
    );
}