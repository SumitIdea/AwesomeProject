import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Login from './login'

const Home = () => {
  return(
    <View >
      <Text style = {styles.text} >This is a Home Page Activity</Text>
      <Text style = {styles.myState} >Welcome to the React Native</Text>
      <Login/>

    </View>
  );
};
const styles = StyleSheet.create({
  text: {
   alignItems: 'center',
   marginTop : 10,
   backgroundColor: '#61dafb',
   textAlign: 'center',
   height : 30,
   fontSize: 20,
},
myState: {
  marginTop: 20,
  textAlign: 'center',
  color: 'blue',
  fontWeight: 'bold',
  fontSize: 20
},
      

});

export default Home;