import * as React from 'react'
import { Image, View, StyleSheet } from 'react-native'

interface IOuterProps {
    source: string
}

export const ProgressiveImage: React.FC<IOuterProps> = (props) => {
    const {source} = props;

    return (
        <View style={styles.ProgressiveImage}>
            <Image
            style={styles.image}
            source={{uri:source}}
            resizeMode="cover"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ProgressiveImage: {
        backgroundColor: "#f3f3f3",
        borderRadius: 8,
        marginBottom: 12,
        marginTop: 16
    },
    image: {
        width: 162,
        height: 162,
        borderRadius: 8,
    }
})