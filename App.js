import React,{useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity, Alert} from'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';


const App=()=>{
  const [toggle,setToggle]= useState (false);
  const handleChangeToggle = ()=> setToggle(oldToggle=> !oldToggle);
  
  useEffect(()=>{
    Torch.switchState(toggle);
  },[toggle]);

  useEffect(()=>{
    const subscription= RNShake.addListener(()=>(
    setToggle(oldToggle=> !oldToggle)
    ));
    return()=> subscription.remove;
  },[]);

  return (
    <View style={toggle ? style.containerLight: style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>
    <Image style={ toggle ? style.lightimgOn: style.lightimgOff} 
    source={ toggle ? require('./icones/eco-light.png') : require('./icones/eco-light-off.png')}/>
    <Image style={ style.dioImg} 
    source={ toggle ? require('./icones/logo-dio.png') : require('./icones/logo-dio-white.png')}/>
    </TouchableOpacity>
    </View>
  );
};

export default App;

const style= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
  },
  lightimgOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,  
  },
  lightimgOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,  
  },
  dioImg:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,  
  },
  
});