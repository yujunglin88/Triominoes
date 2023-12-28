import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Image, Button, TouchableOpacity} from 'react-native';

export default function WelcomeScreen(props) {
    const handelPressStart = () => console.log('Text Pressed');
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/triominos-icon.jpg')} />
            <TouchableOpacity
                style={styles.btnStart}
                onPress={handelPressStart}
            >
                <Text style={styles.btnStartText}>Start Game!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    logo: {
        width: 200,
        height: 200,
    },
    btnStart: {
        paddingVertical:10,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#000',
    },
    btnStartText: {
        color: '#000',
        fontSize: 20,
        textTransform: 'uppercase',
        fontStyle: 'bold',
    },
});
