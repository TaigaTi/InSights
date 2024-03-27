// This component serves as the main screen of InSites, presenting users with Dashboard information after signing in

import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Page Title */}
            <Text>Dashboard</Text>

            {/* Main Dashboard Chart */}
            <View
                style={{
                    flexDirection: 'row',
                    height: 100,
                    padding: 20,
                    backgroundColor: 'blue',
                    borderRadius: 20,
                    width: '80%',
                }}>
            </View>

            {/* Social Account Dashboards */}
            <View
                style={{
                    flexDirection: 'row',
                    height: 100,
                    padding: 20,
                    backgroundColor: 'red',
                    borderRadius: 20,
                    width: '80%',
                }}>
            </View>

            {/* New Social Account */}
            <View
                style={{
                    flexDirection: 'row',
                    height: 100,
                    padding: 20,
                    backgroundColor: 'pink',
                    borderRadius: 20,
                    width: '80%',
                }}>
            </View>


            {/* Navigation */}
            <Button
                title="Go to Analytics"
                onPress={() =>
                    navigation.navigate('Analytics')
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});