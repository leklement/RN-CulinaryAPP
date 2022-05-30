import * as React from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { View } from 'react-native'

export const CreationSkeleton: React.FC = () => {
    return (
        <View style={{paddingTop: 10, borderRadius: 8}}>
            <ContentLoader 
                speed={2}
                width={162}
                height={194}
                viewBox="0 0 162 182"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
            <Rect x="0" y="0" rx="8" ry="8" width="162" height="162" /> 
            <Rect x="0" y="174" rx="8" ry="8" width="162" height="20" />
            </ContentLoader>
        </View>
    )
}