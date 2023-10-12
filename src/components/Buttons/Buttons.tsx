import {View, Pressable, Text } from 'react-native'
import { IButtonTypes } from './TButtons';
import { styles } from './Buttons.Styles';

const Buttons = (props:IButtonTypes) => {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonLabel}>{props.label}</Text>
        </Pressable>
      </View>
    )
}

export default Buttons;