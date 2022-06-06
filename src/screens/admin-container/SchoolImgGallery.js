import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Modal,
    StatusBar,
    ScrollView
} from 'react-native';

//import FastImage
import FastImage from 'react-native-fast-image';
import TopHeaderBgComponent from '../../component/comon-component/TopHeaderBgComponent';
import { cs } from '../../css/cs';

const SchoolImgGallery = () => {
    const [imageuri, setImageuri] = useState('');
    const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        let items = Array.apply(null, Array(120)).map((v, i) => {
            return {
                id: i,
                src: 'https://unsplash.it/400/400?nature=' + (i + 1)
            };
        });
        setDataSource(items);
    }, []);

    const showModalFunction = (visible, imageURL) => {
        setImageuri(imageURL);
        setModalVisibleStatus(visible);
    };

    return (
        <View style={styles.container}>
            <StatusBar
                translucent={true}
                barStyle="light-content"
                backgroundColor={modalVisibleStatus ? '#000000' : 'transparent'}
            />
            <TopHeaderBgComponent title="Gallery" />
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
                {modalVisibleStatus ? (
                    <Modal
                        transparent={false}
                        animationType={'fade'}
                        visible={modalVisibleStatus}
                        onRequestClose={() => {
                            showModalFunction(!modalVisibleStatus, '');
                        }}>
                        <View style={styles.modelStyle}>
                            <FastImage
                                style={styles.fullImageStyle}
                                source={{ uri: imageuri }}
                                resizeMode={
                                    FastImage.resizeMode.contain
                                }
                            />
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={[styles.closeButtonStyle]}
                                onPress={() => {
                                    showModalFunction(!modalVisibleStatus, '');
                                }}>
                                <AntDesign name='closecircleo' size={26} color='red' />
                            </TouchableOpacity>
                        </View>
                    </Modal>
                ) : (
                    <View style={styles.container}>

                        <FlatList
                            data={dataSource}
                            renderItem={({ item }) => (
                                <View style={styles.imageContainerStyle}>
                                    <TouchableOpacity
                                        key={item.id}
                                        style={{ flex: 1 }}
                                        onPress={() => {
                                            showModalFunction(true, item.src);
                                        }}>
                                        <FastImage
                                            style={styles.imageStyle}
                                            source={{
                                                uri: item.src,
                                            }}
                                            resizeMode='stretch'
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                            //Setting the number of column
                            numColumns={3}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                )}
            </View>
        </View>
    );
};
export default SchoolImgGallery;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    imageContainerStyle: {
        flex: 1,
        margin: 1,
        backgroundColor: "#00000070",
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageStyle: {
        height: 120,
        width: '100%',
    },
    fullImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '98%',
        resizeMode: 'contain',

    },
    modelStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    closeButtonStyle: {
        top: 50,
        position: 'absolute',
        backgroundColor: '#424242',
        padding: 7,
        borderRadius: 50,

    },
});