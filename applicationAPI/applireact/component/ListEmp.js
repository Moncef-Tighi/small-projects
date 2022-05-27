import {useState,useEffect} from "react";
import {Button, Text, View,SafeAreaView,FlatList} from "react-native";

function ListEmp() {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch(
            "http://127.0.0.1:3000/api",{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((json) => {

                setItems(json.data.employes)
                console.log(json)
            })
    },[])


    const renderItem = function ({ item })
    {
        return(
            <View>
                <Text>{item.NOM_EMP}</Text>
            </View>
        );
    }



    return(
        <view>
            <text> liste des employés </text>
            <SafeAreaView>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={item => item.ID_EMP}
                />
            </SafeAreaView>
        </view>
    )

}

export default ListEmp;
