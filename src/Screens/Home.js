import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardComponent from '../Components/CardComponent';
import CustomModal from '../Components/CustomModal';
import {completeTodoRequest, deleteTodoRequest} from '../State/Actions';

export default function Home(props) {
  const dispatch = useDispatch();
  const renderItem = ({item, index}) => (
    <CardComponent
      item={item}
      deleteItem={deleteItem}
      markCompleted={markCompleted}
      isFromHome={true}
    />
  );
  const [isModalVisible, setModalVisible] = useState(false);

  const todoState = useSelector((state) => state.appReducer.todoState);

  const deleteItem = (item) => {
    dispatch(deleteTodoRequest(item));
  };

  const markCompleted = (item) => {
    dispatch(completeTodoRequest(item));
  };

  console.log('rootState', todoState);

  const onClose = (value) => {
    setModalVisible(value);
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={todoState}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}> + </Text>
      </TouchableOpacity>
      {isModalVisible && <CustomModal onClose={(value) => onClose(value)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  todoList: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 25,
    bottom: 30,
    backgroundColor: '#96C83C',
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    textAlign: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 25,
  },
});
