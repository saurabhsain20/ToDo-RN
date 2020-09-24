import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardComponent from '../Components/CardComponent';
import {completeTodoRequest, deleteTodoRequest} from '../State/Actions';

export default function Completed(props) {
  const dispatch = useDispatch();
  const renderItem = ({item, index}) => (
    <CardComponent
      item={item}
      deleteItem={deleteItem}
      markCompleted={markCompleted}
      isFromHome={false}
    />
  );

  const completedState = useSelector(
    (state) => state.appReducer.completedState,
  );

  const deleteItem = (item) => {
    dispatch(deleteTodoRequest(item));
  };

  const markCompleted = (item) => {
    dispatch(completeTodoRequest(item));
  };

  console.log('rootState', completedState);

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={completedState}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
