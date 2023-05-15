import { Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../values/colors";

function DateItem({ index, date, selectedDay, setSelectedDay, }) {

    const isItemSelected = (index + 1) === selectedDay;
    return (
        <TouchableOpacity
            onPress={() => setSelectedDay(date)}
            style={{
                padding: 10,
                margin: 5,
                width: 35,
                height: 35,
                alignItems: 'center',
                borderRadius: 100,
                backgroundColor:isItemSelected ? colors.brightRed : 'transparent'
            }}
        >
            <Text style={{fontWeight: '600', color: isItemSelected ? 'white' : colors.textColor}}>{date}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(DateItem);