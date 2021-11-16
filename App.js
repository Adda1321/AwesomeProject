import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
function App() {
  const [courseData, setcourseData] = useState([]);
  const [AddMode, setAddMode] = useState(false);

  const eventhandle = Gtitle => {
    setcourseData(e => [...e, {key: Math.random().toString(), value: Gtitle}]);
    setAddMode(false);
  };
  const onAddCancelGoalHandler = () =>{
    setAddMode(false);

  }
  const removeHandler = prop => {
    setcourseData(current => {
      return current.filter(goal => goal.key !== prop);
    });
  };

  return (
    <View style={styles.screen}>
    <Button  title="ADD New Goal " onPress={()=> setAddMode(true)} />

      {/* <Button title="dd" onPress={() => Alert.alert('Simple Button pressed')}> aa</Button> */}
      <GoalInput onAdd={eventhandle} visible={AddMode}  onCancel={onAddCancelGoalHandler}/>
      <FlatList
        data={courseData}
        renderItem={itemData => ( 
          <GoalItem
            id={itemData.item.key}
            blabla={removeHandler}
            title={itemData.item.value}
          />
        )}
      />
      <View>
        <Text>Adda</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
