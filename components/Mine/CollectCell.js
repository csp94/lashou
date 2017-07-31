/**
 * Created by win8 on 14/7/2017.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

var CollectCell = React.createClass({
    render:function(){
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={CollectCellStyle.container}>
                    {this.renderTop()}
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    },
    renderTop:function () {
        if(this.props.num!==2){
            return (
                <Text>0</Text>
            )
        }else{
            return (
                <Image source={{uri:this.props.icon}} style={CollectCellStyle.iconStyle}/>
            )
        }
    }
});

var CollectCellStyle = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    iconStyle:{
        width:15,
        height:15,
        resizeMode:"contain"
    }
})
module.exports=CollectCell;

