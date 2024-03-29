// This component serves as the main screen of InSites, presenting users with Dashboard information after signing in

import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import HeadingText from '../styles/HeadingText';
import PieChart from 'react-native-pie-chart';

// Temporary Pie Chart Data
const series = [12, 34, 45, 56, 20];
const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00'];

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Page Title */}
            <HeadingText>Dashboard</HeadingText>

            <View style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                paddingTop: 10,
            }}>
                <ScrollView style={{
                    width: '95%',
                    height: '80%',
                }
                }>
                    {/* Main Dashboard Chart */}
                    <Card color={'lightgrey'} height={200}>
                        <View
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <PieChart
                                widthAndHeight={150}
                                series={series}
                                sliceColor={sliceColor}
                            />
                        </View>
                    </Card>

                    {/* Social Account Dashboards */}
                    <Card color={'lightgrey'} height={120}>
                        <Text>Twitter</Text>
                    </Card>

                    <Card color={'lightgrey'} height={120}>
                        <Text>Instagram</Text>
                    </Card>

                    {/* New Social Account */}
                    <Card color={'lightgrey'} height={80}>
                        <Text>Add More</Text>
                    </Card>
                </ScrollView>
            </View>


            {/* Navigation */}
            <Button
                title='Analytics'
                onPress={() =>
                    navigation.navigate('Analytics')
                }
            />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
    },
});