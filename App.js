import React, {Component} from 'react';

import {View} from 'react-native';
import ListProducts from "./components/ListProducts";

class App extends Component{
    render() {
        return(
            <View>
                <ListProducts
                    listProducts={}
                />
            </View>
        );
    }

}

export default App;
