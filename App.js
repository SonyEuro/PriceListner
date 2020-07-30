import React, {Component} from 'react';
import {View} from 'react-native';
import ListProducts from "./components/ListProducts";
import data from "./data.json";

class App extends Component{

    render() {
        return(
            <View>
                <ListProducts
                    listProducts={data.products}
                />
            </View>
        );
    }
}

export default App;
