import {
    View,
    TouchableOpacity,
    Text,
} from "react-native";

import { styles } from "./ButtonBuscaIdStyle";

export function ButtonBuscaId({
    filtroAtual,
    setFiltro,
}) {

    const botoes = [

        {
            id: "tudo",
            nome: "Tudo",
        },

        {
            id: "em andamento",
            nome: "Em Andamento",
        },

        {
            id: "aberto",
            nome: "Aberta",
        },

    ];


    return (

        <View style={styles.container}>

            {botoes.map((botao) => {

                const selecionado =
                    filtroAtual === botao.id;


                return (

                    <TouchableOpacity
                        key={botao.id}

                        style={[
                            styles.botao,

                            selecionado &&
                                styles.botaoSelecionado,
                        ]}

                        onPress={() =>
                            setFiltro(botao.id)
                        }

                        activeOpacity={0.7}
                    >

                        <Text
                            style={[
                                styles.texto,

                                selecionado &&
                                    styles.textoSelecionado,
                            ]}
                        >
                            {botao.nome}
                        </Text>

                    </TouchableOpacity>

                );

            })}

        </View>

    );
}