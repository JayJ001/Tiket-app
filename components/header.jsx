import { Image, StyleSheet, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/icons/logo.png')}
      />
      <Image 
        source={require('../assets/icons/notification.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginLeft: 12,
    marginRight: 24,
  }
})