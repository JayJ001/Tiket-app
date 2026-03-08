import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Footer() {
    const [active, setActive] = useState('My Cases')

  const buttons = [
    { name: 'Home', icon: require('../assets/icons/home.png') },
    { name: 'Messages', icon: require('../assets/icons/messages.png') },
    { name: 'My Cases', icon: require('../assets/icons/cases.png') },
    { name: 'Calendar', icon: require('../assets/icons/Calendar.png') },
    { name: 'User', icon: require('../assets/icons/user.png') },
  ];

    return (
    <View style={styles.container}>
        {buttons.map((button) => (
        <TouchableOpacity
            key={button.name}
            style={[styles.button, active === button.name && styles.buttonActive]}
            onPress={() => setActive(button.name)}
        >
            <View style={[styles.iconContainer, active === button.name && styles.iconWrapperActive]}>
                <Image source={button.icon} style={styles.icon} />
            </View>
                <Text style={[styles.label, active === button.name && styles.labelActive]}>
                    {button.name}
                </Text>
        </TouchableOpacity>
        ))}
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },    
  button: {
    paddingTop: 6,
    paddingBottom: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent'
  }, 
  buttonActive: {
    backgroundColor: '#E8F3FF',
    borderBottomColor: '#A6CCF6',
    borderBottomWidth: 3,
  },
  icon: {
    resizeMode: 'contain',
    width: 32,
    height: 32,
  },
  label: {
    marginTop: 8,
    fontWeight: '600',
    fontSize: 10,
    color: '#46649C',
    fontFamily: 'RalewaySemiBold'
  }
})