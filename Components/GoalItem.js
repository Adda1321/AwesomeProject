import React from 'react';
import {View, Text, StyleSheet , TouchableOpacity} from 'react-native';
function GoalItem(props) {

  return (
      
  <TouchableOpacity activeOpacity={0.8} onPress={props.blabla.bind(this,props.id)}>
  <Text style={styles.ListItem}>{props.title}</Text>
  </TouchableOpacity>)
}

const styles = StyleSheet.create({
  ListItem: {
    padding: 10,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 15,
  },
});
export default GoalItem;
