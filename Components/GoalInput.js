import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';
function GoalInput(props) {
  const [data, setdata] = useState('');
  const onAddGoalHandler = () => {
    props.onAdd(data);
    setdata('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="input field"
          style={styles.input}
          onChangeText={e => {
            setdata(e);
          }}
          value={data}
        />
        <View style={styles.btnContainer}>
            <View style={styles.button}>
          <Button
            title="CANCEL" 
            color="red"
            onPress={() => props.onCancel(setdata(''))}
          /></View>
          <View style={styles.button}>
        <Button title="ADD" onPress={onAddGoalHandler} />
        </View></View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {borderColor: 'black', width: '80%', marginBottom: 10, borderWidth: 1},
  btnContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'60%' ,
  },
  button:{
width:'40%',
  }
});

export default GoalInput;
