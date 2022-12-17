import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Config from 'react-native-config';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore FastLane</Text>
      <Text style={styles.subText}>{Config.ENVIRONMENT}</Text>
      <Text>New Cool feature</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 20, fontWeight: '400'},
  subText: {fontSize: 18},
});

export default App;
