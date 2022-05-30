import * as React from 'react';
import {  ImageBackground, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GLOBAL } from '../../styles/global';
import { TYPOGRAPHY } from '../../styles/styleguide';
import { CTEXT } from '../../view/elements/custom';


export interface Props {
    title: string,
    author: string,
    isNew: boolean
}

const Banner: React.FC<Props> = ({title, author, isNew}: Props) => {

    return (
        <View style={styles.Banner}>
            <ImageBackground 
                source={require("../../assets/images/banner_masterclass.png")} 
                resizeMode="cover"
                style={[styles.masterClassImg, GLOBAL.LAYOUT.container]}
                imageStyle={{borderRadius: 8}}
            >
                <LinearGradient 
                    colors={["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0)"]}
                    style={styles.linearGradient}
                    locations={[0,0.4,0.7]}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                >
                    <View style={styles.bannerContainer}>
                        {isNew && <CTEXT style={GLOBAL.CTA.Style.primaryText}>NEW</CTEXT>}
                        <CTEXT style={[GLOBAL.FONTS.h1, styles.title, styles.text]}>{title}</CTEXT>
                        <CTEXT style={[GLOBAL.FONTS.subTitle, styles.text]}>{author}</CTEXT>
                    </View>
                </LinearGradient>
            </ImageBackground>
            
                    
                    
                    
            
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
    Banner: {
        height: 170,
    },
    masterClassImg: {
        justifyContent: 'flex-start',
    },
    text: {
        color: TYPOGRAPHY.COLOR.Default,
    },
    title: {
        maxWidth: 230,
        paddingTop:  6,
        paddingBottom: 12
    },
    bannerContainer: {
        padding: 31,
        paddingLeft: 20,
        paddingRight: 20,
    },
    linearGradient: {
        height: 170,
        borderRadius: 8
    }
});