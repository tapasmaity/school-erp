import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { cs, WIDTH } from '../../css/cs';

export default function CustomTabBtn({ tabName, onPress, borderColor, bgColor, activeColor, textColor, font, bold, radius }) {
    const [tab, setTab] = useState('');

    useEffect(() => {
        setTab(tabName[0])
    }, [])

    /*
    * Tab
    * Change
    */
    const tabHandar = (item) => {
        setTab(item);
        onPress && onPress(item)
    }
    return (
        <View style={[
            styles.btnGroup,
            borderColor && {
                borderWidth: 1,
                borderColor: borderColor,
            },
            {
                backgroundColor: bgColor ? bgColor : '#96B1E5',
                borderRadius: radius ? radius : 30,
            }
        ]}>
            {tabName && tabName.map((item, i) => {
                return (
                    <TouchableOpacity
                        key={i}
                        onPress={() => tabHandar(item)}
                        style={[styles.btn, tab === item && { backgroundColor: activeColor ? activeColor : 'white' }, { borderRadius: radius ? radius : 30 }]}
                    >
                        <Text style={[
                            tab === item ? { color: textColor ? textColor[0] : '#6688CA' } : { color: textColor ? textColor[1] : 'white' },
                            {
                                fontSize: font ? font : 12,
                                fontWeight: bold && 'bold'
                            }

                        ]}>{item}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    btnGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        paddingHorizontal: 12,
        paddingVertical: 8,

    }
})