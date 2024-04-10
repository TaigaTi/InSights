import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import AppBar from "../components/AppBar";
import { StyleSheet } from "react-native";
import BottomNav from "../components/BottomNav";
import HeadingText from "../styles/HeadingText";
import { colors } from "../styles/theme";
import PostCard from "../components/PostCard";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

export default function InSights({ navigation }) {
    const handleNavigation = (pageName: React.SetStateAction<string>) => {
        navigation.navigate(pageName);
    };

    return (
        <View style={styles.container}>
            {/* Navigation */}
            <View style={{ width: '100%' }}>
                <AppBar navigation={navigation}></AppBar>
            </View>

            {/* Page Title */}
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={styles.heading}>
                    <HeadingText>InSights</HeadingText>
                </View>

                <View>
                    <TouchableOpacity style={styles.createPost}>
                        <LinearGradient start={[0, 0]} end={[1, 1]} colors={[colors.pink, colors.purple]} style={styles.gradient} >
                            <FontAwesome name="plus" size={10} color={'white'}></FontAwesome>
                            <Text style={{ color: 'white', paddingStart: 8, fontWeight: 'bold' }}>Create Post</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>

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
                    <TouchableOpacity onPress={() => handleNavigation('Post')}>
                        <PostCard></PostCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation('Post')}>
                        <PostCard></PostCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation('Post')}>
                        <PostCard></PostCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation('Post')}>
                        <PostCard></PostCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation('Post')}>
                        <PostCard></PostCard>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNavigation('Post')}>
                        <PostCard></PostCard>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* Navigation */}
            <View style={{ width: '100%' }}>
                <BottomNav navigation={navigation}></BottomNav>
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
    heading: {
        justifyContent: 'flex-start',
        paddingEnd: 120,
        paddingTop: 10,
    },
    text: {
        paddingVertical: 2,
        color: 'white',
        fontWeight: 'bold',
    },
    textContainer: {
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    createPost: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10,
    },
    gradient: {
        paddingStart: 15,
        padding: 5,
        borderRadius: 8,
        height: 30,
        width: 130,
        flexDirection: 'row',
        alignItems: 'center',
    },
});