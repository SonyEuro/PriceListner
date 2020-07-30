import React, {Component} from 'react';

import {View} from 'react-native';
import {FlatList, SafeAreaView, Text} from "react-native-web";
import Product from "./Product";

class ListProducts extends Component{

    constructor(props) {
        super(props);

        this.state={
            numToRender: 10,
            products: this.props.listProducts,
        };
        this.renderProducts=this.renderProducts.bind();
    }

    renderProducts = ({item})=>(
        <Product product={item}/>
    );

    render() {
        return(
            <View>
                <SafeAreaView>
                    <FlatList
                        data={this.state.products} renderItem={this.renderProducts} keyExtractor={product => product.uuid}
                        initialNumToRender={this.state.numToRender} maxToRenderPerBatch={this.state.numToRender}
                    />
                </SafeAreaView>

            </View>
        );
    }

}

export default ListProducts;
