import { StyleSheet, Image,  } from 'react-native';
import React from 'react';
import { HEIGHT } from '../../css/cs';

export default function FooterBgImg() {
    return (
        <Image style={[styles.footerImg]} source={require('../../assets/images/footer.png')} />
    )
}

const styles = StyleSheet.create({
    footerImg: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height:HEIGHT /5.7
    },
})