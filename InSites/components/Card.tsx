import { ReactNode } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface CardProps {
    colors: string[];
    height: number;
    children?: ReactNode;
}

export default function Card({ colors, height, children }: CardProps) {
    return (
        <View style={{
            width: '100%',
            padding: 5,
        }}>
            {/* <View
                style={{
                    flexDirection: 'row',
                    padding: 20,
                    backgroundColor: color,
                    borderRadius: 15,
                    height: height,
                }}>
                {children}
            </View> */}

            <LinearGradient
                start={[0, 0]} // Start point (x, y)
                end={[1, 1]}
                colors={colors}
                style={{
                    padding: 20,
                    borderRadius: 15,
                    height: height,
                }}
            >
                {children}
            </LinearGradient>
        </View>
    );
};