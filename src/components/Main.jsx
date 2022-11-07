import { StyleSheet, View} from 'react-native';
import RepositoryList from '../components/RepositoryList';
import Text from './Text';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text color="primary">Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;