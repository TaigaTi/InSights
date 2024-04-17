// This component serves as the main screen of InSites, presenting users with Dashboard information after signing in

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeadingText from '../styles/HeadingText';
import Card from '../components/Card';
import PieChart from 'react-native-pie-chart';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SocialCard from '../components/SocialCard';
import BottomNav from '../components/BottomNav';
import { AppBar } from '../components/AppBar';
import { colors } from '../styles/theme';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Layout from '../components/Layout';

interface HomeProps {
    navigation: NavigationProp<ParamListBase>;
}

// Temporary Pie Chart Data
const series = [9, 34];
const sliceColor = [colors.pink, colors.purple];

export default function Home({ navigation }: HomeProps) {
    return (
        <Layout navigation={navigation} heading='Dashboard' pageName='Home'>
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
            <TouchableOpacity onPress={() => { navigation.navigate('DetailedAnalytics') }}>
                <SocialCard colors={[colors.purple, colors.pink]} name="instagram" title="Instagram"></SocialCard>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('DetailedAnalytics') }}>
                <SocialCard colors={[colors.pink, colors.orange]} name="twitter" title="Twitter"></SocialCard>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('DetailedAnalytics') }}>
                <SocialCard colors={[colors.blue, colors.darkblue]} name="facebook" title="Facebook"></SocialCard>
            </TouchableOpacity>

            {/* New Social Account */}
            <TouchableOpacity>
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
            </TouchableOpacity>
        </Layout >
    );
};