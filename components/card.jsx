import { Image, StyleSheet, Text, View } from "react-native";

export default function Card({ cases }) {

    const getStatusIcon = (status) => {
        switch (status) {
            case 'lawyer-select':
                return require('../assets/icons/lawyer.png');
            case 'new':
                return require('../assets/icons/new.png');
            case 'in-progress':
                return require('../assets/icons/progress.png');
            case 'resolved':
                return require('../assets/icons/resolved.png');
            case 'cancelled':
                return require('../assets/icons/cancelled.png');
        }
    }


    return (
        <View>
            {cases.map((caseItem) => (
                <View key={caseItem.caseID} style={styles.cardContainer}>
                    <View style={styles.cardHeader}>
                        <Text style={{ fontFamily: 'RalewayRegular', fontSize: 16 }}>
                            {caseItem.name}
                        </Text>
                        <View style={styles.status}>
                            <Image source={getStatusIcon(caseItem.status)} />
                        </View>
                    </View>
                    <View style={{ marginVertical: 8 }}>
                        <Text style={styles.info}>
                            Case ID: <Text style={{ fontFamily: 'RalewayBold' }}>{caseItem.caseID}</Text>
                        </Text>
                        <Text style={styles.info}>
                            Location: <Text style={{ fontFamily: 'RalewayBold' }}>{caseItem.location}</Text>
                        </Text>
                        <Text style={styles.info}>
                            Date Created: <Text style={{ fontFamily: 'RalewayBold' }}>{caseItem.date}</Text>
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        borderRadius: 20,
        borderColor: '#D9DADD',
        borderWidth: 1,
        marginBottom: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 11,
        paddingRight: 6,
        paddingVertical: 4,
        borderBottomWidth: 0.5,
        marginHorizontal: 7,
    },
    status: {
        flexDirection: 'row',
        paddingRight: 0,
    },
    info: {
        paddingHorizontal: 11,
        marginHorizontal: 7,
        fontFamily: 'RalewayRegular',
        fontSize: 12,
    }
})