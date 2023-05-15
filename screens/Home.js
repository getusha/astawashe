import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Button, Input, TextArea } from "native-base";
import { Entypo } from "@expo/vector-icons";

import Reminder from "../components/Reminder";
import DatePicker from "../components/DatePicker";
import data from "../values/data";
import { colors } from "../values/colors";
import { styles } from "../styles";

const renderReminderItem = ({ item, index }) => {
  return (
    <Reminder
      key={index}
      title={item.title}
      color={item.color}
      forDate={item.forDate}
    />
  );
};

export default function Home() {
  const [reminderModal, setReminderModal] = useState(false);

  const closeModal = () => {
    setReminderModal(false);
  };

  const openModal = () => {
    setReminderModal(true);
  };

  return (
    <>
      <View style={styles.container}>
        <DatePicker />
        <FlatList
          data={data}
          style={[styles.w100, styles.p1]}
          renderItem={renderReminderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Modal
        animationType="fade"
        visible={reminderModal}
        style={[styles.w100, styles.h100]}
      >
        <View style={styles.p1}>
          <Input />
          <TextArea
            placeholder="ማስታወሻ ኖት"
            style={[styles.w100, styles.m2]}
          />
        </View>
        <View style={styles.horizontalGroup}>
          <TouchableOpacity
            style={{
              ...styles.modalBottomBtn,
              backgroundColor: colors.brightRed,
            }}
            onPress={closeModal}
          >
            <Text style={styles.modalBottomBtnText}>አቋርጥ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.modalBottomBtn,
              backgroundColor: colors.lightGreen,
            }}
          >
            <Text style={styles.modalBottomBtnText}>ጨርስ</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity style={styles.fab} onPress={openModal}>
        <Entypo size={30} color="white" name="plus" />
      </TouchableOpacity>
    </>
  );
}
