import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

const AppHeader = props => {
    return(
        <Header centerComponent={{
            text: props.title,
            style: {color: "#291f00", fontSize:25, fontWeight: "bold", padding: 20}
        }}
        backgroundColor="#fed348"
        />
    )
}

export default AppHeader