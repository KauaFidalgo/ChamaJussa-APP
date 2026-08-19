import { useEffect, useState } from "react";

import {
    View,
    ScrollView,
    ActivityIndicator,
    Text,
} from "react-native";

import {
    SafeAreaProvider,
    SafeAreaView,
} from "react-native-safe-area-context";

import axios from "axios";

import styles from "./Styles";

import { Header } from "./components/header/Header";
import { ButtonBuscaId } from "./components/buttonBuscaId/ButtonBuscaId";
import { JussaItens } from "./components/jussaItens/JussaItens";
import { Footer } from "./components/footer/Footer";


export default function App() {

    const [filtro, setFiltro] = useState("tudo");

    const [jussaItens, setJussaItens] = useState([]);

    const [carregando, setCarregando] = useState(true);

    const [erro, setErro] = useState("");


    const API = "http://localhost:3000";


    useEffect(() => {

        async function buscarJussaItens() {

            try {

                setCarregando(true);

                const resposta = await axios.get(
                    `${API}/JussaItens`
                );

                console.log(
                    "DADOS RECEBIDOS DO JSON:",
                    resposta.data
                );

                setJussaItens(resposta.data);

                setErro("");

            } catch (error) {

                console.log(
                    "ERRO AO BUSCAR JSON:",
                    error
                );

                setErro(
                    "Não foi possível carregar as reclamações."
                );

            } finally {

                setCarregando(false);

            }

        }

        buscarJussaItens();

    }, []);


    // ===============================
    // FILTRO
    // ===============================

    const jussaItensFiltradas =
        filtro === "tudo"
            ? jussaItens
            : jussaItens.filter((jussaIten) => {

                const status =
                    jussaIten.atividade
                        ?.toLowerCase()
                        .normalize("NFD")
                        .replace(
                            /[\u0300-\u036f]/g,
                            ""
                        );

                return status === filtro;

            });
            


    return (

        <SafeAreaProvider>

            <SafeAreaView
                style={styles.safeContainer}
            >

                <View style={styles.container}>

                    <Header />

                    <ButtonBuscaId
                        filtroAtual={filtro}
                        setFiltro={setFiltro}
                    />


                    <ScrollView
                        style={styles.scroll}
                        contentContainerStyle={
                            styles.scrollContent
                        }
                        showsVerticalScrollIndicator={false}
                    >

                        {/* CARREGANDO */}

                        {carregando && (

                            <View style={styles.loading}>

                                <ActivityIndicator
                                    size="large"
                                    color="#ed1c24"
                                />

                                <Text style={styles.loadingText}>
                                    Carregando reclamações...
                                </Text>

                            </View>

                        )}


                        {/* ERRO */}

                        {!carregando && erro !== "" && (

                            <View style={styles.erroContainer}>

                                <Text style={styles.erroText}>
                                    {erro}
                                </Text>

                            </View>

                        )}


                        {/* LISTA */}

                        {!carregando &&
                            erro === "" &&
                            jussaItensFiltradas.map(
                                (jussaIten) => (

                                    <JussaItens
                                        key={jussaIten.id}

                                        id={jussaIten.id}

                                        titulo={
                                            jussaIten.titleProblem
                                        }

                                        descricao={
                                            jussaIten.descricaoProblem
                                        }

                                        status={
                                            jussaIten.atividade
                                        }
                                    />

                                )
                            )
                        }


                        {/* NENHUM RESULTADO */}

                        {!carregando &&
                            erro === "" &&
                            jussaItensFiltradas.length === 0 && (

                                <View
                                    style={
                                        styles.vazioContainer
                                    }
                                >

                                    <Text
                                        style={
                                            styles.vazioText
                                        }
                                    >
                                        Nenhuma reclamação encontrada.
                                    </Text>

                                </View>

                            )
                        }

                    </ScrollView>


                    <Footer />

                    

                </View>

            </SafeAreaView>

        </SafeAreaProvider>

    );
}