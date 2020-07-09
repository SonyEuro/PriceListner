import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View,Button,Alert,
    Image} from 'react-native';
import Settings from "./components/Settings";

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default function App() {
  //return TestFunc();
  return ShowSettings();
}

function TestFunc(props) {
    //var name;
    //name = Name;
    //name = 'Костя';
  return (
  <View style={styles.container}>
    {/*<StatusBar backgroundColor="lightblue" />*/}
    <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
        style={{width: 80, height: 80}}
    />
    <Text style={styles.text}>Дратути, {props.name}!</Text>
    <TextInput
        style={{
          height: 40,
            width:150,
          borderColor: 'white',
          borderWidth: 0,
            color: 'lightgrey'
        }}
        defaultValue={props.name}
        onChangeText={text => props.name=text}
    />
      <Button
          title="Тыкни в меня!"
          onPress={() => SetName(props.name)}
          style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'black'
          }}
      />
    <Text style={styles.text}>Покедова, {props.name}!</Text>
  </View>
  );
}

function SetName(text) {
    Alert.alert('Тебя зовут '+text+'?')
}
// const Show=(props)=>{
//
//     return (<View style={styles.container}> </View>);
// };
//
// export default Show;

//Список с товарами
function ShowList() {
    return (
        <View style={styles.container}>
            {/*<StatusBar backgroundColor="lightblue" />*/}
            <Image
                source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
                style={{width: 80, height: 80}}
            />
            <Text style={styles.text}>Дратути, настройки!</Text>
            <TextInput
                style={{
                    height: 40,
                    width:150,
                    borderColor: 'white',
                    borderWidth: 0,
                    color: 'lightgrey'
                }}
                //defaultValue={name}
                //onChangeText={text => name=text}
            />
            <Button
                title="Тыкни в меня!"
                //onPress={() => SetName(name)}
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: 'black'
                }}
            />
            <Text style={styles.text}>Покедова, настройки!</Text>
        </View>
    );
}

//Настройки
function ShowSettings() {
    return (
    <View style={styles.container}>
        {/*<StatusBar backgroundColor="lightblue" />*/}
        <Image
            source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
            style={{width: 80, height: 80}}
        />
        <Settings value={666+33}/>
        <TestFunc name='Костя'/>
        <Text style={styles.text}>Дратути, настройки!</Text>
        <TextInput
            style={{
                height: 40,
                width:150,
                borderColor: 'white',
                borderWidth: 0,
                color: 'lightgrey'
            }}
            //defaultValue={name}
            //onChangeText={text => name=text}
        />
        <Button
            title="Тыкни в меня!"
            //onPress={() => SetName(name)}
            style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                backgroundColor: 'black'
            }}
        />
        <Text style={styles.text}>Покедова, настройки!</Text>
    </View>
    );
}

//Отслеживаемые товары
// let goods = {
//     url:
//     image:
//     image_address:
//     amount_beg:
//     amount_cur:
//     amount_field:
//     date_add:
//     date_upd:
// }

//Подробности о товаре с историей
function ShowDetails(goods) {
    return (
        <View style={styles.container}>
            {/*<StatusBar backgroundColor="lightblue" />*/}
            <Image
                source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
                style={{width: 80, height: 80}}
            />
            <Text style={styles.text}>Дратути, настройки!</Text>
            <TextInput
                style={{
                    height: 40,
                    width:150,
                    borderColor: 'white',
                    borderWidth: 0,
                    color: 'lightgrey'
                }}
                //defaultValue={name}
                //onChangeText={text => name=text}
            />
            <Button
                title="Тыкни в меня!"
                //onPress={() => SetName(name)}
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: 'black'
                }}
            />
            <Text style={styles.text}>Покедова, настройки!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
      color : 'white'
  }
});


