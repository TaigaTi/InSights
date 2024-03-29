import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AppBar() {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <FontAwesome name='apple' size={25} />
                <Text style={styles.title}>InSites</Text>
            </View>
            <View style={styles.rightContainer}>
                <FontAwesome name='user-circle' size={30} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        padding: 30,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});
