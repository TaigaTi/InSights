import React from 'react';
import { Modal, View, Text, TouchableOpacity, Button } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../styles/theme';

interface CustomAlertProps {
    visible: boolean;
    title: string;
    message: string;
    buttons: any[];
    onRequestClose: () => void;
}

const CustomAlert = ({ visible, title, message, buttons, onRequestClose }: CustomAlertProps) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onRequestClose}
        >
            <View style={styles.container}>
                <View style={styles.alertContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttonContainer}>
                        {buttons.map((button: any, index: number) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.button, button.style]}
                                onPress={button.onPress}
                            >
                                <Text style={styles.buttonText}>{button.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

CustomAlert.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            onPress: PropTypes.func.isRequired,
            style: PropTypes.object,
        })
    ).isRequired,
    onRequestClose: PropTypes.func.isRequired,
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertContainer: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 22,
    },
    title: {
        paddingTop: 15,
        fontSize: 18,
        marginBottom: 10,
        fontWeight: '500',
        color: colors.purple,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: colors.pink,
    },
};

export default CustomAlert;
