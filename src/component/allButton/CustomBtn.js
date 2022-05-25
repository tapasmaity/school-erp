import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { styleData } from '../../css/cs';

export const CustomBtn = (props) => {
    const {
        onPress,        // Click Event Handler
        title,          // "String" --Button Name
        bgColor,        // [Array] --Button background color
        bgHorizontal,   // Boolean -- It is Linear Gradient Color. True is Horizontal color Series.(Default    Value false)
        hover,          // Boolean -- This button Hover Effect (Default value False)
        color,          // "String" -- Button Title Color
        radius,         // Number -- Button Radius
        fontSize,       // Number -- Titel Size
        paddingY,       // Number -- Button Padding Vertical
        paddingX,       // Number -- Button Padding Horizontal
        iconColor,      // "String" -- Button Icon Color
        bold,           // Boolean -- Button Title Text is Bold
        rightIcon,      // "String" -- Right Icon Name
        iconSize,       // Number -- Icon size
        align           // "String" -- Only "JustifyContent" Properties use
    } = props;
    const btnStyle = {
        paddingHorizontal: paddingX ? paddingX : 10,
        paddingVertical: paddingY ? paddingY : 10,
        borderRadius: radius ? radius : 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: align ? align : "flex-start",
        alignItems: 'center'
    }
    const titleStyle = {
        fontSize: fontSize ? fontSize : 15,
        color: color ? color : "#000",
        fontWeight: bold ? "bold" : "300"
    }
    return (
        <LinearGradient
            style={{ borderRadius: radius ? radius : 8 }}
            colors={
                bgColor ?
                    (bgColor.length >= 2 ? bgColor : [bgColor[0], bgColor[0]])
                    :
                    [styleData.colorLightGray, styleData.colorLightGray]
            }
            start={bgHorizontal ? { x: 0, y: 1 } : { x: 0, y: 0 }}
            end={bgHorizontal ? { x: 0, y: 0 } : { x: 1, y: 1 }}

        >
            {
                hover ?
                    <Pressable
                        onPress={() => onPress ? onPress() : ""}
                        android_ripple={{ color: "00000010" }}
                        style={btnStyle}>
                        <Text style={titleStyle}>
                            {title ? title : "Title"}
                        </Text>
                        {rightIcon &&
                            <FontAwesome5 name={rightIcon} size={iconSize ? iconSize : 15} color={iconColor ? iconColor : "#000"} />}
                    </Pressable>
                    :
                    <TouchableOpacity
                        onPress={() => onPress ? onPress() : ""}
                        style={btnStyle}>
                        <Text style={titleStyle}>
                            {title ? title : "title"}
                        </Text>
                        {rightIcon &&
                            <FontAwesome5 name={rightIcon} size={iconSize ? iconSize : 15} color={iconColor ? iconColor : "#000"} />}
                    </TouchableOpacity>
            }
        </LinearGradient>
    )
}