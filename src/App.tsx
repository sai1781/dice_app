import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import LinearGradient from 'react-native-linear-gradient';


import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png'
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
type DiceProps = PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>
const Dice = ({imageUrl}:DiceProps):JSX.Element=>{
  return (
    <View>
      <Image  style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

const App = () => {
  const [diceImage,setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  
  
  const rollDice = () =>{
    console.log("sai");
    let random = Math.floor(Math.random()*6)+1;

    switch(random) {
      case 1:
        setDiceImage(DiceOne);
        break;
        case 2:
        setDiceImage(DiceTwo);
        break;
        case 3:
        setDiceImage(DiceThree);
        break;
        case 4:
        setDiceImage(DiceFour);
        break;
        case 5:
        setDiceImage(DiceFive);
        break;
        case 6:
        setDiceImage(DiceSix);
        break;

        default:
          setDiceImage(DiceOne);
          break;
    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceBtn}>Roll the Dice</Text>
      </Pressable>
    </View>
  )
}
export default App
const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'green'
  },
  diceContainer:{},
  diceImage:{
    height:200,
    width:200,
  },
  rollDiceBtn:{
    width:150,
    alignItems:'center',
    fontSize:15,
    fontWeight:'normal',
    color:'black',
    textAlign:'center',
    padding:5,
    borderRadius:5,
    backgroundColor: 'white', // Set a background color
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 1, // For Android
  },
  linearGradient:{
    backgroundColor:'red',
  }
})