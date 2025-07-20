import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Button,
} from 'react-native';
import {auth} from '../firebase/config';

const API_KEY = '483cdfb374b92f97db709236b880c357';

const cities = [
  'Delhi',
  'Mumbai',
  'Bengaluru',
  'Kolkata',
  'Chennai',
  'Hyderabad',
  'Ahmedabad',
  'Pune',
  'Lucknow',
  'Jaipur',
];

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    auth.signOut();
  };

  const fetchWeather = async () => {
    try {
      const responses = await Promise.all(
        cities.map(city =>
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${API_KEY}&units=metric`,
          ).then(res => res.json()),
        ),
      );
      setWeatherData(responses);
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌤️ Live Weather in Indian Cities</Text>
      <Button title="Logout" onPress={handleLogout} />

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{marginTop: 20}}
        />
      ) : (
        weatherData.map((cityWeather, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.city}>{cityWeather.name}</Text>
            <Text>🌡️ Temp: {cityWeather.main?.temp}°C</Text>
            <Text>☁️ Condition: {cityWeather.weather?.[0]?.description}</Text>
            <Text>💧 Humidity: {cityWeather.main?.humidity}%</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {padding: 16, alignItems: 'center'},
  title: {fontSize: 22, fontWeight: 'bold', marginVertical: 20},
  card: {
    width: '90%',
    backgroundColor: '#e0f7fa',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
