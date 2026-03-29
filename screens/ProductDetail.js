import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';


const ProductDetail = ({ route }) => {
    const { title, description, price, image } = route.params;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


  return (
    <ScrollView style={styles.container}>
        <Image source={image?.uri ? image : require("../img/Brown_chair_interior_design.jpg")} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>€{price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.totalPrice}>Total: €{(price * quantity).toFixed(2)}</Text>
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
        height: 300,
        borderRadius: 8,
        resizeMode: 'cover',
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