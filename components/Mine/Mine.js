import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var CollectCell = require("./CollectCell.js");
var OrderCell = require("./OrderCell.js");
var MineCell = require("./MineCell.js");
var Mine = React.createClass({
    render:function(){
        return (
            <View style={mineStyle.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={{uri:"my_accountinfo_bg"}} style={mineStyle.IconStyle}>
                        <View>
                            <Text style={mineStyle.textColor}>Hello,你好</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.6}>
                            <View style={mineStyle.denlu}>
                                <Text style={mineStyle.textColor}>登录/注册</Text>
                            </View>
                        </TouchableOpacity>
                    </Image>
                    <View style={mineStyle.contentStyle}>
                        {/*拉手券*/}
                       <View style={mineStyle.handStyle}>
                           {this.renderCollect()}
                       </View>
                        {/*我的订单*/}
                        {this.rendermenu()}
                        <View style={mineStyle.orderStyle}>
                            {this.renderorder()}
                        </View>
                        {/*我的资产*/}
                        {this.renderRich()}
                        <View style={mineStyle.propertyStyle}>
                            {this.renderproperty()}
                        </View>
                        {/*每日推荐*/}
                        {this.renderRecommend()}
                    </View>
                </ScrollView>
            </View>
        );
    },
    renderCollect:function(){
        var arr=[];
        var titles = ["拉手券","收藏","最近浏览"];
        for(var i=0;i<3;i++){
            arr.push(<CollectCell key={i} title={titles[i]}/>)
        }
        return arr;
    },
    rendermenu:function () {
        return (
            <View style={mineStyle.menuStyle}>
                <Image source={{uri:"img_my_order"}} style={mineStyle.menuIconStyle}/>
                <Text>我的订单</Text>
            </View>
        )
    },
    renderorder:function () {
        var arr =[];
        var icons = ["img_unpaided","img_paied","img_uncommented","icon_shop_order"];
        var titles = ["代付款","已付款","待评价","商城订单"];
        for(var i=0;i<4;i++){
            arr.push(<OrderCell key={i} icon={icons[i]} title={titles[i]}/>)
        }
        return arr;
    },
    renderRich:function () {
        return (
            <View style={mineStyle.richStyle}>
                <Image source={{uri:"img_my_asset"}} style={mineStyle.richIconStyle}/>
                <Text>我的资产</Text>
            </View>
        )
    },
    renderproperty:function () {
        var arr=[];
        var titles = ["余额提现","抵用券","商城资产"];
        var num;
        for(var i=0;i<3;i++){
            if(i==2){
                num = 2;
            }
            arr.push(<CollectCell key={i} title={titles[i]} icon="icon_shop_assets" num={num}/>)
        }
        return arr;
    },
    renderRecommend:function () {
        return (
            <View>
                <MineCell leftIcon="user_evevyday_tuijian" title="每日推荐" rightIcon="arrow_right_my_gray"
                          new="news_tuijian" style={mineStyle.Margin}/>
                <View style={mineStyle.Margin}>
                    <MineCell leftIcon="icon_my_comment" title="我的评价" rightIcon="arrow_right_my_gray"
                    />
                    <MineCell leftIcon="img_mysurprise" title="我的抽奖" rightIcon="arrow_right_my_gray"
                              num="0" />
                    <MineCell leftIcon="icon_open_store" title="我是商家" rightIcon="arrow_right_my_gray"
                    />
                </View>
                <MineCell leftIcon="icon_setting" title="设置" rightIcon="arrow_right_my_gray"
                          style={mineStyle.Margin}/>
                <View style={mineStyle.Margin}>
                    <MineCell leftIcon="icon_my_comment" title="我的评价" rightIcon="arrow_right_my_gray"
                    />
                    <MineCell leftIcon="img_mysurprise" title="我的抽奖" rightIcon="arrow_right_my_gray"
                              num="0" />
                    <MineCell leftIcon="icon_open_store" title="我是商家" rightIcon="arrow_right_my_gray"
                    />
                </View>
            </View>
        )
    }
});
var mineStyle = StyleSheet.create({
    container:{
       flex:1
    },
    IconStyle:{
        width:width,
        height:100,
        alignItems:"center",
        justifyContent:"center"
    },
    textColor:{
        color:"#fff",
        marginBottom:10
    },
    denlu:{
        width:150,
        height:30,
        backgroundColor:"rgba(0,0,0,0.3)",
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
    },
    contentStyle:{
        flex:1,
        backgroundColor:"#F0EFF5"
    },
    handStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"#fff",
        marginTop:2,
        paddingTop:10,
        paddingBottom:10
    },
    menuStyle:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#fff",
        marginTop:10
    },
    menuIconStyle:{
        width:20,
        height:20,
        marginLeft:10,
        marginRight:10
    },
    orderStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:'center',
        backgroundColor:"#fff",
        marginTop:2
    },
    richStyle:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#fff",
        marginTop:10
    },
    richIconStyle:{
        width:20,
        height:20,
        resizeMode:'contain',
        marginLeft:10,
        marginRight:10
    },
    propertyStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"#fff",
        marginTop:2,
        paddingTop:10,
        paddingBottom:10,
        marginBottom:10
    },
    Margin:{
        marginTop:10,
        marginBottom:10
    }
});
module.exports=Mine;