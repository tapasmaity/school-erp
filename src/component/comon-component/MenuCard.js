import { View, Text, ScrollView, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { cs, HEIGHT, styleData, WIDTH } from '../../css/cs';

export default function MenuCard({ navigation }) {

    const brandImg = [
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764056.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764066.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764076.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764088.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764105.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764114.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764123.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764133.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764144.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764154.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764163.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764173.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764192.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764183.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764202.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764210.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764218.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764227.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764235.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764363.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764255.jpg'}
        },
        {
            brandImage: {uri:'https://thekidcity.com//uploads/1649764374.jpg'}
        },
    ]
    
    return (
        <ScrollView>
            <View style={[cs.boxContainer]}>
                <View style={[cs.displayBetween, cs.fWrap]}>
                    {brandImg.map((item, index) => {
                        return (
                            <View key={index} style={[styles.brandContainer, cs.boxShadow1]}>
                                <Image style={[styles.brandImg]} resizeMode='cover' source={item.brandImage} />
                            </View>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    brandContainer: {
        margin: 5,
        width: WIDTH / 2 - 45,
        borderRadius: 10,
        height: HEIGHT / 5,
        borderTopWidth: 1,
        borderTopColor: '#efefef',
        padding: 10,
        backgroundColor: styleData.colorWhite,
        justifyContent: 'center',
        alignItems: 'center',

    },
    brandImg: {
        width: '100%',
        borderRadius: 10,
        height: '100%',
    },
})