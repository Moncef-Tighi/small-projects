import {Button, Text, View} from "react-native";
import * as React from "react";


function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go to back"
                onPress={() => navigation.goBack()}
            />

        </View>
    );
}


export default DetailsScreen;
