import React from 'react';
import {
  View,
  Image,
  ImageBackground,
} from 'react-native';
import img from '/home/coditas/Desktop/Redux/source/utils/image.js';

export default function Checkout({navigation}) {
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
      <ImageBackground source={img.bg} style={{width: '100%', height: '100%'}}>
        <Image
          style={{
            alignSelf: 'center',
            marginTop:150,
            width: 210,
            height: 120,
          }}
          source={require('../images/Thankyou.jpg')}
        />
      </ImageBackground>
    </View>
  );
}

