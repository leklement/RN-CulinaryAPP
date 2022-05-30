import * as React from 'react'
import { Navigation } from 'react-native-navigation'
import { useDispatch } from 'react-redux'
import { addVisit } from '../../../shared/redux/actions/app'
import ROUTER from '../../navigators/router'
import { CreationList } from '../../CreationList'
import { ICreation } from './types'

export const CreationContainer: React.FC = () => {
    const [creations, setCreations]  = React.useState<ICreation[]>([])
    const [componentId, setComponentID] = React.useState<string>("")

    const dispatch = useDispatch();

    const navigateToCreation = (id: string) => {
        dispatch(addVisit(id));
        ROUTER.pushCounterScreen({componentId, passProps: {creationId: id}})
     };
 

    React.useEffect(() => {

        // Retrieve current component ID for navigation
        Navigation.events().registerComponentDidAppearListener(event => setComponentID(event.componentId))
        
        // Calling mocked API
        fetch("/api/creations")
            .then((res) => res.json())
            .then((json) => setCreations(json.creations))
    },[])

    return (
        <CreationList creations={creations} onPress={navigateToCreation}/>
    )
}