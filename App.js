import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/components/Main';

export default function App() {
  return (
    <>
      <Main />
      <StatusBar style='auto' />
    </>
  );
}