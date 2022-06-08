import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import Feather from 'react-native-vector-icons/Feather'
import { cs, HEIGHT, styleData } from '../../css/cs'
import TopHeaderBgComponent from '../../component/comon-component/TopHeaderBgComponent'
import FooterBgImg from '../../component/comon-component/FooterBgImg';

export default function EventsAndPrograms({ navigation }) {

   const eventData = [
      {
         image: "https://cdn.pixabay.com/photo/2016/06/29/08/50/pencils-1486278_960_720.jpg",
         time: "06 Jan 22, 09:00 AM",
         title: "Sleepover Night",
         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
         image: "https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_960_720.jpg",
         time: "12 Jan 22, 09:00 AM",
         title: "Fishing Tournament",
         text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      },
      {
         image: "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg",
         time: "24 Jan 22, 09:00 AM",
         title: "Rhyme Time: A Night of Poetry",
         text: "April is also National Poetry Month. Now there is a great theme for a fun family night! Combine poetry readings by students and adults. Invite guest readers and poets. Sell a book of student poems as a fund-raiser. Display portfolios of students' best poetry. Present your oldest students in a poetry slam competition, like teacher Brenda Dyck staged with her students (see the Education World article, A Poetry Slam Cures Midwinter Blahs). For more ideas for great poetry writing activities, don't miss Education World's special Poetry Month archive."
      },
      {
         image: "https://cdn.pixabay.com/photo/2018/06/14/16/36/football-3475163_960_720.jpg",
         time: "28 Jan 22, 09:00 AM",
         title: "Football Tournament",
         text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."
      }
   ]

   /*
   * Card Click event
   */
   const hendlefeedDetails = (itemData) => {
      navigation.navigate('FeedDetails', { itemData })
   }
   return (
      <View style={[cs.f1]}>
         <StatusBar
            barStyle='light-content'
            translucent={true}
            backgroundColor='transparent'
         />
         <TopHeaderBgComponent title='Events &#38; Programs' />
         <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
            <ScrollView
               showsVerticalScrollIndicator={false}
               nestedScrollEnabled={true}
               style={{ flex: 1, marginBottom: HEIGHT / 8 }}
            >
               {eventData && eventData.map((item, index) => {
                  return (
                     <TouchableOpacity key={index} onPress={() => hendlefeedDetails(item)} style={[styles.eventCardContainer]}>
                        <Text style={[cs.font18, cs.textBold, cs.mb1]}>{item.title}</Text>
                        <View style={[cs.displayStart]}>
                           <View style={[styles.eventsImgSec, cs.mr1]}>
                              <Image style={[styles.eventsImgSec]} resizeMode='cover' source={{ uri: item.image }} />
                           </View>
                           <View style={[cs.f1]}>
                              <View style={[cs.displayStart, cs.itemCenter, cs.mb05]}>
                                 <Feather name='clock' size={18} color={styleData.colorPrimary} />
                                 <Text style={[cs.colorPrimary, cs.textBold, cs.ml1]}>{item.time}</Text>
                              </View>
                              <Text style={[cs.colorGray, cs.textJustify]} numberOfLines={3}>{item.text}</Text>
                           </View>
                        </View>
                     </TouchableOpacity>
                  );
               })}
            </ScrollView>
         </View>
         <FooterBgImg />
      </View>
   )
}

const styles = StyleSheet.create({
   eventCardContainer: {
      borderWidth: 1,
      borderColor: '#A5A5A5',
      padding: 15,
      marginBottom: 10,
      borderRadius: 10,
   },
   eventsImgSec: {
      backgroundColor: styleData.colorLightGray,
      height: 70,
      width: 70,
      borderRadius: 10
   },
})