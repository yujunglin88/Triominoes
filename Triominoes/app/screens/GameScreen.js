import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { useState } from 'react';

const player_names = ['Player 1', 'Player 2'];
const player_scores = [0, 0];
const possible_points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const point_deductions = [-5, -5, -5, -10];
const point_rewards = {
    bridge: 40,
    hexagon: 50,
    double_hexagon: 60,
    triple_hexagon: 70,
    cleared: 25,
};

export default function GameScreen(props) {
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [drawedTiles, setDrawedTiles] = useState(0);
    const [text, setText] = useState(player_scores[currentPlayer]);

    const handelPressAddScore = (points) => {
        player_scores[currentPlayer] += points;
        setText(player_scores[currentPlayer]);
        setCurrentPlayer((currentPlayer + 1) % 2);
        setDrawedTiles(0);
    };
    const handelPressDrawTile = () => {
        player_scores[currentPlayer] += point_deductions[drawedTiles];
        setText(player_scores[currentPlayer]);
        setDrawedTiles(drawedTiles + 1);
        if (drawedTiles == 3) {
            setDrawedTiles(0);
            setCurrentPlayer((currentPlayer + 1) % 2);
        }
    };

    player_names[0] = "Jeff";
    player_names[1] = "Zoe";

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerDisplay}>
                <View style={styles.namesBox1}>
                    <Text style={styles.names}>{player_names[0]}</Text>
                    <Text style={styles.names}>{player_scores[0]}</Text>
                </View>
                <View style={styles.namesBox2}>
                    <Text style={styles.names}>{player_names[1]}</Text>
                    <Text style={styles.names}>{player_scores[1]}</Text>
                </View>
            </View>
            <View style={styles.currentPlayerBox} backgroundColor={currentPlayer == 0 ? 'lightblue' : 'pink'}>
                <Text style={styles.names}>Current Player</Text>
                <Text style={styles.names}>{player_names[currentPlayer]}</Text>
            </View>
            <View style={styles.containerInput}>
                <TouchableOpacity
                    key="Draw a tile"
                    style={styles.btnDrawPad}
                    width="60%"
                    onPress={handelPressDrawTile}
                >
                    <Text style={styles.btnNumPadText}>Draw a tile</Text>
                </TouchableOpacity>
                {
                    // display points button in a grid, 3 x 5
                    possible_points.map((points) => (
                        <TouchableOpacity
                            key={points}
                            style={styles.btnNumPad}
                            onPress={() => handelPressAddScore(points)}
                        >
                            <Text style={styles.btnNumPadText}>{points}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'top',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    containerDisplay: {
        flexDirection: "row",
        flexWrap: 'wrap',
        backgroundColor: '#a0d',
        alignItems: 'top',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    containerInput: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        gap: 10,
        flexWrap: 'wrap',
    },
    namesBox1: {
        flex: 1,
        width: '50%',
        height: 100,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    namesBox2: {
        flex: 1,
        width: '50%',
        height: 100,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    currentPlayerBox: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    names: {
        color: '#000',
        fontSize: 20,
        textTransform: 'uppercase',
        fontStyle: 'normal',
    },
    btnNumPad: {
        paddingVertical:10,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        width: "30%",
    },
    btnDrawPad: {
        paddingVertical:10,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        width: "60%",
    },
    btnNumPadText: {
        color: '#000',
        fontSize: 20,
        textTransform: 'uppercase',
        fontStyle: 'normal',
    },
});
