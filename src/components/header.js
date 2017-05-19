// import libraries for making a components
import React from 'react';
import { Text, View } from 'react-native';


//make a component


const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#F8F8F8',
        borderBottomWidth: 2,
       // borderRadius: 30,
        height: 60,
        paddingTop: 10,
        opacity: 0.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'

    },

    textStyle: {

        fontSize: 30,
        //backgroundColor: '#F8F8F8'

    }
};


//make the component available to other parts of the app
export default Header;
