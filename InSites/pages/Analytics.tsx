// This component serves as the analytics page where users can view detailed insights of their social media stats

import { Button, Text, View } from 'react-native';

export default function Analytics({ navigation }) {
    return (
        <View>
            <Text>This is your Analytics Page!</Text>
            <Button
                title="Back to Home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
        </View>
    );
 };