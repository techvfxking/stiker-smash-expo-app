import {View, Pressable, Text } from 'react-native'
import { IButtonTypes } from './TButtons';
import { styles } from './Buttons.Styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Buttons = (props:IButtonTypes) => {
     if (props.theme === 'primary') {
       return (
         <View
           style={[
             styles.buttonContainer,
             { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
           ]}
         >
           <Pressable
             style={[styles.button, { backgroundColor: '#fff' }]}
             onPress={props.onPressHandler}
           >
             <FontAwesome
               name="picture-o"
               size={18}
               color="#25292e"
               style={styles.buttonIcon}
             />
             <Text style={[styles.buttonLabel, { color: '#25292e' }]}>
               {props.label}
             </Text>
           </Pressable>
         </View>
       )
     }

     return (
       <View style={styles.buttonContainer}>
         <Pressable
           style={styles.button}
           onPress={() => alert('You pressed a button.')}
         >
           <Text style={styles.buttonLabel}>{props.label}</Text>
         </Pressable>
       </View>
     )
}

export default Buttons;