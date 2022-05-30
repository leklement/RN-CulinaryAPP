import {useMemo} from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../shared/redux/reducers'

export const useSelectCreation = (id: string) => {
    const creations = useSelector((state: RootState) => state.app.creations)


    return useMemo(() => {
        if(!creations) {
            return null
        }

        return creations[id]
    },[creations])
}