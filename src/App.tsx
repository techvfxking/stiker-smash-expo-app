import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from "./App.Styles";
import ImageViewer from './components/ImageViewer/ImageViewer';
import Buttons from './components/Buttons/Buttons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


const PlaceholderImage = require('../assets/background-image.png');

const App = () => {
 const [selectedImage, setSelectedImage] = useState('')

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.')
    }
  } 

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer ImageSrc={PlaceholderImage} selectedImage={selectedImage} />
        <View style={styles.footerContainer}>
          <Buttons label="Choose a photo" theme='primary' onPressHandler={pickImageAsync}/>
          <Buttons label="Use this photo" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}



export default App;