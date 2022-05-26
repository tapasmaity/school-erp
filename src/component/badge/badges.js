import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Badges({ title, bgColor, radius, paddingH, paddingV, font, color, leftIcon, iconSize, iconColor }) {
  return (
    <View
      style={[{
        backgroundColor: bgColor ? bgColor : 'white',
        borderRadius: radius ? radius : 20,
        paddingHorizontal: paddingH ? paddingH : 5,
        paddingVertical: paddingV ? paddingV : 2,

        color: color ? color : '#000000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start'

      }]}
    >
      {leftIcon &&
        <FontAwesome5 style={{ marginRight: 8 }} name={leftIcon} size={iconSize ? iconSize : 15} color={iconColor ? iconColor : "#000"} />
      }
      <Text style={{ color: color ? color : '#000000', fontSize: font ? font : 12 }}>{title ? title : "Title"}</Text>
    </View>
  )
}
