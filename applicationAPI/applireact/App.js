import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./screen/HomeScreen";
import DetailsScreen from "./screen/DetailsScreen";
import DetailsInfoScreen from "./screen/DetailsInfoScreen";
import FormEmpAdd from "./component/FormEmpAdd";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="FormEmpAdd">
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Details" component={DetailsScreen} />
                <Tab.Screen name="DetailsInfo" component={DetailsInfoScreen} initialParams={{ itemId: 42, query:'defaut value' }}/>
                <Tab.Screen name="FormEmpAdd" component={FormEmpAdd}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
