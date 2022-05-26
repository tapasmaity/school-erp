import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const WIDTH = width;
export const HEIGHT = height;
// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");
// console.log('Window',window)
// console.log('Screens',screen)
export const styleData = {
    colorPrimary: '#2855AE',
    colorPrimary300: '#7292CF',
    colorGray: '#BDBDBD',
    colorLightGray: '#efefef',
    colorSuccess: '#27AE60',
    colorWarn: '#bd9218',
    colorWhite: '#ffffff',
    colorRed500: '#E53935',
    colorRed400: '#E35D5B',
    colorRed300: '#EB5757',
    colorYellow500: '#F2C94C',
    colorAquaBlue500: '#A811DA',
    colorAquaBlue400: '#BF5AE0',
    colorAquaGreen300: '#56CCF2',
    colorAquaGreen200: '#e6efed',
    fontOpenSansB: 'open-sans-bold',
    fontOpenSansM: 'open-sans-medium',
    fontOpenSansR: 'open-sans-regular',
    fontOpenSansI: 'open-sans-italic',
}

export const cs = StyleSheet.create({

    // --------------------------Font Family--------!>
    fontOSB: {
        fontFamily: styleData.fontOpenSansB
    },
    fontOSM: {
        fontFamily: styleData.fontOpenSansM
    },
    fontOSR: {
        fontFamily: styleData.fontOpenSansR
    },
    fontOSI: {
        fontFamily: styleData.fontOpenSansI
    },

    // --------------------------Color--------!>
    colorPrimary: {
        color: styleData.colorPrimary
    },
    colorPrimary300: {
        color: styleData.colorPrimary300
    },
    colorGray: {
        color: styleData.colorGray
    },
    colorWhite: {
        color: styleData.colorWhite
    },
    colorRed500: {
        color: styleData.colorRed500
    },

    // -------------------------- Background Color--------!>
    bgPrimary: {
        backgroundColor: styleData.colorPrimary
    },
    bgGray: {
        backgroundColor: styleData.colorGray
    },
    bgWhite: {
        backgroundColor: styleData.colorWhite
    },
    bgSuccess: {
        backgroundColor: styleData.colorSuccess
    },
    bgDanger: {
        backgroundColor: styleData.colorRed500
    },
    bgLightGray: {
        backgroundColor: styleData.colorLightGray
    },
    bgcolorAquaGreen: {
        backgroundColor: styleData.colorAquaGreen200
    },


    // --------------------------Flex 1, 2, 3 --------!>
    f1: {
        flex: 1,
    },
    f2: {
        flex: 2,
    },
    f3: {
        flex: 3,
    },
    // --------------------------Margin--------!>
    m1: {
        margin: 10,
    },
    m2: {
        margin: 20,
    },
    m3: {
        margin: 30,
    },
    m4: {
        margin: 40,
    },
    m5: {
        margin: 50,
    },

    // --------------------------Margin Left--------!>
    m1: {
        marginLeft: 10,
    },
    ml2: {
        marginLeft: 20,
    },
    ml3: {
        marginLeft: 30,
    },
    ml4: {
        marginLeft: 40,
    },
    ml5: {
        marginLeft: 50,
    },

    // --------------------------Margin Right--------!>
    mr1: {
        marginRight: 10,
    },
    mr2: {
        marginRight: 20,
    },
    mr3: {
        marginRight: 30,
    },
    mr4: {
        marginRight: 40,
    },
    mr5: {
        marginRight: 50,
    },

    // --------------------------Margin Top--------!>
    mt1: {
        marginTop: 10,
    },
    mt2: {
        marginTop: 20,
    },
    mt3: {
        marginTop: 30,
    },
    mt4: {
        marginTop: 40,
    },
    mt5: {
        marginTop: 50,
    },

    // --------------------------Margin Bottom--------!>
    mb1: {
        marginBottom: 10,
    },
    mb2: {
        marginBottom: 20,
    },
    mb3: {
        marginBottom: 30,
    },
    mb4: {
        marginBottom: 40,
    },
    mb5: {
        marginBottom: 50,
    },

    // --------------------------Margin Horizontal--------!>
    mx05: {
        marginHorizontal: 5,
    },
    mx1: {
        marginHorizontal: 10,
    },
    mx2: {
        marginHorizontal: 20,
    },
    mx3: {
        marginHorizontal: 30,
    },
    mx4: {
        marginHorizontal: 40,
    },
    mx5: {
        marginHorizontal: 50,
    },

    // --------------------------Margin Vertical--------!>
    my05: {
        marginVertical: 5,
    },
    my1: {
        marginVertical: 10,
    },
    my2: {
        marginVertical: 20,
    },
    my3: {
        marginVertical: 30,
    },
    my4: {
        marginVertical: 40,
    },
    my5: {
        marginVertical: 50,
    },

    // --------------------------Padding--------!>
    p1: {
        padding: 10,
    },
    p2: {
        padding: 20,
    },
    p3: {
        padding: 30,
    },
    p4: {
        padding: 40,
    },
    p5: {
        padding: 50,
    },
    // --------------------------Padding Left--------!>
    pl1: {
        paddingLeft: 10,
    },
    pl2: {
        paddingLeft: 20,
    },
    pl3: {
        paddingLeft: 30,
    },
    pl4: {
        paddingLeft: 40,
    },
    pl5: {
        paddingLeft: 50,
    },

    // --------------------------Padding Right--------!>
    pr1: {
        paddingRight: 10,
    },
    pr2: {
        paddingRight: 20,
    },
    pr3: {
        paddingRight: 30,
    },
    pr4: {
        paddingRight: 40,
    },
    pr5: {
        paddingRight: 50,
    },

    // --------------------------Padding Top--------!>
    pt1: {
        paddingTop: 10,
    },
    pt2: {
        paddingTop: 20,
    },
    pt3: {
        paddingTop: 30,
    },
    pt4: {
        paddingTop: 40,
    },
    pt5: {
        paddingTop: 50,
    },

    // --------------------------Padding Bottom--------!>
    pb1: {
        paddingBottom: 10,
    },
    pb2: {
        paddingBottom: 20,
    },
    pb3: {
        paddingBottom: 30,
    },
    pb4: {
        paddingBottom: 40,
    },
    pb5: {
        paddingBottom: 50,
    },

    // --------------------------Padding Horizontal--------!>
    px05: {
        paddingHorizontal: 5,
    },
    px1: {
        paddingHorizontal: 10,
    },
    px2: {
        paddingHorizontal: 20,
    },
    px3: {
        paddingHorizontal: 30,
    },
    px4: {
        paddingHorizontal: 40,
    },
    px5: {
        paddingHorizontal: 50,
    },

    // --------------------------Padding Vertical--------!>
    py05: {
        paddingVertical: 5,
    },
    py1: {
        paddingVertical: 10,
    },
    py2: {
        paddingVertical: 20,
    },
    py3: {
        paddingVertical: 30,
    },
    py4: {
        paddingVertical: 40,
    },
    py5: {
        paddingVertical: 50,
    },

    // --------------------------Font Size--------!>
    font10: {
        fontSize: 10,
    },
    font12: {
        fontSize: 12,
    },
    font15: {
        fontSize: 15,
    },
    font18: {
        fontSize: 18,
    },
    font20: {
        fontSize: 20,
    },
    font22: {
        fontSize: 22,
    },
    font25: {
        fontSize: 25,
    },
    font30: {
        fontSize: 30,
    },
    font35: {
        fontSize: 35,
    },

    // --------------------------Text Align--------!>
    textCenter: {
        textAlign: 'center',
    },
    textLeft: {
        textAlign: 'left',
    },
    textRight: {
        textAlign: "right",
    },
    textJustify: {
        textAlign: "justify",
    },
    underLine: {
        textDecorationLine: "underline",
    },
    // -------------------------Bold Text---------------------!>
    textBold: {
        fontWeight: 'bold'
    },

    // --------------------------Flex Display Type--------!>
    displayColumnCenter: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    displayCenter: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    displayStart: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    displayEnd: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    displayBetween: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    displayAround: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    itemCenter: {
        alignItems: 'center'
    },
    fWrap: {
        flexWrap: 'wrap'
    },
    // --------------------------Box Style --------!>
    boxContainer: {
        padding: 15,
    },
    boxRoundTop: {
        backgroundColor: 'white',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 20,
    },
    boxShadow1: {
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8
    }
})