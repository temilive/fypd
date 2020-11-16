import React from 'react';
import { View, Text, Button, StyleSheet, Card } from 'react-native';

const FeedbackScreen = () => {
    return (
      <View style={styles.container}>
        <Text>My Route</Text>
        
        <Button
          title="Schedule Again"
        />
      </View>
    );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});