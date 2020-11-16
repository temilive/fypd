import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Routes'})
          }>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-bus" size={35} color="#0000FF" />
          </View>
          <Text style={styles.categoryBtnTxt}>Book a Ride</Text>
        </TouchableOpacity>

        <TouchableOpacity
          
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Routes'})
          }>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="road"
              size={35}
              color="#0000FF"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Routes</Text>
        </TouchableOpacity >

        <TouchableOpacity  style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('NotificationScreen', {title: 'Notification'})
          }>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="bell" size={35} color="#0000FF" />
          </View>
          <Text style={styles.categoryBtnTxt}>Notification</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() =>
          navigation.navigate('ProfileScreen', {title: 'Profile'}) }>
          <View style={styles.categoryIcon}>
          <MaterialIcons name="person" size={35} color="#0000FF" />
            
          </View>
          <Text style={styles.categoryBtnTxt}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('BookmarkScreen', {title: 'My Route'})}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-bookmark" size={35} color="#0000FF" />
          </View>
          <Text style={styles.categoryBtnTxt}>BookMark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('FeedbackScreen', {title: 'Give Feedback'})}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="feedback" size={35} color="#0000FF" />
          </View>
          <Text style={styles.categoryBtnTxt}>Feedback</Text>
        </TouchableOpacity>
      </View>
        
     {/* <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Recently Completed
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/food-banner2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Route no. 1</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Gulshan-e-Ravi TO COMSATS 
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/food-banner3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Route no. 2</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Shahdra TO COMSATS
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/banners/food-banner4.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Route no. 3</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Station TO COMSATS
            </Text>
          </View>
        </View>
      </View>*/}
    </ScrollView>
  );
};
const NotificationScreen = ()=>{
  <Text>Hello</Text>
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#0000FF',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
