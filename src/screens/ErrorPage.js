import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { cs } from '../css/cs';

export default function ErrorPage() {
  return (
    <View style={[cs.displayColumnCenter, cs.f1]}>
      <Image source={require('../assets/images/support.png')} />
      <Text style={[cs.font22, cs.colorPrimary]}>Page Not Found</Text>
    </View>
  )
}

const styles = StyleSheet.create({})