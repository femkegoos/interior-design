import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BlogCard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <Image source={require("../img/Brown_chair_interior_design.jpg")} style={styles.image} />
            <Text style={styles.title}>Blog titel</Text>
            <Text style={styles.description}>This is a description.</Text>
            <Text style={styles.date}>24/03/2026</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BlogDetail')}>
                <Text style={styles.buttonText}>Lees meer</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width:300,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom:16,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginTop: 4,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4,
        color: '#7a5a45',
    },
    button: {
        backgroundColor: '#7a5a45',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default BlogCard;