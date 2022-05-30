import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { ICreation } from '../components/CreationContainer/types'
import { CreationItem } from '../components/CreationItem'
import { CreationSkeleton } from '../components/CreationSkeleton'


interface IOuterPops {
    creations: ICreation[] 
    onPress: (id: string) => void
}

export const CreationList: React.FC<IOuterPops> = ({creations, onPress}) => {
  
    return (
        <View style={styles.CreationList}>
            {!creations.length ? (
                <CreationSkeleton />
             ) :
            creations.map((creation) => {
                return (
                    <CreationItem creation={creation} key={creation.id} onPress={onPress}/>
                )
            })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    CreationList: {
      display: 'flex',
      justifyContent: "space-between",
      flexDirection: 'row',
      flexWrap: "wrap"
    },
  });
  