import { View, StyleSheet, Pressable  } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height: 40,
  },
  tab: {
    color: '#ffffff',
    fontSize: 18,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tab}>Repositories</Text>
      <Text style={styles.tab}>Sign in</Text>
    </View>
  );
};

export default AppBar;