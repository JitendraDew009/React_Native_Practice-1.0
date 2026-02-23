import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Essence Mascara Lash Princess',
    price: 9.99,
    description: 'Popular mascara known for volumizing and lengthening effects.',
    //image: require('assets\images\Essence Mascara Lash Princess.jpg'),
    image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/essence-mascara-lash-princess-Ze0WK9E-600.jpg',

  },
  {
    id: '2',
    name: 'Eyeshadow Palette with Mirror',
    price: 19.99,
    description: 'Versatile range of shades with a built-in mirror.',
    image:'https://m.media-amazon.com/images/I/51FYmS6UjTL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '3',
    name: 'Powder Canister',
    price: 14.99,
    description: 'Finely milled powder for a smooth matte finish.',
    image: 'https://m.media-amazon.com/images/I/61VAHv3QMbL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: '4',
    name: 'Red Lipstick',
    price: 12.99,
    description: 'Creamy, pigmented formula with bold color.',
    image: 'https://assets.ajio.com/medias/sys_master/root/20240112/sclp/65a0faea74cb305fe013f4ab/-473Wx593H-4943419670-russianred-MODEL.jpg',
  },
  {
    id: '5',
    name: 'Red Nail Polish',
    price: 8.99,
    description: 'Classic red shade with long-lasting wear.',
    image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15324536/2024/7/25/66820622-9300-4bcf-9691-4c131619e4031721897797358ELLE18NailPopsNailColor1711.jpg',
  },
  {
    id: '6',
    name: 'Calvin Klein CK One',
    price: 29.99,
    description: 'A timeless unisex fragrance.',
    image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22224168/2023/3/20/8084011b-a154-4f34-93fb-e1c0d641554c1679294199279-CK-ONE-DEO-150ml-9751679294199223-1.jpg',
  },
];

const ProductListScreen = () => {
 const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);


  return (
   
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Beautykart.com</Text>
      </View>

      <FlatList
        data={products}
        //  horizontal
         showsVerticalScrollIndicator
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      
    </SafeAreaView>
    
  );
};
export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerContainer: {
    height: '18%',
    width: '100%',
    backgroundColor: '#121212',
    justifyContent: 'space-between',
  },
  headerTitle:{
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
    color:'white',
  },
  list: {
    padding: 10,
  },
   logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 15,
  },
    icon: {
    justifyContent:'space-around',
    marginRight:10,
    marginTop:10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  image: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: '#4caf50',
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});


