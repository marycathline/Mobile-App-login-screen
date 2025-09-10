import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import TextInputField from '../components/TextInputField';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (!email) {
      Alert.alert('Validation', 'Please enter your email.');
      return;
    }
    Alert.alert('Reset link sent', 'Check your email for reset instructions.');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInputField label="Email" value={email} onChangeText={setEmail} placeholder="you@domain.com" />
      <TouchableOpacity style={styles.primaryButton} onPress={handleReset}>
        <Text style={styles.primaryButtonText}>Send Reset Link</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 40 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20, color: '#0A4D46' },
  primaryButton: {
    height: 48, borderRadius: 24, backgroundColor: '#0A4D46',
    justifyContent: 'center', alignItems: 'center', marginTop: 20
  },
  primaryButtonText: { color: '#fff', fontWeight: '600' }
});
