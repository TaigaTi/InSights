// This component serves as the main screen of InSites, presenting users with Dashboard information after signing in

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeadingText from '../styles/HeadingText';
import Card from '../components/Card';
import PieChart from 'react-native-pie-chart';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SocialCard from '../components/SocialCard';
import BottomNav from '../components/BottomNav';
import {AppBar} from '../components/AppBar';
import { colors } from '../styles/theme';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface HomeProps {
    navigation: NavigationProp<ParamListBase>;
}

// Temporary Pie Chart Data
const series = [9, 34];
const sliceColor = [colors.pink, colors.purple];

export default function Home({ navigation }: HomeProps) {
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
                    <Card colors={[colors.grey, colors.grey]} height={220}>
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
                    <SocialCard colors={[colors.purple, colors.pink]} name="instagram" title="Instagram"></SocialCard>
                    <SocialCard colors={[colors.pink, colors.orange]} name="twitter" title="Twitter"></SocialCard>
                    <SocialCard colors={[colors.blue, colors.darkblue]} name="facebook" title="Facebook"></SocialCard>

                    {/* New Social Account */}
                    <Card colors={[colors.grey, colors.grey]} height={60}>
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
                <BottomNav navigation={navigation} pageName='Home'></BottomNav>
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