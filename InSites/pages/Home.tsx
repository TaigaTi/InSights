// This component serves as the main screen of InSites, presenting users with Dashboard information after signing in

import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import HeadingText from '../styles/HeadingText';
import Card from '../components/Card';
import PieChart from 'react-native-pie-chart';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SocialCard from '../components/SocialCard';
import BottomNav from '../components/BottomNav';
import AppBar from '../components/AppBar';

// Temporary Pie Chart Data
const series = [9, 34];
const sliceColor = ['#ff5fb7', '#b34cd9',];

// Social Media Card Colors
const colors = ["#b34cd9", "#ff5fb7", "#ff8590"];

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
             {/* Navigation */}
             <View style={{ width: '100%' }}>
                <AppBar navigation={navigation}></AppBar>
            </View>

            {/* Page Title */}
            <View style={{ alignSelf: 'flex-start', paddingHorizontal: 40, paddingTop: 10 }}>
                <HeadingText>Dashboard</HeadingText>
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
                    {/* Main Dashboard Chart */}
                    <Card colors={['#f4f4f5', '#f4f4f5']} height={220}>
                        <View
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 20,
                            }}>
                            <PieChart
                                widthAndHeight={150}
                                series={series}
                                sliceColor={sliceColor}
                            />
                            <TouchableOpacity
                                style={{ alignSelf: "flex-end" }}
                                onPress={() => { navigation.navigate('Analytics') }}
                                accessibilityLabel="See more user analytics details"
                            >
                                <Text>See more...</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>

                    {/* Social Account Dashboards */}
                    <SocialCard colors={[colors[0], colors[1]]} name="instagram" title="Instagram"></SocialCard>
                    <SocialCard colors={[colors[1], colors[2]]} name="twitter" title="Twitter"></SocialCard>

                    {/* New Social Account */}
                    <Card colors={['#f4f4f5', '#f4f4f5']} height={60}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingHorizontal: 5 }}>
                                <FontAwesome name='plus' size={15}></FontAwesome>
                            </View>

                            <View style={{ paddingHorizontal: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500' }}>Add Account</Text>
                            </View>
                        </View>
                    </Card>
                </ScrollView>
            </View>


            {/* Navigation */}
            <View style={{ width: '100%' }}>
                <BottomNav navigation={navigation}></BottomNav>
            </View>
        </View >
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