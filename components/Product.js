import React, {Component} from 'react';

import {View} from 'react-native';
import {Text} from "react-native-web";

class Product extends Component{

    constructor(props) {
        super(props);

        this.state={
        };
    }

    render() {
        return(
            <View>
                <Text>{this.props.title}</Text>
            </View>
        );
    }

}

export default Product;