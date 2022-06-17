import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { cs, WIDTH } from '../css/cs';

export default function ErrorPage() {
  return (
    <View style={[cs.displayColumnCenter, cs.f1]}>
      <Image style={[{width:WIDTH, height:300}]} source={{uri:'https://cdn.w600.comps.canstockphoto.com/404-error-page-not-found-lacking-with-drawing_csp71264490.jpg'}} />
    </View>
  )
}

const styles = StyleSheet.create({})