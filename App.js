import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './components/Login';
import { HealthBar } from './components/HealthBar';
import { AddCar } from './components/AddCar';
export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <AddCar/>
      <HealthBar/>
    </View>
  );
}

//Holi
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
