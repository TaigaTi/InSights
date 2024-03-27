// This component serves as the main screen of InSites, presenting users with their Dashboard information after signing in. 

import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Welcome to InSites!</Text>
            <View
                style={{
                    flexDirection: 'row',
                    height: 100,
                    padding: 20,
                    backgroundColor: '#fff',
                }}>
            </View>
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