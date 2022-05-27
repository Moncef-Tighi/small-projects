import {Button, Text, View} from "react-native";
import * as React from "react";

function DetailsInfoScreen({ route, navigation }) {
    /* 2. Get the param */
    const { itemId, otherParam,query } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {}
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Text>query: {JSON.stringify(query)}</Text>
            <Button
                title="change data"
                onPress={() =>
                    navigation.setParams({
                        query: 'someText',
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}


export default DetailsInfoScreen;
