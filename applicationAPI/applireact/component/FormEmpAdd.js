import {StyleSheet, View, Text, TextInput,Button} from 'react-native'
import { useState } from 'react';
import ListEmp from "./ListEmp";


const FormEmpAdd = function () {

    const [lists,setLists] = useState({
        nom : 'nom1',
        prenom:'nom2',
        service:1,
        salaire :1
    });

    const [change,setChange] = useState(0);

    function updatedValueForm(index,value){
        let updatedValue = {}
        updatedValue[index] = value;

        setLists({
            ...lists,
            ...updatedValue
        })
    }


    function AddEmp(){
        fetch(
            /*"https://jsonplaceholder.typicode.com/users"*/
            "http://127.0.0.1:3000/api/emp/add",{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method : "POST",
                body : JSON.stringify(lists),
            })
            .then((res) => res.json())
            .then((json) => {

                console.log(json)
                setChange(CurrentValue +1 )
            })
    }

    console.log(lists);

    return (
        <View>
            <TextInput placeholder='Nom' onChangeText={newText => updatedValueForm('nom',newText)}/>
            <TextInput placeholder='Prenom' onChangeText={newText => updatedValueForm('prenom',newText)}/>
            <Button
                title="Ajouter"
                onPress={() => {AddEmp()}}
            />
            <Text>{change}</Text>
            <ListEmp />
        </View>
    )

}

export default FormEmpAdd;
