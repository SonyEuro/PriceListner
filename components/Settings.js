import React, {Component} from 'react';
import Text from "react-native-web/dist/exports/Text";
//import Checkbox from 'primereact/checkbox';
import View from "react-native-web/dist/exports/View";
import Checkbox from "react-native-web/dist/exports/Checkbox";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };

    }

    render() {
        return (
            <View>
                <Text>Settings {this.props.value}</Text>
                <Checkbox>Але?</Checkbox>
            </View>
        );
    }
}

export default Settings;
