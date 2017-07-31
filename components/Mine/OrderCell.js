/**
 * Created by win8 on 14/7/2017.
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

var OrderCell = React.createClass({
    render:function(){
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={OrderCellStyle.container}>
                    <Image source={{uri:this.props.icon}} style={OrderCellStyle.IconStyle}/>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

var OrderCellStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-around",
        alignItems:'center'
    },
    IconStyle:{
        width:20,
        height:30,
        resizeMode:"contain"
    }
})
module.exports=OrderCell;

