import { toEthiopian } from "ethiopian-date";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export function ethiopianDate() {
    const year = new Date().getFullYear();
    const month = new Date().getUTCMonth() + 1;
    const days = new Date().getDate();
    const [etYear, etMonth, etDays] = toEthiopian(year, month, days)

    return `${etDays}/${etMonth}/${etYear} ዓ.ም`;
}

export function ethiopainTime() {
    const hours = (new Date().getHours() % 12) - 6 || 12;
    const minutes = new Date().getMinutes();

    return `${hours > 10 ? hours : `0${hours}`}:${minutes > 10 ? minutes : `0${minutes}`}`;
}

export default function Clock() {
    const [currentDate, setCurrentDate] = useState(ethiopianDate());
    // const [currentTime, setCurrentTime] = useState(ethiopainTime());

    // useEffect(() => {
    //     const timerInterval = setInterval(() => {
    //         setCurrentTime(ethiopainTime());
    //     }, 2_000);
    //     return () => clearInterval(timerInterval);
    // }, []);

    const [fontsLoaded] = useFonts({
        'Shiromeda-Regular': require('../assets/fonts/shiromeda-regural.ttf'),
    });

    if(!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{
                fontSize: 17,
                margin: 10,
                fontFamily: 'Shiromeda-Regular'
            }}>
                {currentDate}
            </Text>

            {/* <Text style={{
                fontSize: 17,
                margin: 10,
                fontFamily: 'Shiromeda-Regular'
            }}>
                {currentTime}
            </Text> */}
        </View>
    )
}