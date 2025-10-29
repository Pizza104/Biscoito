import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import integrante1 from './assets/integrante1.png';
import integrante2 from './assets/integrante2.png';

export default function Integrantes() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Equipe Biscoito da Sorte</Text>

            <View style={styles.integranteContainer}>
                <Image source={integrante1} style={styles.image} />
                <Text>Kaua Silva Vieira</Text>
            </View>

            <View style={styles.integranteContainer}>
                <Image source={integrante2} style={styles.image} />
                <Text>Tiago rios</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    integranteContainer: { justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
    image: { width: 120, height: 120, borderRadius: 60, marginBottom: 10, resizeMode: 'cover' }
});
