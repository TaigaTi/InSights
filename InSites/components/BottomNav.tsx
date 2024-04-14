import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../styles/theme';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Image } from 'react-native';

interface BottomNavProps {
    navigation: NavigationProp<ParamListBase>;
    pageName: string;
}

export default function BottomNav({ navigation, pageName }: BottomNavProps) {
    const handleNavigation = (pageName: string) => {
        navigation.navigate(pageName);
    };

    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => handleNavigation('Home')}>
                    <Image style={styles.icon} source={pageName === 'Home'
                        ? require('../assets/icons/dashboard.png')
                        : require('../assets/icons/dashboard-o.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleNavigation('Analytics')}>
                    <Image style={styles.icon} source={pageName === 'Analytics'
                        ? require('../assets/icons/analytics.png')
                        : require('../assets/icons/analytics-o.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleNavigation('InSights')}>
                    <Image style={styles.icon} source={pageName === 'InSights'
                        ? require('../assets/icons/insights.png')
                        : require('../assets/icons/insights-o.png')} />
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    icon: {
        width: 35,
        height: 35,
    }
});
