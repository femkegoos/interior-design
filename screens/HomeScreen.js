import { ScrollView, TextInput, StyleSheet, Text, View, Switch } from 'react-native';
import ProductCard from '../components/ProductCards';
import { useState } from 'react';



const HomeScreen = () => {
    const[promotions, setPromotions] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shop</Text>
        <TextInput style={styles.searchInput} placeholder="Search for products..." />
        <View style={styles.switchContainer}>
            <Text>Show only the promotions</Text>
            <Switch value={promotions} onValueChange={(value)=> setPromotions(value)} trackColor={{ false: 'rgba(122, 90, 69, 0.1)', true: '#7a5a45' }} thumbColor={promotions ? '#fff' : '#fff'} />
        </View>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,

  },

    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        margin: 16,
        width: '90%',
        marginBottom: 64,
    },
    title: {
        marginTop: 64,
        fontSize: 32,
        fontFamily: 'BlackMango',
        marginTop: 16,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        justifyContent: 'space-between',
        width: '90%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'rgba(122, 90, 69, 0.1)',
    }
});

export default HomeScreen;