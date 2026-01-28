import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeHeroScreen = ({ navigation }) => (
  <View style={[styles.screen, styles.center]}>
    <Text style={styles.title}>Welcome</Text>
    <Text style={styles.subtitle}>Start your journey</Text>
    <TouchableOpacity style={styles.playButton}>
      <Text style={styles.playText}>▶</Text>
    </TouchableOpacity>
    <View style={styles.navButtons}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navButtonText}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.navButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Verification')}>
        <Text style={styles.navButtonText}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('LocationPermission')}>
        <Text style={styles.navButtonText}>Location</Text>
      </TouchableOpacity>
    </View>
  </View>
);



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  playButton: {
    width: 80,
    height: 80,
    backgroundColor: '#FF3B30',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playText: {
    color: '#fff',
    fontSize: 30,
  },
  navButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    margin: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



export default HomeHeroScreen;
