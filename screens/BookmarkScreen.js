import React from 'react';
import { View, Text, Button, StyleSheet, Card,TouchableOpacity } from 'react-native';

const BookmarkScreen = (navigation) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <Text>Route no. 1 </Text>
          <Text>Stop: Shahdra</Text>
          <Text>Time: 7:00 AM</Text>
          <Button
            title='Track Route'
            onPress={()=>navigation.navigate('ExploreScreen')}></Button>
        </TouchableOpacity>
      </View>
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#ffff',
    marginBottom: 10,
    marginLeft: '2%',
    width:'96%',
    shadowColor: '#0000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      heigth: 3,
    }
  },
});
