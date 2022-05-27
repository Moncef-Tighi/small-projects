import {Button, Text, View} from "react-native";
import * as React from "react";
import ListEmp from "../component/ListEmp";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/*<Text>Home Screen</Text>*/}
            <Button
                title="vers la page details"
                onPress={() => navigation.navigate('Details')}
            />

            <Button
                title="Go to Details + info"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('DetailsInfo', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />

            <ListEmp />
        </View>
    );
}


export default HomeScreen;
