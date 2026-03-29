import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ title, price, image, onPress }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>This is a description.</Text>
            <Text style={styles.price}>€{price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>View Details</Text>
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
    price: {
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

export default ProductCard;