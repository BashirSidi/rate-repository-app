import {
  View,
  StyleSheet ,
  Image,
} from 'react-native';
import Text from './Text';

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
  language: {
    fontSize: 20,
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    width: 'max-content',
    padding: 6,
    borderRadius: 4,
  },
  rates: {
    display: 'flex',
    flexDirection: 'row',
  },
  rate: {
    margin: 0,
  }
})

const RepositoryItem = ({item}) => {
    const kFormatter = (num) => {
      return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }
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
          <Text style={{fontSize: 15, width: 298}}>{item.description}</Text>
          <View style={styles.language}>{item.language}</View>
          </View>
        </View>

        <View style={styles.rates}>
          <View style={styles.rate}>
            <Text>{kFormatter(item.stargazersCount)}</Text>
            <Text>Stars</Text>
          </View>

          <View style={styles.rate}>
            <Text>{kFormatter(item.forksCount)}</Text>
            <Text>Forks</Text>
          </View>

          <View style={styles.rate}>
            <Text>{kFormatter(item.reviewCount)}</Text>
            <Text>Reviews</Text>
          </View>

          <View style={styles.rate}>
            <Text>{kFormatter(item.ratingAverage)}</Text>
            <Text>Rating</Text>
          </View>
        </View>
      </View>
    )
  };

  export default RepositoryItem;