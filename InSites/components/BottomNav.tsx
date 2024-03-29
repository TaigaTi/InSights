import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function BottomNav({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Home') }}
            // accessibilityLabel=""
            >
                <FontAwesome name='pie-chart' size={35} color={'#b34cd9'}></FontAwesome>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('Analytics') }}
            // accessibilityLabel=""
            >
                <FontAwesome name='bar-chart' size={35} color={'lightgrey'}></FontAwesome>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('InSights') }}
            // accessibilityLabel=""
            >
                <FontAwesome name='lightbulb-o' size={35} color={'lightgrey'}></FontAwesome>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});