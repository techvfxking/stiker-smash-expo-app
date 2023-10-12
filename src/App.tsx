import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from "./App.Styles";
import ImageViewer from './components/ImageViewer/ImageViewer';
import Buttons from './components/Buttons/Buttons';

const PlaceholderImage = require('../assets/background-image.png');

 const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer ImageSrc={PlaceholderImage} />
        <View style={styles.footerContainer}>
          <Buttons label="Choose a photo" />
          <Buttons label="Use this photo" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}



export default App;