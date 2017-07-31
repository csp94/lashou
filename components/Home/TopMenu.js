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
    ScrollView
} from 'react-native';

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var TopMenu = React.createClass({
    getDefaultProps:function(){
        return {duration:2000}
    },
    getInitialState:function () {
      return {
          index:0
      }
    },
    componentDidMount:function(){
        this.startTimer();
    },
    render:function(){
        return (
            <View style={TopMenuStyle.container}>
                <ScrollView pagingEnabled={true} horizontal={true} style={TopMenuStyle.scrollStyle}
                            showsHorizontalScrollIndicator={false} onMomentumScrollEnd={this.scrollEnd}
                ref="scroll" onScrollBeginDrag={this.beginDrag} onScrollEndDrag={this.endDrag}>
                    <View style={{width:width}}>
                        <Image source={require("../../images/1490751737_zhuanti.jpg")} style={TopMenuStyle.iconStyle}/>
                    </View>
                    <View style={{width:width}}>
                        <Image source={require("../../images/1499995387_zhuanti.jpg")} style={TopMenuStyle.iconStyle}/>
                    </View>
                </ScrollView>
                <View style={TopMenuStyle.indicatorStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    renderIndicator:function () {
       var arr = [];
       var color;
       for(var i=0;i<2;i++){
            if(this.state.index==i){
                color={backgroundColor:"orange"}
            }else{
                color={backgroundColor:"#fff"}
            }
           arr.push(<View key={i} style={[TopMenuStyle.rowStyle,color]}></View>)
       }
       return arr;
    },
    scrollEnd:function (e) {
        var x = e.nativeEvent.contentOffset.x;
        var index = x/width;
        this.setState({
            index:index
        })
    },
    startTimer:function () {
        var scroll = this.refs.scroll;
        var that = this;
        this.timer = setInterval(function () {
            var index = that.state.index;
            index++;
            index%=2;
            scroll.scrollTo({x:index*width,y:0,animated:true});
            that.setState({
                index:index
            })
        },this.props.duration)
    },
    beginDrag:function () {
        clearInterval(this.timer);
    },
    endDrag:function () {
        this.startTimer();
    }
});
var TopMenuStyle = StyleSheet.create({
    container:{
      position:"relative",
      height:150
    },
    scrollStyle:{
        width:width,
        height:150
    },
    iconStyle:{
        width:width,
        height:150,
        resizeMode:'contain'
    },
    indicatorStyle:{
        position:"absolute",
        bottom:20,
        width:width,
        flexDirection:"row",
        justifyContent:"center"
    },
    rowStyle:{
        width:10,
        height:10,
        borderRadius:10,
        backgroundColor:"red",
        marginLeft:10
    }
})
module.exports=TopMenu;

