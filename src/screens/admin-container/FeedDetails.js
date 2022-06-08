import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { cs, HEIGHT, styleData } from '../../css/cs';

export default function FeedDetails({ route, navigation }) {
  const itemData = route.params.itemData
  return (
    <ScrollView>
      <ImageBackground source={{ uri: itemData.image }} style={[styles.feedsHeaderContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack('')} style={[styles.backBtn]}>
          <Entypo name='chevron-left' size={30} color='white' />
        </TouchableOpacity>
      </ImageBackground>
      <View style={[cs.p1]}>
        <View style={[cs.displayStart, cs.itemCenter, cs.mb2]}>
          <Feather name='clock' size={18} color={styleData.colorPrimary} />
          <Text style={[cs.colorPrimary, cs.textBold, cs.ml1]}>{itemData.time}</Text>
        </View>
        <Text style={[cs.font18, cs.textBold, cs.mb1]}>{itemData.title}</Text>
        <Text style={[cs.colorTextGray]}>{itemData.text}
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  feedsHeaderContainer: {
    height: HEIGHT / 2.5,
    backgroundColor: styleData.colorAquaGreen300,
    position: "relative"
  },
  backBtn: {
    position: 'absolute',
    top: 60,
    left: 25,
    backgroundColor: '#00000040',
    borderRadius: 5
  },
  feedsImg: {
    flex: 1,
    height: HEIGHT / 2.5
  }
})