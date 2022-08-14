import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';



const BUTTONS_CONTAINER_PAD = 22;
const BUTTON_PAD = 10;
const ROW_COUNT = 4
const BUTTON_WIDTH = (Dimensions.get('window').width - BUTTONS_CONTAINER_PAD) / ROW_COUNT - BUTTON_PAD;

export const CalcButton = ({...obj}) => {
    const buttonSize = obj.value === '0' ? BUTTON_WIDTH * 2 + 5 : BUTTON_WIDTH;
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: obj.backgroundColor, width: buttonSize}]}
            onPress={obj.onPress}>
            <Text style={[styles.value, {color: obj.color}]}>{obj.value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#475C6B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: BUTTON_WIDTH,
        marginVertical: 5
    },
    value: {
        fontSize: 36,
        fontStyle: "italic",
    }
})