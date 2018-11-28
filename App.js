/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { TextInput} from 'react-native-gesture-handler';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',

<Text style={styles.instructions}>{instructions}</Text> - should be put in render



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// }); 



});*/

export default class App extends Component{
constructor(){
  super();
  this.state = {
    word: '',
   Wordout:'',
    Consonant: 0,
   Vowel: 0,
   character: 0
  }}


analyze = () => {
  this.setState({Wordout: this.state.word});
    var count= this.state.word;
    var Char = count.length;
     this.setState ({ character: Char});

     var split = count.split("");

     var initvowel = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
     
     var i, vowel = 0, consonant = 0;

     for(i in split){
        if(initvowel.includes(split[i])){
          vowel = vowel+1;}
        else{
          consonant = consonant+1;}
     }
    this.setState({Consonant: consonant});
    this.setState({Vowel: vowel});

  }



  render(){
    return (
      <View>
        <Text>WORD ANALYZER!</Text>
        
        <Text>Type any word</Text>

        <TextInput 
         onChangeText={(word) => this.setState({word})} underlineColorAndroid = "transparent" placeholder = 'Word'/>

        <Text onPress={this.analyze}>Analyze </Text>

         <Text>Word             : {this.state.Wordout} </Text>
         <Text>No of Consonants : {this.state.Consonant}</Text>
         <Text>No of Vowels     : {this.state.Vowel}</Text>
         <Text>No of Characters : {this.state.character}</Text>
        
      </View>
    );}}