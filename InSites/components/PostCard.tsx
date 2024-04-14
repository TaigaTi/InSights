import { colors } from "../styles/theme";
import Card from "./Card";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

const authorIcons = {
    userBlue: require('../assets/icons/user-blue.png'),
    userDarkBlue: require('../assets/icons/user-darkblue.png'),
    userPink: require('../assets/icons/user-pink.png'),
    userPurple: require('../assets/icons/user-purple.png'),
    userOrange: require('../assets/icons/user-orange.png'),
};

export default function PostCard() {
    const getRandomAuthorIcon = () => {
        const keys = Object.keys(authorIcons);
        const randomIndex = Math.floor(Math.random() * keys.length);
        return authorIcons[keys[randomIndex] as keyof typeof authorIcons];
    };

    return (<>
        <Card colors={[colors.grey, colors.grey]} height={180}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.postTitle}>Post Title</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/bookmark-o.png')} style={styles.bookmark} />
                </TouchableOpacity>
            </View>

            <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore pariatur vel laborum ex odit vitae dicta asperiores.
                Ducimus, dicta obcaecati. Fuga vel nisi quos tempora delectus beatae, deserunt ea!
            </Text>

            <View style={styles.author}>
                <Image source={getRandomAuthorIcon()} style={styles.authorIcon} />
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
        paddingVertical: 5,
        marginRight: -5,
        alignItems: 'flex-end',
    },
    authorIcon: {
        width: 40,
        height: 40,
    },
    bookmark: {
        width: 30,
        height: 30,
    }
});