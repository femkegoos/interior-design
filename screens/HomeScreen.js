import { ScrollView, TextInput, StyleSheet, Text, View, Switch } from 'react-native';
import ProductCard from '../components/ProductCards';
import BlogCard from '../components/BlogCards';
import { use, useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';

const categoryNames = {
  "": "All",
  "69ade3b6f5b7d82c25aa3187": "Coffee table",
  "69ade36fd4fe278310ae9cc3": "Side table",
  "69ade35ea5a93028229f4931": "Lounge chair",
  "69a18ecd4345eac0cbdf79a1": "Design chair",
  "69a18ea257bc729a7ba6e5d9": "Dining chair",
  "69a18e417b4183b1647333d4": "Table",
};

const HomeScreen = () => {
  const [promotions, setPromotions] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    fetch('https://api.webflow.com/v2/sites/698c804589fbd9b11ec2568a/products'
      , {
        headers: {
          Authorization: 'Bearer bc1861a6097c6af1198797c140ec9e68c66f7caafe9ed9e7be504ba991b36f52',
        },
      })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          price: (item.skus[0]?.fieldData.price.value || 0) / 100,
          image: { url: item.skus[0]?.fieldData["main-image"]?.url },
          category : categoryNames[item.product.fieldData.category[0]] || "Unknown",
        })),
        );
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  const filteredProducts = selectedCategory 
  ? products.filter((product) => product.category === selectedCategory)
  : products;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shop</Text>
      <Picker selectedValue={selectedCategory} onValueChange={setSelectedCategory} style={styles.picker}>
        <Picker.Item label="All" value="" />
        <Picker.Item label="Coffee table" value="Coffee table" />
        <Picker.Item label="Side table" value="Side table" />
        <Picker.Item label="Lounge chair" value="Lounge chair" />
        <Picker.Item label="Design chair" value="Design chair" />
        <Picker.Item label="Dining chair" value="Dining chair" />
        <Picker.Item label="Table" value="Table" />
      </Picker>
      <TextInput style={styles.searchInput} placeholder="Search for products..." />
      <View style={styles.switchContainer}>
        <Text>Show only the promotions</Text>
        <Switch value={promotions} onValueChange={(value) => setPromotions(value)} trackColor={{ false: 'rgba(122, 90, 69, 0.1)', true: '#7a5a45' }} thumbColor={promotions ? '#fff' : '#fff'} />
      </View>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} onPress={() => navigation.navigate('ProductDetail', product)} />
      ))}


      <Text style={styles.title}>Blogs</Text>
      <TextInput style={styles.searchInput} placeholder="Search for Blogs..." />

      <View style={styles.switchContainer}>
        <Text>Show only the promotions</Text>
        <Switch value={promotions} onValueChange={(value) => setPromotions(value)} trackColor={{ false: 'rgba(122, 90, 69, 0.1)', true: '#7a5a45' }} thumbColor={promotions ? '#fff' : '#fff'} />
      </View>

      <BlogCard />
      <BlogCard />
      <BlogCard />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
    paddingTop: 64,

  },

  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 16,
    width: '90%',
    marginBottom: 32,
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
  },
  picker: {
    width: '90%',
    marginBottom: 16,
    fontColor: '#7a5a45',
  },
});

export default HomeScreen;