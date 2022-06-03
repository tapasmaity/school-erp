import { StyleSheet, Image,  } from 'react-native';
import React from 'react';

export default function FooterBgImg() {
    return (
        <Image style={[styles.footerImg]} source={require('../../assets/images/footer.png')} />
    )
}

const styles = StyleSheet.create({
    footerImg: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
})