import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { cs, HEIGHT, styleData, WIDTH } from '../../css/cs';
import { useNavigation } from '@react-navigation/native';


export default function MenuCard({menuCardData}) {

    const navigation = useNavigation();


    /*
    * Menu Card
    * evant
    * Handlar
    */
    const handleRouting = (type) => {
        if (type === 'Play Quiz') {
            navigation.navigate('ErrorPage')
        }
        if (type === 'Fees Due') {
            navigation.navigate('Fees')
        }
        if (type === 'Assignment') {
            navigation.navigate('Assignment')
        }
        if (type === 'School Holiday') {
            navigation.navigate('ErrorPage')
        }
        if (type === 'Time Table') {
            navigation.navigate('TimeTable')
        }
        if (type === 'Result') {
            navigation.navigate('ResultScreen')
        }
        if (type === 'Date Sheet') {
            navigation.navigate('DataSheet')
        }
        if (type === 'Ask Doubts') {
            navigation.navigate('AskDoubts')
        }
        if (type === 'School Gallery') {
            navigation.navigate('SchoolImgGallery')
        }
        if (type === 'Leave Application') {
            navigation.navigate('LeaveAplication')
        }
        if (type === 'Change Password') {
            navigation.navigate('ChangePassword')
        }
        if (type === 'Events') {
            navigation.navigate('Events')
        }
        if (type === 'Settings') {
            navigation.navigate('Settings')
        }
        if (type === 'Logout') {
            navigation.navigate('SignIn')
        }
    }

    
    return (
        <View style={[cs.displayBetween, cs.fWrap]}>
            {menuCardData.map((item, index) => {
                return (
                    <TouchableOpacity onPress={() => handleRouting(item.title)} key={index} style={[styles.brandContainer]}>
                        <Image resizeMode='cover' source={item.menuImage} />
                        <Text style={[cs.font15]}>{item.title}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    brandContainer: {
        margin: 5,
        width: WIDTH / 2.4,
        borderRadius: 15,
        height: HEIGHT / 5,
        backgroundColor:styleData.colorAquaGreen100,
        padding: 15,
        justifyContent: 'space-around'
    }
})