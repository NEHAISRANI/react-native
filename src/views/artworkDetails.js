import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import image from '../utils/images';
import toast from '../utils/toast';
import {storeData} from '../services/AsyncStorageService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getitem} from '../services/AsyncStorageService';
export default function ArtworkDetails({navigation}) {
  const items = {
    id: navigation.getParam('id'),
    src: navigation.getParam('imageUrl'),
    genre: navigation.getParam('genre'),
    title: navigation.getParam('title'),
    price: navigation.getParam('price'),
    quantity: 1,
  };

  let arr;
  const getData = async () => {
    try {
      value1=await getitem()
      arr = value1;
      if (arr !== null) { 
        arr.push(items);
      } else {
        arr = [];
        arr.push(items);
      }
      console.log("data",arr);
    } catch (e) {
      console.log("error",e)
    }
  };

  return navigation.getParam('id') ? (
    <ImageBackground source={image.bg} style={styles.imageBg}>
      <View style={styles.Container}>
        <Image style={styles.imageContainer} source={{uri: items.src}} />
        <Text style={styles.details}>{`title => ${items.title}`}</Text>
        <Text style={styles.details}>{`genre => ${items.genre}`}</Text>
        <Text style={styles.details}>{`price => ${items.price}`}</Text>
        <TouchableOpacity
          onPress={async () => {
            await getData();
            console.log('iiii');
            await storeData(arr);
            toast(`${items.title} has been added to cart`);
            navigation.navigate('Cart', items);
          }}>
          <Text style={styles.button}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  ) : (
    <View style={styles.errContainer}>
      <Text style={styles.heading}>No Artwork Selected</Text>
      <Text style={styles.msg}>
        Goto the Home screen and select any artwork image
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  msg: {
    fontSize: 15,
  },
  imageContainer: {
    height: 310,
    width: 320,
    alignSelf: 'center',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 35,
    color: 'black',
  },

  imageBg: {
    width: '100%',
    height: '100%',
  },
  button: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: 'red',
    color: 'black',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 20,
    alignSelf: 'center',
  },
  details: {
    fontSize: 24,
    color: 'black',
    alignSelf: 'center',
  },
});
