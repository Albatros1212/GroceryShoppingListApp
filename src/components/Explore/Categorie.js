import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class  Categorie extends Component{
    render() {
        return (
            <View style={{height:130, width:130, marginLeft:20,borderEndWidth:0.5, borderColor:'#dddddd'}}>
            <View style={{flex:2}}>
               <Image source={this.props.imageUrl} style={{flex:1, width:null, height: null, resizeMode:'cover'}} />
            </View>
            <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
              <Text> {this.props.name}</Text>

            </View>
             
        </View>
        )
    }
}
export default Categorie;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})