import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {createTodoRequest} from '../State/Actions';

export default function CustomModal(props) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = () => {
    const data = {
      title: title,
      description: desc,
      isCompleted: false,
    };
    dispatch(createTodoRequest(data));
    props.onClose(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => Alert.alert('Modal is closed')}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            value={title}
            placeholder="Enter Title"
            onChangeText={setTitle}
          />
          <TextInput
            value={desc}
            placeholder="Enter Description"
            onChangeText={setDesc}
            multiline={true}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onClose(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96C83C',
    marginLeft: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
