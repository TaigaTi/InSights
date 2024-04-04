import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../styles/theme';

export default function BottomNav({ navigation }) {
    const [activePage, setActivePage] = useState('Home');

    const handleNavigation = (pageName: React.SetStateAction<string>) => {
        navigation.navigate(pageName);
        setActivePage(pageName);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleNavigation('Home')}>
                <FontAwesome
                    name="pie-chart"
                    size={35}
                    color={activePage === 'Home' ? colors.purple : colors.grey}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleNavigation('Analytics')}>
                <FontAwesome
                    name="bar-chart"
                    size={35}
                    color={activePage === 'Analytics' ? colors.purple : colors.grey}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleNavigation('InSights')}>
                <FontAwesome
                    name="lightbulb-o"
                    size={35}
                    color={activePage === 'InSights' ? colors.purple : colors.grey}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
