/**
 * Created by win8 on 15/7/2017.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var DeliciousCell = React.createClass({
    render:function(){
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={DeliciousCellStyle.container}>
                    <Image source={{uri:this.props.icon}} style={DeliciousCellStyle.IconStyle}/>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

var DeliciousCellStyle = StyleSheet.create({
    container:{
        height:50,
        justifyContent:'space-between'
    },
    IconStyle:{
        width:25,
        height:25,
        resizeMode:"contain"
    }
})
module.exports=DeliciousCell;

