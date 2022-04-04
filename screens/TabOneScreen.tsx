import { Dimensions, Image, StyleSheet, View, Text, TextInput, TouchableOpacity,  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import{} from'./../components/StyledText';
import { RootTabScreenProps } from '../types';
import { useAssets } from 'expo-asset';
import * as React from "react";
import TabTwoScreen from './TabTwoScreen';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) 

{
  return (
    
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      
      <View style={{
        height: '50%',
        width: '90%',
        backgroundColor: '#87CEEB',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column'
      }}>

        <View style={{ flex: 2, borderRadius: 0, overflow: 'hidden' }}>
          <Image
            source={{ uri: 'https://image.shutterstock.com/image-vector/welcome-poster-spectrum-brush-strokes-260nw-1146069941.jpg' }}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>

        <View style={{ flex: 0, borderRadius: 10, marginVertical: 1, padding: 10 }}>
          <TextInput
          placeholder='Username or Email' 
          style = {styles.input}
          />

         
        </View>
        <View style={{ flex: 0, borderRadius: 10, marginVertical: 1, padding: 10 }}>
        <TextInput 
        placeholder='Password' 
        secureTextEntry
          style = {styles.input}
          />
          
          
        </View>
        <View style={{ flex: 0, borderRadius: 10, marginVertical: 1, padding: 10 }}>
          
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style = {styles.ButtonText}>Login</Text>
          </TouchableOpacity>
          </View>
        <View style={{ flex: 0, borderRadius: 10, marginVertical: 1, padding: 10 }}>
          
        <TouchableOpacity style={styles.buttonContainer} >
            <Text style = {styles.ButtonText}>Sign Up</Text>
          </TouchableOpacity>

         
        </View>
        
        

        

      </View>
    </View>
    
  );
  

}

const styles = StyleSheet.create({
  container: {
    padding : 10
  },
  input:{
    height:40,
    backgroundColor:'#F0FFF0',
    color:'#000000',
   
    
    
  },
  buttonContainer:{ 
    backgroundColor:'#F0FFF0',
    paddingVertical:10
   

  },
  ButtonText:{
    textAlign:'center',
    color:'#000000'
  }

});


