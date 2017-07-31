/**
 * Created by win8 on 14/7/2017.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var datas = require("../../localData/data6.json").data;
var Ads = React.createClass({
    getInitialState:function () {
        return {
            index:0
        }
    },
    render:function(){
        return (
            <View style={AdsStyle.container}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} pagingEnabled={true}
                            style={AdsStyle.scrollViewStyle} onMomentumScrollEnd={this.scrollEnd}>
                    {this.renderscroll()}
                </ScrollView>
                <View style={AdsStyle.indicatorStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    renderscroll:function () {
        {/*准备两个子View*/}
        var arr = [];
        for(var i=0;i<datas.length;i++){
            var data = datas[i];
            arr.push(<View key={i} style={AdsStyle.childStyle}>{this.renderChild(data)}</View>)
        }
        return arr;
    },
    renderChild:function (data) {
        var arr = [];
        for(var i=0;i<data.length;i++){
            var dt = data[i];
            arr.push(
                <View style={AdsStyle.boxStyle} key={i}>
                    <Image source={{uri:dt.image}} style={AdsStyle.iconStyle}/>
                    <Text>{dt.title}</Text>
                </View>
            )
        }
        return arr;
    },
    renderIndicator:function () {
        var arr = [];
        var color;
        for(var i=0;i<2;i++){
            if(this.state.index==i){
                color = {backgroundColor:"orange"}
            }else{
                color= {backgroundColor:"#666"}
            }
            arr.push(<View key={i} style={[AdsStyle.rowStyle,color]}></View>)
        }
        return arr;
    },
    scrollEnd:function (e) {
        var x = e.nativeEvent.contentOffset.x;
        var index = x/width;
        this.setState({
            index:index
        })
    }
});

var AdsStyle = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    },
    scrollViewStyle: {
        width:width,
        marginTop:10
    },
    childStyle:{
        width:width,
        height:200,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around"
    },
    boxStyle:{
        alignItems:"center",
        width:(width/4),
        height:width/4,
        marginTop:8
    },
    iconStyle:{
        width:(width/5),
        height:width/5
    },
    indicatorStyle:{
        width:width,
        height:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    rowStyle:{
        width:10,
        height:10,
        borderRadius:5,
        marginLeft:10
    }
})
module.exports=Ads;

