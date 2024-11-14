import { NavigationProp, ParamListBase } from "@react-navigation/native";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { colors } from "../styles/theme";

interface DetailedAnalyticsProps {
    navigation: NavigationProp<ParamListBase>;
    socialAccount: string;
}

export default function DetailedAnalytics({ navigation, socialAccount }: DetailedAnalyticsProps): React.ReactElement {
    return (
        <Layout navigation={navigation} heading='Detailed Analytics' pageName='Detailed Analytics'>
            <Card colors={[colors.purple, colors.pink]} height={80}>

            </Card>
        </Layout>
    );
}