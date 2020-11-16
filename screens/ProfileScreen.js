import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';

import files from '../assets/filesBase64';

const ProfileScreen = () => {

  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Tehreem Anjum</Title>
            <Caption style={styles.caption}>Student</Caption>
          </View>
        </View>
      </View>

            <View>
              <Title style={[styles.title,{
              marginLeft: 10,}]}>First name</Title>
              <Caption style={[styles.caption,{
              marginLeft: 10,}]}>Tehreem</Caption>
            </View>
            <View>
            <View>
              <Title style={[styles.title,{
              marginLeft: 10,
              marginTop: 20}]}>Last Name</Title>
              <Caption style={[styles.caption,{
              marginLeft: 10,}]}>Anjum</Caption>
            </View>
            <View>
              <Title style={[styles.title,{
              marginLeft: 10,
              marginTop: 20}]}>Position</Title>
              <Caption style={[styles.caption,{
              marginLeft: 10,}]}>Student</Caption>
            </View>
              <Title style={[styles.title,{
              marginLeft: 10,
              marginTop: 20}]}>Phone Number</Title>
              <Caption style={[styles.caption,{
              marginLeft: 10,}]}>(+92) 31 1234567</Caption>
            </View>
            <View>
              <Title style={[styles.title,{
              marginLeft: 10,
              marginTop: 20}]}>E-mail</Title>
              <Caption style={[styles.caption,{
              marginLeft: 10,}]}>SP17-BCS-091@cuilahore.edu.pk</Caption>
            </View>
            <View>
              <Title style={[styles.title,{
              marginLeft: 10,
              marginTop: 20}]}>Country</Title>
              <Caption style={[styles.caption,{
              marginLeft: 10,}]}>Pakistan</Caption>
            </View>
            <View>
              <Title style={[styles.title,{
              marginLeft: 10,
              marginTop: 20}]}>City</Title>
              <Caption style={[styles.caption,{
              marginLeft: 10,}]}>Lahore</Caption>
            </View>
    {/*
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
    </TouchableRipple>*/}
  
          </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
