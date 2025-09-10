import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ route, navigation }) {
  const email = route?.params?.userEmail ?? 'friend';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome 🎉</Text>
      <Text style={{ marginBottom: 20 }}>You are signed in as {email}</Text>
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.replace('Login')}>
        <Text style={styles.primaryButtonText}>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20, color: '#0A4D46' },
  primaryButton: {
    height: 48, width: 200, borderRadius: 24, backgroundColor: '#0A4D46',
    justifyContent: 'center', alignItems: 'center'
  },
  primaryButtonText: { color: '#fff', fontWeight: '600' }
});
