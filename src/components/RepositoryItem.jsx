import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import Text from './Text';
import Rates from './Rates';

import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
  },
  repoGeneralInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  repoInfor: {
    marginRight: 10,
  },
  repoRates: {
    // backgroundColor: '#efefef',
    width: 330,
  },
  repoPic: {
    width: 70,
    height: 65,
    borderRadius: 10,
  },
  txtFullname: {
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    width: 298,
    marginTop: 10,
  },
  language: {
    fontSize: 20,
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    width: 'max-content',
    padding: 6,
    borderRadius: 4,
    marginTop: 10,
  },
  rates: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

const RepositoryItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.repoGeneralInfo}>
          <View style={styles.repoInfor}>
          <Image
            style={styles.repoPic}
            source={item.ownerAvatarUrl}
          />
          </View>
          <View style={styles.repoRates}>
          <Text style={styles.txtFullname}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.language}>{item.language}</View>
          </View>
        </View>

        <View style={styles.rates}>
          <Rates rateValue={item.stargazersCount} name="Stars"/>
          <Rates rateValue={item.forksCount} name="Forks"/>
          <Rates rateValue={item.reviewCount} name="Reviews"/>
          <Rates rateValue={item.ratingAverage} name="Rating"/>
        </View>
      </View>
    )
  };

  export default RepositoryItem;