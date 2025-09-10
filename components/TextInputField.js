// components/TextInputField.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TextInputField({
  label, value, onChangeText, placeholder,
  secureTextEntry, rightIcon, onPressIcon
}) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
        {rightIcon ? (
          <TouchableOpacity onPress={onPressIcon} style={styles.iconButton}>
            <Ionicons name={rightIcon} size={20} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 12, marginBottom: 6, color: '#444' },
  inputRow: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1, borderColor: '#ddd',
    borderRadius: 8, paddingHorizontal: 12, backgroundColor: '#fff'
  },
  input: { flex: 1, height: 48, fontSize: 16 },
  iconButton: { padding: 8 }
});
