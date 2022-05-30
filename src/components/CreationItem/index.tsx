import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { CTEXT } from '../../view/elements/custom'
import { GLOBAL } from '../../view/styles/global'
import { ProgressiveImage } from '../ProgressiveImage'
import { ICreation } from '../CreationContainer/types'

export interface ICreationItemProps {
    creation: ICreation,
    onPress: (id: string) => void;
}

export const CreationItem: React.FC<ICreationItemProps> = ({creation, onPress}: ICreationItemProps) => {

    return (
        <TouchableOpacity onPress={() => onPress("" + creation.id)}>
            {creation && creation.img_url &&
            <ProgressiveImage source={creation.img_url}/>
            }
            <CTEXT style={[GLOBAL.FONTS.h3, styles.title]}>{creation.title ? creation.title : "Creation"}</CTEXT>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        maxWidth: 150,
    }
})