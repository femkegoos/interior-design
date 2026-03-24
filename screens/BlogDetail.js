import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';


const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


  return (
    <ScrollView style={styles.container}>
        <Image source={require("../img/Brown_chair_interior_design.jpg")} style={styles.image} />
        <Text style={styles.title}>Lounge chair</Text>
        <Text style={styles.description}>This is a description.</Text>
        <Text style={styles.price}>199,99</Text>
        <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.totalPrice}>Total: {199.99 * quantity}</Text>
        <Button title="Add to Cart" onPress={() => alert('Added to cart!')} color="#7a5a45" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginTop: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7a5a45',
        marginTop: 8,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    quantityButton: {
        backgroundColor: '#7a5a45',
        padding: 10,
        borderRadius: 5,
    },
    quantityButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 16,
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProductDetail;