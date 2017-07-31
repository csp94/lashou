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

var MineCell = React.createClass({
    render:function(){
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={MineCellStyle.container}>
                    {this.renderLeft()}
                    {this.renderRight()}
                </View>
            </TouchableOpacity>
        );
    },
    renderLeft:function () {
        return (
            <View style={MineCellStyle.leftStyle}>
                <Image source={{uri:this.props.leftIcon}} style={[MineCellStyle.IconStyle,{marginLeft:10}]}/>
                <Text style={{marginLeft:10}}>{this.props.title}</Text>
            </View>
        )
    },
    renderRight:function () {
        if(this.props.new){
            return (
                <View style={MineCellStyle.rightStyle}>
                    <Image source={{uri:this.props.new}} style={MineCellStyle.newStyle} />
                    <Image source={{uri:this.props.rightIcon}} style={MineCellStyle.IconStyle}/>
                </View>
            )
        }
        else if(this.props.num){
            return (
                <View style={MineCellStyle.rightStyle}>
                    <Text>{this.props.num}</Text>
                    <Image source={{uri:this.props.rightIcon}} style={MineCellStyle.IconStyle}/>
                </View>
            )
        }else{
            return (
                <View>
                    <Image source={{uri:this.props.rightIcon}} style={MineCellStyle.IconStyle}/>
                </View>
            )
        }
    }
});

var MineCellStyle = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#fff",
        height:30,
        marginBottom:2
    },
    newStyle:{
        width:30,
        height:30,
        resizeMode:"contain"
    },
    IconStyle:{
        width:20,
        height:20,
        resizeMode:"contain"
    },
    leftStyle:{
        flexDirection:"row",
        alignItems:"center"
    },
    rightStyle:{
        flexDirection:"row",
        alignItems:"center"
    }
});

module.exports=MineCell;

