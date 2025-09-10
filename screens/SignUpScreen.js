import React, { useState } from 'react';
import {
  SafeAreaView, Text, TouchableOpacity,
  StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert
} from 'react-native';
import TextInputField from '../components/TextInputField';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    if (!name || !email || !password || !confirm) {
      Alert.alert('Validation', 'Please fill all fields.');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Validation', 'Passwords do not match.');
      return;
    }
    navigation.replace('Welcome', { userEmail: email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Create new account</Text>

          <TextInputField label="Full name" value={name} onChangeText={setName} placeholder="Jane Doe" />
          <TextInputField label="Email" value={email} onChangeText={setEmail} placeholder="you@domain.com" />
          <TextInputField
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Create a password"
            secureTextEntry={!showPassword}
            rightIcon={showPassword ? 'eye' : 'eye-off'}
            onPressIcon={() => setShowPassword(!showPassword)}
          />
          <TextInputField
            label="Confirm password"
            value={confirm}
            onChangeText={setConfirm}
            placeholder="Repeat password"
            secureTextEntry={!showPassword}
            rightIcon={showPassword ? 'eye' : 'eye-off'}
            onPressIcon={() => setShowPassword(!showPassword)}
          />

          <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
            <Text style={styles.primaryButtonText}>Create account</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20, paddingTop: 40 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20, color: '#0A4D46' },
  primaryButton: {
    height: 48, borderRadius: 24, backgroundColor: '#0A4D46',
    justifyContent: 'center', alignItems: 'center', marginTop: 20
  },
  primaryButtonText: { color: '#fff', fontWeight: '600' }
});
