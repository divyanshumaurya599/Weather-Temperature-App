import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

const InputField = (props: TextInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
  },
});

export default InputField;
