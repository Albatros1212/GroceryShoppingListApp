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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Acceuil extends Component {
  componentWillUnmount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: '#dddddd',
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 20,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS === 'android' ? 30 : null,
              }}>
              <Icon name="search" size={20} />
              <TextInput
                underlineColorAndroid="tranparent"
                placeholder="Trouver une chambre"
                placeholderTextColor="grey"
                style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
              />
            </View>
          </View>
          <ScrollView
          scrollEventThrottle   ={16}
           >
               <View style={{flex:1, backgroundColor: 'white', 
              paddingTop:20}}>
                   <Text style={{fontSize:24, fontWeight:'700', 
              paddingHorizontal: 20}}>
                   Bienvenue, profiter des promos de fete 
                   </Text>
                   <View style={{ height:130, marginTop:20}}>
                       <ScrollView >
                           <View style={{height:130, width:130}}>
                               <View style={{flex:2}}>
                                  

                                   </View>
                                

                           </View>

                       </ScrollView>
                       
                 </View>
               </View>

          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Acceuil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
