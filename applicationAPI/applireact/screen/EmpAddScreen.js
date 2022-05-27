import {Button, Text, View} from "react-native";
import * as React from "react";

import FormEmpAdd from "../component/FormEmpAdd";

function EmpAddScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FormEmpAdd />
        </View>
    );
}


export default EmpAddScreen;
