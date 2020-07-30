import React, {Component} from 'react';

import {View} from 'react-native';
import {Text} from "react-native-web";

class Product extends Component{

    constructor(props) {
        super(props);

        this.state={
            product:this.props.product
        };
    }

    render() {
        return(
            <View>
                <Text>{"Адрес: "+this.state.product.url}</Text>
                <Text>{"Цена: "+this.state.product.price}</Text>
            </View>
        );
    }

}

export default Product;