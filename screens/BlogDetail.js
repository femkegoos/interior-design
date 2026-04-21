import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';


const BlogDetail = ({ route }) => {

    const { title, description, date, content, image } = route.params;

  return (
    <ScrollView style={styles.container}>
        <Image source={{ uri: image?.uri}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.content}>{content}</Text>
       
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
        marginBottom: 64,
    },
});

export default BlogDetail;