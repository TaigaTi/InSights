import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AppBar } from "../components/AppBar";
import HeadingText from "../styles/HeadingText";
import { StyleSheet } from "react-native";
import Card from "../components/Card";
import { colors } from "../styles/theme";
import BottomNav from "../components/BottomNav";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Image } from "react-native";
import { useState } from "react";

interface PostProps {
    navigation: NavigationProp<ParamListBase>;
}

const author = "Jane Doe";
const date = "12/02/24";
const post = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrud voluptate voluptate ipsum amet consectetur pariatur incididunt deserunt proident ullamco velit cillum incididunt mollit reprehenderit anim nisi eu aut. Loconsectetur pariatur incididunt deserunt proident ullamco velit cillum."

export default function Post({ navigation }: PostProps) {
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    return (
        <View style={styles.container}>
            {/* Navigation */}
            <View style={{ width: '100%' }}>
                <AppBar navigation={navigation}></AppBar>
            </View>

            {/* Page Title */}

            <View style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                paddingTop: 10,
            }}>
                <ScrollView
                    style={{
                        width: '95%',
                        height: '70%',
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Breadcrumb */}
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.breadcrumb}>
                            <FontAwesome name="arrow-left" color={colors.black} size={10}></FontAwesome>
                            <Text style={{ fontWeight: 'bold' }}>Back to Posts</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Main Post Card */}
                    <Card colors={[colors.grey, colors.grey]} height={540}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Post Title</Text>
                            <TouchableOpacity onPress={() => setBookmarked(!bookmarked)}>
                                <Image source={bookmarked? require('../assets/icons/bookmark.png') : require('../assets/icons/bookmark-o.png')} style={styles.bookmark} />
                            </TouchableOpacity>
                        </View>

                        {/* Post Information */}
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingVertical: 10,
                        }}>
                            <View style={styles.author}>
                                <Image source={require('../assets/icons/user-darkblue.png')} style={styles.authorIcon} />
                            </View>
                            <View>
                                <Text style={styles.authorInfo}>Author: {author}</Text>
                                <Text style={styles.authorInfo}>{date}</Text>
                            </View>
                        </View>

                        {/* Post Content */}
                        <View style={{ paddingHorizontal: 10 }}>
                            <View style={{ paddingTop: 15 }}>
                                <Text style={styles.subheading}>Sub-Heading 1</Text>
                                <Text>{post}</Text>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Text style={styles.subheading}>Sub-Heading 2</Text>
                                <Text>{post}</Text>
                            </View>
                        </View>

                        {/* Post Interactions */}
                        <View style={{ paddingLeft: 150, paddingTop: 25, marginRight: -15 }}>
                            <View style={styles.interactions}>
                                <TouchableOpacity onPress={() => { setLiked(!liked) }}>
                                    <Image source={liked ? require('../assets/icons/heart.png') : require('../assets/icons/heart-o.png')} style={styles.interactionIcons} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/comment-o.png')} style={styles.interactionIcons} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/share-o.png')} style={{ marginTop: 2, width: 27, height: 27 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>

                </ScrollView>
            </View>

            {/* Navigation */}
            <View style={{ width: '100%' }}>
                <BottomNav navigation={navigation} pageName="InSights"></BottomNav>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    interactions: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-evenly',
    },
    breadcrumb: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '38%',
        justifyContent: 'space-evenly',
        opacity: 0.5,
        fontWeight: 'bold',
        paddingBottom: 2,
    },
    interactionIcons: {
        width: 30,
        height: 30,
    },
    author: {
        marginTop: -5,
        paddingHorizontal: 5,
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    authorIcon: {
        width: 50,
        height: 50,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.purple,
    },
    subheading: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.black,
        paddingBottom: 5,
    },
    authorInfo: {
        opacity: 0.65,
    },
    bookmark: {
        width: 30,
        height: 30,
        marginRight: -10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10
    }
});