import React, {Component} from 'react';

import {View} from 'react-native';
import {FlatList, SafeAreaView} from "react-native-web";
import Product from "./Product";

class ListProducts extends Component{

    constructor(props) {
        super(props);

        this.state={
            numToRender:10,
            products:this.props.listProducts,
        };
    }

    renderProducts = ({product})=>(
        <Product title={product.title}/>
    );


    render() {
        return(
            <View>
                <SafeAreaView>
                    <FlatList
                        data={this.state.products} renderItem={renderProducts} keyExtractor={item => item.id}
                        initialNumToRender={this.state.numToRender} maxToRenderPerBatch={this.state.numToRender}
                    />
                </SafeAreaView>

            </View>
        );
    }

}

export default ListProducts;
