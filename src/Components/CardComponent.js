import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CardComponent(props) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.leftView}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.description}>{props.item.description}</Text>
      </View>
      {props.isFromHome && (
        <View style={styles.rightView}>
          <TouchableOpacity onPress={() => props.markCompleted(props.item)}>
            <Ionicons name="star-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.deleteItem(props.item)}>
            <Ionicons name="trash" size={30} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    elevation: 5,
    borderColor: '#F5F6F8',
    backgroundColor: '#F5F6F8',
    shadowColor: '#00000034',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    zIndex: 5,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
  leftView: {
    flex: 1,
    marginHorizontal: 10,
  },
  rightView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 20,
    color: 'grey',
    marginTop: 20,
  },
});
