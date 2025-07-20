import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ReferAndEarnScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refer and Earn</Text>
    </View>
  );
};

export default ReferAndEarnScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 24},
});
