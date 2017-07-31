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

var KindCell = React.createClass({
    render:function(){
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={KindCellStyle.container}>
                    <View style={[KindCellStyle.ImgStyle,{backgroundColor:this.props.color}]}>
                        <Image source={{uri:this.props.icon}} style={KindCellStyle.IconStyle}/>
                    </View>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

var KindCellStyle = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        alignItems:'center'
    },
    ImgStyle:{
      width:50,
      height:50,
      borderRadius:25,
      alignItems:"center",
      justifyContent:"center"
    },
    IconStyle:{
        width:30,
        height:30,
        resizeMode:"contain",
    }
})
module.exports=KindCell;

