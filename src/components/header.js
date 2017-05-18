// import libraries for making a components
import React from 'react';
import { Text, View } from 'react-native';


//make a component


const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums!</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F128F8',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#F31234',
        borderBottomWidth: 1,
        borderRadius: 30,
        height: 60,
        paddingTop: 50,
        opacity: 0.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
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
