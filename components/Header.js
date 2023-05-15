import { View, Text} from "react-native";
import Clock from "./Clock";

export default function Header() {
    return (
        <View style={{
            height: 70,
            width: '100%',
            elevation: 1,
            paddingTop: 30,
            paddingLeft: 10
        }}>
            <Clock />
        </View>
    )
}