import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { cs, WIDTH } from '../../css/cs';

export default function CustomTabBtn({ tabName, onPress }) {
    const [tab, setTab] = useState('');

    useEffect(() => {
        setTab(tabName[0])
    }, [])

    /*
    * Tab
    * Change
    */
    const tabHandar = (item) =>{
        setTab(item);
        onPress(item)
    }
    return (
        <View style={[styles.btnGroup]}>
            {tabName && tabName.map((item, i) => {
                return (
                    <TouchableOpacity
                        key={i}
                        onPress={() => tabHandar(item)}
                        style={[styles.btn, tab === item && { backgroundColor: 'white' }]}
                    >
                        <Text style={[cs.font12, cs.textBold, tab === item ? { color: '#6688CA' } : { color: 'white' }]}>{item}</Text>
                    </TouchableOpacity>
                );
            })}
            {/* <TouchableOpacity
                onPress={() => setTab('tabOne')}
                style={[styles.btn, tab === "tabOne" && { backgroundColor: 'white' }]}
            >
                <Text style={[cs.font12, cs.textBold, tab === 'tabOne' ? { color: '#6688CA' } : { color: 'white' }]}>ATTENDANCE</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setTab('tabTwo')}
                style={[styles.btn, tab === "tabTwo" && { backgroundColor: 'white' }]}
            >
                <Text style={[cs.font12, cs.textBold, tab === 'tabTwo' ? { color: '#6688CA' } : { color: 'white' }]}>HOLIDAY</Text>
            </TouchableOpacity> */}
        </View>
    )
}
const styles = StyleSheet.create({
    btnGroup: {
        backgroundColor: '#96B1E5',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginEnd: WIDTH / 15,

    },
    btn: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 30,

    }
})