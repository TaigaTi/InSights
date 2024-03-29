// This component renders the social media dashboard card s

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Card from "./Card";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

interface SocialCardProps {
    name: string;
    title: string;
    colors: string[];
}

export default function SocialCard(SocialCardProps) {
    return (
        <Card colors={SocialCardProps.colors} height={120}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <FontAwesome name={SocialCardProps.name} size={20} color='white' />
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 15,
                        padding: 1,
                        paddingHorizontal: 10,
                    }}
                >{SocialCardProps.title}</Text>
            </View>

            <View style={{ flexDirection: 'row', paddingVertical: 15, justifyContent: 'space-evenly' }}>
                <View style={styles.container}>
                    <Text style={styles.text}>Posts</Text>
                    <Text style={styles.text}>200</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Followers</Text>
                    <Text style={styles.text}>300K</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Following</Text>
                    <Text style={styles.text}>25K</Text>
                </View>
            </View>
        </Card>);
}

const styles = StyleSheet.create({
    text: {
        paddingVertical: 2,
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        paddingHorizontal: 5,
        alignItems: 'center',
    }
});