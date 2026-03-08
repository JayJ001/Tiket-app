import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function Filters() {
    return (
        <View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchBar}
                    placeholder='Search...'
                    placeholderTextColor='#3B3C4066'
                />
                <Image source={require('../assets/icons/search.png')}/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, {backgroundColor: '#6889CC'}]}>
                    <Image source={require('../assets/icons/sort.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.label}>
                        Date
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.label}>
                        Status
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Filters;

const styles = StyleSheet.create({
    buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginLeft: 22,
    marginBottom: 15,
    },
    button: {
    alignSelf: 'flex-start',
    paddingTop: 5,
    paddingRight: 13,
    paddingBottom: 5,
    paddingLeft: 13,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
  },
  label: {
    color: '#6889CC',
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'RalewaySemiBold',
  },
  searchBar: {
    fontFamily: 'RalewaySemiBold',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingHorizontal: 21,
    marginHorizontal: 22,
    marginVertical: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
});