// This component serves as the analytics page where users can view detailed insights of their social media stats

import { ScrollView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { AppBar } from '../components/AppBar';
import HeadingText from '../styles/HeadingText';
import BottomNav from '../components/BottomNav';
import Card from '../components/Card';
import { colors } from '../styles/theme';
import PieChart from 'react-native-pie-chart';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Layout from '../components/Layout';

// Temporary Pie Chart Data
const series = [9, 34];
const series2 = [35, 23];
const sliceColor = [colors.pink, colors.purple];
const sliceColor2 = [colors.darkblue, colors.blue];

interface AnalyticsProps {
    navigation: NavigationProp<ParamListBase>;
}

export default function Analytics({ navigation }: AnalyticsProps) {
    return (
        <Layout navigation={navigation} heading='Analytics' pageName='Analytics'>
            {/* Summary Card */}
            <Card colors={[colors.purple, colors.pink]} height={80}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Posts</Text>
                        <Text style={styles.text}>200</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Followers</Text>
                        <Text style={styles.text}>300K</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Following</Text>
                        <Text style={styles.text}>25K</Text>
                    </View>
                </View>
            </Card>

            {/* Engagement Card */}
            <Card colors={[colors.grey, colors.grey]} height={180}>
                <View>
                    <Text style={styles.cardTitle}>Engagement</Text>
                </View>
            </Card>

            {/* Audience Card */}
            <Card colors={[colors.grey, colors.grey]} height={180}>
                <View >
                    <Text style={styles.cardTitle}>Audience</Text>
                </View>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        padding: 20,
                    }}>
                    <PieChart
                        widthAndHeight={100}
                        series={series2}
                        sliceColor={sliceColor2}
                    />
                    <PieChart
                        widthAndHeight={100}
                        series={series}
                        sliceColor={sliceColor}
                    />
                </View>
            </Card>

            {/* Impressions Card */}
            <Card colors={[colors.orange, colors.pink]} height={80}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Impressions: 256k</Text>
            </Card>
        </Layout>
    );
};

const styles = StyleSheet.create({
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
    }
});