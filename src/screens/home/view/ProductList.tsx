import React, {Fragment, memo, useState} from 'react';
import {
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ModalProductScreen from './ ModalProduct';

interface ItemProduct {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
  desc: string;
}

type Props = {
  data: ItemProduct[];
};

const ProductItem = memo(({product}: {product: ItemProduct}) => {
  const [selectedProduct, setSelectedProduct] = useState<ItemProduct | null>(
    null,
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handleProductClick = (productDetail: ItemProduct) => {
    setSelectedProduct(productDetail);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };
  return (
    <Fragment>
      <TouchableOpacity
        style={styles.productContainer}
        onPress={() => handleProductClick(product)}>
        <Image source={{uri: product.imageUrl}} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.desc}>{product.desc}</Text>
      </TouchableOpacity>
      <ModalProductScreen
        modalVisible={modalVisible}
        closeModal={closeModal}
        selectedProduct={
          selectedProduct ?? {
            id: '',
            imageUrl: '',
            name: '',
            price: '',
            desc: '',
          }
        }
      />
    </Fragment>
  );
});

const ProductList = ({data}: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <ProductItem product={item} />}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5,
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    color: 'gray',
  },
});

export default ProductList;
