import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Reminder from "../components/Reminder";
import { Button, Input, TextArea } from "native-base";
import { useState } from "react";
import data from "../values/data";
import { colors } from "../values/colors";
import { Entypo } from "@expo/vector-icons";
import DatePicker from "../components/DatePicker";
import { styles } from "../styles";


export default function Home() {
    const [reminderModal, setReminderModal] = useState(false);
    return (
        <>
            <View style={styles.container}>
                <DatePicker />
                <FlatList
                    data={data}
                    style={[styles.w100, styles.p1]}
                    renderItem={({ item, index }) => (
                        <Reminder
                            key={index}
                            title={item.title}
                            color={item.color}
                            forDate={item.forDate}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <Modal
                animationType="fade"
                visible={reminderModal}
                style={[styles.w100, styles.h100]}>
                <View style={styles.p1}>
                    <Input />
                    <TextArea placeholder="ማስታወሻ ኖት" style={[styles.w100, styles.m2]} />
                </View>
                <View style={styles.horizontalGroup}>
                    <TouchableOpacity style={{ ...styles.modalBottomBtn, backgroundColor: colors.brightRed }}>
                        <Text
                            style={styles.modalBottomBtnText}
                            onPress={() => setReminderModal(!reminderModal)}>
                            አቋርጥ
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{...styles.modalBottomBtn, backgroundColor: colors.lightGreen}}>
                        <Text style={styles.modalBottomBtnText}>ጨርስ</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <TouchableOpacity style={styles.fab} onPress={() => setReminderModal(true)} >
                <Entypo size={30} color={'white'} name="plus" />
            </TouchableOpacity>
        </>
    )
}
