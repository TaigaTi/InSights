import { ReactNode } from "react";
import { View } from "react-native";

interface CardProps {
    color: string;
    height: number;
    children?: ReactNode;
}

export default function Card({ color, height, children }: CardProps) {
    return (
        <View style={{
            width: '100%',
            padding: 5,
        }}>
            <View
                style={{
                    flexDirection: 'row',
                    padding: 20,
                    backgroundColor: color,
                    borderRadius: 15,
                    height: height,
                }}>
                {children}
            </View>
        </View>
    );
};