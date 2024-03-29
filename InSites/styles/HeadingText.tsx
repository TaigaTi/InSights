import { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface HeadingTextProps {
    children?: ReactNode;
}

export default function HeadingText({ children }: HeadingTextProps) {
    return (
        <View style={{padding: 2}}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
            }}>
                {children}
            </Text>
        </View>
    );
}