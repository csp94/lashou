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

var FootCell = React.createClass({
    render:function(){
        return (
           <View>
               <TouchableOpacity activeOpacity={0.6}>
                   <View style={FootCellStyle.container}>
                       <View style={{flexDirection:"row"}}>
                           <Text style={{color:"red",fontWeight:"bold",marginLeft:3}}>￥{this.props.data.price}</Text>
                           <Text style={{textDecorationLine:"line-through",color:"#666",marginLeft:3}}>{this.props.data.value}</Text>
                       </View>
                       <Text style={{fontSize:11}}>{this.props.data.product}</Text>
                       <View>
                           <Image source={{uri:"arrow_right"}} style={{width:15,height:15}}/>
                       </View>
                   </View>
               </TouchableOpacity>
           </View>
        );
    }
});
var FootCellStyle = StyleSheet.create({
    container:{
        flexDirection:"row",
        height:30,
        alignItems:"center",
        justifyContent:"space-around"
    }
})
module.exports=FootCell;

