import {
    View,
    Text,
} from "react-native";

import { styles } from "./JussaItensStyle";

export function JussaItens({
    id,
    titulo,
    descricao,
    status,
}) {

    return (

        <View style={styles.card}>

            {/* TOPO */}

            <View style={styles.topo}>

                <Text style={styles.id}>
                    OS - {String(id).padStart(3, "0")}
                </Text>


                <View style={styles.status}>

                    <View style={styles.ponto} />

                    <Text style={styles.statusTexto}>
                        {status}
                    </Text>

                </View>

            </View>


            {/* TÍTULO */}

            <Text style={styles.titulo}>
                {titulo}
            </Text>


            {/* DESCRIÇÃO */}

            <Text style={styles.descricao}>
                {descricao}
            </Text>

        </View>

    );
}