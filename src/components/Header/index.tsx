import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Image, View} from 'react-native';


export interface Props {
}

const Header: React.FC<Props> = () => {
    return (
        <View style={styles.Header}>
            <Image
                style={styles.Logo}
                source={require("../../assets/images/logo_full.png")}
            />
        </View>
    );
};

export default Header;


const styles = StyleSheet.create({   
    Header: {
        position: 'absolute',
        top: 0,
        paddingBottom: 40,
        alignItems: 'center',
    },
    Logo: {
        width: 120,
        height: 30,
        resizeMode: 'stretch',
    },
});