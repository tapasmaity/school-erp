import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Badges({ title, bgColor, radius, paddingH, paddingV, font, color, leftIcon, iconSize, iconColor }) {
  return (
    <View>
      <View
        style={[{
          backgroundColor: bgColor ? bgColor : 'white',
          borderRadius: radius ? radius : 10,
          paddingHorizontal: paddingH ? paddingH : 5,
          paddingVertical: paddingV ? paddingV : 2,
          position: 'absolute',
          fontSize: font ? font : 12,
          color: color ? color : '#000000',
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
        }]}
      >
        {leftIcon &&
        <FontAwesome5 style={{marginRight:8}} name={leftIcon} size={iconSize ? iconSize : 15} color={iconColor ? iconColor : "#000"} />
        }
        <Text>{title? title : "Title"}</Text>
      </View>
    </View>
  )
}
