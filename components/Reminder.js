import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";

export default function Reminder(props) {
    const {
        color,
        title,
        forDate
    } = props;

    const [expanded, setExpanded] = useState(false);

    const [fontsLoaded] = useFonts({
        'Shiromeda-Bold': require('../assets/fonts/shiromeda-bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableOpacity onPress={() => setExpanded(!expanded)} style={{ ...styles.reminderContainer, borderColor: color }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Text style={{ marginBottom: 5, marginTop: 15, fontSize: 17 }}>
                    {/* <AntDesign name="right" size={15} color="black" /> */}
                    {title}</Text>
                <View style={{
                    marginLeft: 'auto',
                    marginBottom: 'auto',
                    height: 25,
                    width: 80,
                    borderRadius: 100,
                    backgroundColor: color,
                    padding: 5,
                    alignItems: 'center',
                }}>
                    <Text>{forDate}</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{
                    marginTop: 'auto',
                    marginBottom: 10,
                    fontSize: 20,
                    color: color,
                    fontFamily: 'Shiromeda-Bold',
                }}>24</Text>
                <Text style={{ marginTop: 'auto', marginBottom: 12, fontFamily: 'Shiromeda-Bold' }}> ሰዓት ይቀራል</Text>
            </View>
            {expanded ? (
                <View style={{
                    height: 200,
                    width: '100%',
                }}>

                </View>
            ) : null}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    reminderContainer: {
        width: '100%',
        // height: 70,
        borderWidth: 1.1,
        borderLeftWidth: 10,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginVertical: 10,
        paddingLeft: 10,
    }
})