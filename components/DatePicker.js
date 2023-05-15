import {
    Fragment,
    useRef,
    useState
} from "react";
import {
    Modal,
    Pressable,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { colors } from "../values/colors";
import {
    Box,
    IconButton,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { ALL_MONTHS } from "../values/CONST";
import DateList from "./DatePicker/DateList";
import { ethiopianDate } from "./Clock";
import { styles } from "../styles";

export default function DatePicker() {
    const [months, setMonths] = useState(ALL_MONTHS)
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedDay, setSelectedDay] = useState(1);
    const [year, setYear] = useState(parseInt(ethiopianDate().slice(4, 8)));
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [showYearList, setShowYearList] = useState(false);

    const modalRef = useRef(null);

    function incrementMonth() {
        if (selectedMonth === months.length) {
            setYear(prev => prev + 1);
            setSelectedMonth(1);
            return;
        }
        setSelectedMonth(prev => prev + 1);
    }

    function decrementMonth() {
        if (selectedMonth === 1) {
            if (parseInt(ethiopianDate().slice(4, 8)) < year) {
                setYear(prev => prev - 1);
            }
            setSelectedMonth(months.length);
            return;
        }
        setSelectedMonth(prev => prev - 1);
    }

    const currentMonth = months[selectedMonth - 1];
    return (
        <Fragment>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text>Date picker</Text>
            </TouchableOpacity>
            <Modal
                visible={showDatePicker}
                onRequestClose={() => setShowDatePicker(false)}
                transparent
                animationType="fade"
                style={{ backgroundColor: colors.textColor }}
            >
                <Pressable onPress={() => setShowDatePicker(false)} style={[styles.h100, styles.w100]}>
                    <View ref={modalRef} style={{
                        backgroundColor: 'white',
                        elevation: 10,
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        height: '40%',
                        width: '80%',
                        borderRadius: 10
                    }}>
                        <Box
                            display='flex'
                            flexDirection='row'
                            justifyContent='space-between'
                            padding='2'
                            alignItems='center'
                        >
                            <IconButton
                                onPress={decrementMonth}
                                icon={<AntDesign name="left" size={24} color="black" />}
                            />
                            <Text onPress={() => setShowYearList(!showYearList)}>
                                <Text>{currentMonth.month} {year}</Text>
                            </Text>
                            <IconButton
                                onPress={incrementMonth}
                                icon={<AntDesign name="right" size={24} color="black" />}
                            />
                        </Box>

                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                            }}>
                            <DateList selectedMonth={selectedMonth} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </Fragment>
    )
}