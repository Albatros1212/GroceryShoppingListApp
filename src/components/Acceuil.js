import {TestScheduler} from '@jest/core';
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
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Categorie from './Explore/Categorie';
import Home from './Explore/Home';

const {height, width} = Dimensions.get('window');

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
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                }}>
                Bienvenue, profiter des promos de fete
              </Text>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Categorie
                    imageUrl={require('../components/Images/assini.jpg')}
                    name="Loge Eco"
                  />
                  <Categorie
                    imageUrl={require('../components/Images/cineastre.jpg')}
                    name="Cinema"
                  />
                  <Categorie
                    imageUrl={require('../components/Images/ouaga2000.jpg')}
                    name="Villa"
                  />

                  <Categorie
                    imageUrl={require('../components/Images/nature.jpg')}
                    name="Nature"
                  />
                </ScrollView>
              </View>
              <View style={{marginTop: 40, paddingHorizontal: 20}}>
                <Text style={{fontSize: 20, fontWeight: '700'}}>
                  Decouvrez les nouveaux models Ecologiques
                </Text>
                <Text style={{marginTop: 10}}>
                  Une nouvelle selection vous fera passer de merveilleuses
                  vacances!
                </Text>
                <View style={{width: width - 40, height: 200, marginTop: 20}}>
                  <Image
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: 'cover',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderBottomColor: '#dddddd',
                    }}
                    source={require('../components/Images/home1.jpg')}
                  />
                </View>
              </View>
            </View>
            <View style={{marginTop: 40}}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                }}>
                Maison a travers le monde
              </Text>
              <View style={{paddingHorizontal: 20, marginTop:
                 20, flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                   <Home width={width}
                   name="Eco Village Assini"
                   type="chambre privée, 2 lits"
                   price={50}
                   rating={4} />
                   <Home width={width}
                   name="Eco Village Assini"
                   type="chambre privée, 2 lits"
                   price={50}
                   rating={3} />
                   <Home width={width}
                   name="Eco Village Assini"
                   type="chambre privée, 2 lits"
                   price={50}
                   rating={2} />
                   <Home width={width}
                   name="Eco Village Assini"
                   type="chambre privée, 2 lits"
                   price={50}
                   rating={1} />
                   
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
