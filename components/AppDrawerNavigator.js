import React from "react"
import { createDrawerNavigator } from "react-navigation-drawer"
import SettingScreen from "../screens/SettingScreen"
import { AppTabNavigator } from "./AppTabNavigator"
import CustomSideBarMenu from "./CustomSidebarMenu"
import MyDonationScreen from '../screens/MyDonationsScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import { Notifications } from "expo"

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen: AppTabNavigator},
    MyDonations:  {screen: MyDonationScreen},
    Notifications: {screen: NotificationsScreen},
    Setting: {screen: SettingScreen},
 
    },
    {
        contentComponent: CustomSideBarMenu
    },
    {
        initialRouteName: 'Home'
    }
)