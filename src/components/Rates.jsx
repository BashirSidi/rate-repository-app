import { 
  View,
  StyleSheet, 
} from "react-native";
import Text from './Text';

const styles = StyleSheet.create({
  rate: {
    margin: 0,
  },
  rateNum: {
    fontWeight: '600',
    fontSize: 20,
  }
});

const Rates = ({rateValue, name}) => {
  const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }
  
  return (
    <View style={styles.rate}>
      <Text style={styles.rateNum}>{kFormatter(rateValue)}</Text>
      <Text>{name}</Text>
    </View>
  )
}

export default Rates