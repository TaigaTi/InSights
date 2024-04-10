import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../styles/theme";
import Card from "./Card";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

const authorColors = [
    colors.blue,
    colors.darkblue,
    colors.pink,
    colors.purple,
    colors.orange
];

export default function PostCard() {
    return (<>
        <Card colors={[colors.grey, colors.grey]} height={180}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.postTitle}>Post Title</Text>
                <TouchableOpacity>
                    <FontAwesome name='bookmark' size={25} color={colors.darkgrey}></FontAwesome>
                </TouchableOpacity>
            </View>

            <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore pariatur vel laborum ex odit vitae dicta asperiores.
                Ducimus, dicta obcaecati. Fuga vel nisi quos tempora delectus beatae, deserunt ea!
            </Text>

            <View style={styles.author}>
                <FontAwesome name='user-circle' size={26} color={authorColors[Math.floor(Math.random() * authorColors.length)]}></FontAwesome>
            </View>
        </Card>
    </>)
}

const styles = StyleSheet.create({
    postTitle: {
        paddingVertical: 5,
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
    },
    description: {
        alignItems: 'center',
        height: '45%',
        width: '95%',
        overflow: 'hidden',
        lineHeight: 20,
    },
    author: {
        paddingVertical: 10,
        alignItems: 'flex-end',
    },
});