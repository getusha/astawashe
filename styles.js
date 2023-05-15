import { StyleSheet } from "react-native";
import { colors } from "./values/colors";

export const styles = StyleSheet.create({
    w100: {
        width: '100%'
    },
    h100: {
        height: '100%'
    },
    p1: {
        padding: 5,
    },
    p2: {
        padding: 10
    },
    m1: {
        margin: 5
    },
    m2: {
        margin: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        ...this.p1
    },

    modalBottomBtn: {
        height: 45,
        width: '40%',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalBottomBtnText: {
        color: colors.textColor,
        fontFamily: 'Shiromeda-Bold',
        fontSize: 15
    },

    fab: {
        height: 60,
        width: 60,
        position: 'absolute',
        backgroundColor: colors.brightRed,
        bottom: 0,
        right: 0,
        marginVertical: 50,
        marginHorizontal: 20,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    horizontalGroup: {
        height: 70,
        width: '100%',
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    }
})