import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

export default class Sidebar extends React.Component{
    render() {
        console.log("This Sidebar Exists Somewhere")
        return(
            <View style={styles.container}>
                <View style={styles.drawerContainer}>
                    <DrawerItems
                        {...this.props}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerContainer: {
        flex: 0.8
    }
})


