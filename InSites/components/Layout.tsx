import { View, ScrollView } from "react-native";
import HeadingText from "../styles/HeadingText";
import { AppBar } from "./AppBar";
import BottomNav from "./BottomNav";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { StyleSheet } from "react-native";

interface LayoutProps {
    children: React.ReactNode;
    navigation: NavigationProp<ParamListBase>;
    heading: string;
    pageName: string;
}

export default function Layout({ children, navigation, heading, pageName }: LayoutProps) {
    return (
        <>
            <View style={styles.container}>
                {/* Navigation */}
                <View style={{ width: '100%' }}>
                    <AppBar navigation={navigation}></AppBar>
                </View>

                {/* Page Title */}
                <View style={{ alignSelf: 'flex-start', paddingHorizontal: 40, paddingTop: 10 }}>
                    <HeadingText>{heading}</HeadingText>
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
                        {children}
                    </ScrollView>
                </View>

                {/* Navigation */}
                <View style={{ width: '100%' }}>
                    <BottomNav navigation={navigation} pageName={pageName}></BottomNav>
                </View>
            </View>
        </>
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
})