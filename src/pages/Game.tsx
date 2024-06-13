import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import EasyLevelScreen from './EasyLevel';
import HardLevelScreen from './HardLevel';
import {GameProps} from '../routes/route';
import {MyTabBar} from '../components/TabBar';

const Tab = createMaterialTopTabNavigator();

export default function GameScreen({route}: GameProps) {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      initialRouteName={route.params.difficulty}
      tabBar={MyTabBar}>
      <Tab.Screen name="EasyLevel" component={EasyLevelScreen} />
      <Tab.Screen name="HardLevel" component={HardLevelScreen} />
    </Tab.Navigator>
  );
}
