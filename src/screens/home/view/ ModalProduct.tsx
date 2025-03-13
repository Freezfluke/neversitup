import {Button, Image, Modal, StyleSheet, View, Text} from 'react-native';

interface ItemProduct {
    id: string;
    imageUrl: string;
    name: string;
    price: string;
    desc: string;
}

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  selectedProduct: ItemProduct;
}

const ModalProductScreen = ({
  modalVisible,
  closeModal,
  selectedProduct,
}: Props) => {
  return (
    <Modal
      visible={modalVisible}

      transparent={true}
      onRequestClose={closeModal}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {selectedProduct && (
            <>
              <Image
                source={{uri: selectedProduct.imageUrl}}
                style={styles.modalImage}
              />
              <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
              <Text style={styles.modalPrice}>{selectedProduct.price}</Text>
              <Text style={styles.modalDesc}>{selectedProduct.desc}</Text>
              <Button title="Close" onPress={closeModal} />
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalProductScreen;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  modalImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  modalDesc: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
});
