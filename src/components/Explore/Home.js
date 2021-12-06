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
import StarRating from 'react-native-star-rating';


const {height, width} = Dimensions.get('window');

class Home extends Component {
   componentWillUnmount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  } 
  render() {
    return (
      <View
        style={{
          width: this.props.width / 2-30,
          height: this.props.width / 2-30,
          borderWidth: 0.5,
          borderColor: '#dddddd',
        }}>
        <View style={{flex: 1}}>
          <Image
            style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
            source={require('../../components/Images/villaEco1.jpg')}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            paddingLeft: 10,
          }}>
          <Text style={{fontSize: 10, color: '#b63838'}}>
            {this.props.type}
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            {this.props.name}
          </Text>
          <Text style={{fontSize: 15}}>${this.props.price}</Text>
          <StarRating
          disable={false}
          maxStars={5}
          rating={this.props.rating}
          starSize={10}/>
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
