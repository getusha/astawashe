import { View } from "react-native";
import DateItem from "./DateItem";
import React from "react";
const dates = [...Array(31).keys()].slice(1);

function DateList({ selectedDay, setSelectedDay }) {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
            }}>
            {dates.map((date, index) => (
                <DateItem
                    key={index}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    date={date}
                    index={index}
                />)
            )}
        </View>
    )
}

export default React.memo(DateList);