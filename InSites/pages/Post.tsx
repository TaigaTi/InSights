import { View, Text, ScrollView } from "react-native";
import {AppBar} from "../components/AppBar";
import HeadingText from "../styles/HeadingText";
import { StyleSheet } from "react-native";
import Card from "../components/Card";
import { colors } from "../styles/theme";
import BottomNav from "../components/BottomNav";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface PostProps {
    navigation: NavigationProp<ParamListBase>;
}

const author = "Jane Doe";
const date = "12/02/24";
const post = "it nostrud voluptate voluptate ipsum amet consectetur pariatur incididunt deserunt proident ullamco velit cillum incididunt mollit reprehenderit anim nisi eu aut. Loconsectetur pariatur incididunt deserunt proident ullamco velit cillum incididunt mollit reprehenderit anim nisi eu aut. Lorem…"

export default function Post({ navigation }: PostProps) {
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
                    <View>
                        <Text>
                            Back to posts
                        </Text>
                    </View>

                    {/* Main Post Card */}
                    <Card colors={[colors.grey, colors.grey]} height={550}>
                        <View style={{ alignSelf: 'flex-start', paddingHorizontal: 10, paddingTop: 10 }}>
                            <HeadingText>Post Title</HeadingText>
                        </View>

                        {/* Post Information */}
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingVertical: 10,
                        }}>
                            <View style={{ paddingRight: 15, paddingLeft: 10 }}>
                                <FontAwesome name='user-circle' size={35} color={colors.darkblue}></FontAwesome>
                            </View>
                            <View>
                                <Text>Author: {author}</Text>
                                <Text>{date}</Text>
                            </View>
                        </View>

                        {/* Post Content */}
                        <View style={{ paddingTop: 20 }}>
                            <HeadingText>Sub-Heading 1</HeadingText>
                            <Text>{post}</Text>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <HeadingText>Sub-Heading 1</HeadingText>
                            <Text>{post}</Text>
                        </View>

                        {/* Post Interactions */}
                        <View style={{ paddingLeft: 150, paddingTop: 30 }}>
                            <View style={styles.interactions}>
                                <FontAwesome name='heart-o' size={25} color={colors.black}></FontAwesome>
                                <FontAwesome name='comment-o' size={25} color={colors.black}></FontAwesome>
                                <FontAwesome name='send-o' size={25} color={colors.black}></FontAwesome>
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
});