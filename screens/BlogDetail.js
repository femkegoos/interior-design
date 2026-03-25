import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';


const BlogDetail = () => {
    
  return (
    <ScrollView style={styles.container}>
        <Image source={require("../img/Brown_chair_interior_design.jpg")} style={styles.image} />
        <Text style={styles.title}>Blog titel</Text>
        <Text style={styles.description}>This is a description.</Text>
        <Text style={styles.date}>5 march 2026</Text>
        <Text style={styles.content}>This is the content of the blog post. The detail of the blog post. </Text>
       
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
    date: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7a5a45',
        marginTop: 8,
    },
    content: {
        fontSize: 16,
        marginTop: 16,
        lineHeight: 24,
    },
});

export default BlogDetail;