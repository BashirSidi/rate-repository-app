import { 
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import RepositoryList from './RepositoryList';
import Signin from './Signin'
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});

const Main = () => {
  return (
      <NavigationContainer style={styles.container}>
        <AppBar />
        <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen
            name="Home"
            component={RepositoryList}
            options={{ title: 'Repositories' }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Main;