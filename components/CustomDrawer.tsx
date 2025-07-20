import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/profile.png')} // Replace with your image
          style={styles.profileImage}
        />
        <Text style={styles.name}>Anoop</Text>
      </View>

      <View style={{flex: 1, paddingHorizontal: 10}}>
        <DrawerItemList {...props} />
      </View>

      <TouchableOpacity
        style={styles.footer}
        onPress={() => alert('Logged out')}>
        <Text style={styles.footerText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#e6e6e6',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerText: {
    color: 'red',
    fontWeight: '500',
  },
});

export default CustomDrawer;
