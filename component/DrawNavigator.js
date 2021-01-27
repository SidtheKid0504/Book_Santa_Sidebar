import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { TabNavigator } from './BottomTab';
import  Sidebar  from './Sidebar';

export const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator
    },
    },
    {
        contentComponent: Sidebar
    },
    {
        initalRouteName: "Home"
    })
