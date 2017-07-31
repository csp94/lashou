import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    ListView
} from 'react-native';

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var hotData = require('../../localData/data5.json').result.center_banner;
var haibao =  require('../../localData/data5.json').result.center_slip_banner;
var LoveData = require("../../localData/data4.json").result.goodlist;

var TopMenu = require("./TopMenu.js");
var Ads = require("./Ads.js");
var HotList = require("./HotList.js");
var Home = React.createClass({
    getInitialState:function () {
      var ds = new ListView.DataSource({
          rowHasChanged:function (r1,r2) {
              return r1!==r2
          }
      }) ;
      return {
          dataSource:ds.cloneWithRows(LoveData)
      }
    },
    render:function(){
        return (
            <View>
                {/*创建导航条*/}
                {this.renderNav()}
                <View style={HomeStyle.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/*左右滑动的广告*/}
                        <TopMenu />
                        {/*小广告*/}
                        <Ads />
                        {/*冰封高温*/}
                        {this.renderHot()}
                        {/*海报*/}
                        <Image source={{uri:haibao[0].img_mid}} style={{width:width,height:100,marginTop:10,
                            marginBottom:10}}/>
                        {/*猜你喜欢头部*/}
                        {this.rederLoveTop()}
                        {/*猜你喜欢内容*/}
                        <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        />
                       <View style={{justifyContent:'center',alignItems:'center',marginBottom:30,marginTop:10}}>
                           <Text style={{height:150}}>查看全部团购</Text>
                       </View>
                    </ScrollView>
                </View>
            </View>
        );
    },
    renderNav:function () {
        return (
           <View style={HomeStyle.navContainer}>
               <TouchableOpacity activeOpacity={0.6}>
                   <Text style={{color:"#fff"}}>厦门</Text>
               </TouchableOpacity>
               <Image source={{uri:"arrow_down_gray"}} style={{width:15,height:15}}/>
               <TextInput placeholder="输入商品名.品类或商圈..." placeholderTextColor="#fff"
                          underlineColorAndroid="transparent" style={HomeStyle.inputStyle}/>
               <TouchableOpacity activeOpacity={0.6}>
                   <Image source={{uri:"nav_icon_scan_nor"}}  style={{width:15,height:20,resizeMode:"contain"}}/>
               </TouchableOpacity>
               <TouchableOpacity activeOpacity={0.6}>
                   <Image source={{uri:"icon_msg"}}  style={{width:15,height:15,resizeMode:"contain"}}/>
               </TouchableOpacity>
           </View>
        )
    },
    renderHot:function () {
        return (
            <View style={HomeStyle.hotStyle}>
                {this.hotLeft()}
                {this.hotRight()}
            </View>
        )
    },
    hotLeft:function () {
       return (
           <View>
               <TouchableOpacity activeOpacity={0.6} onPresss={this.press}>
                    <Image source={{uri:hotData[0].img_mid2}} style={{width:width/2,height:150}}/>
               </TouchableOpacity>
            </View>
       );
    },
    hotRight:function () {
        return (
            <View style={HomeStyle.hotRightStyle}>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image source={{uri:hotData[1].img_mid}} style={{width:width/2,height:75,marginBottom:2}}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image source={{uri:hotData[2].img_mid}} style={{width:width/2,height:75}}/>
                </TouchableOpacity>
            </View>
        )
    },
    rederLoveTop:function () {
        return (
            <View>
                {this.renderLoveNav()}
            </View>
        )
    },
    renderLoveNav:function () {
        return (
            <View style={HomeStyle.NavStyle}>
                <Image  source={{uri:"guess_youlike_left"}} style={{width:15,height:15}}/>
                <Text style={{marginLeft:10,marginRight:10}}>猜你喜欢</Text>
                <Image  source={{uri:"guess_youlike_right"}} style={{width:15,height:15}}/>
            </View>
        )
    },
    renderRow:function (rowData) {
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={HomeStyle.LoveStyle}>
                    <View>
                        <Image source={{uri:rowData.images[1].image}} style={{width:120,height:150,resizeMode:"contain"}}/>
                    </View>
                    <View>
                        <View style={HomeStyle.LineOne}>
                            <Text style={{fontWeight:"bold"}}>{rowData.product}</Text>
                            <Text>{rowData.new_cat/1000}km</Text>
                        </View>
                        <Text style = {HomeStyle.widthCal} numberOfLines={1}>{rowData.short_title}</Text>
                        <View style={HomeStyle.lineThree}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:"red",marginLeft:3}}>￥{rowData.price}</Text>
                                <Text style={{textDecorationLine:'line-through',marginLeft:3}}>{rowData.value}</Text>
                            </View>
                            <Text style={{marginRight:5}}>已售 {rowData.bought}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },
    jump:function () {
        var obj = {name:"xx"};
        this.props.navigator.push({
            component:HotList,
            title:"HotList",
            passProps:obj
        });
    }
});

var HomeStyle = StyleSheet.create({
    container:{
        backgroundColor:"#F0EFF5"
    },
    navContainer:{
        flexDirection:'row',
        backgroundColor:"#ccc",
        justifyContent:"space-around",
        alignItems:'center',
        marginTop:10
    },
    inputStyle:{
        width:200,
        height:30,
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:23,
        backgroundColor:"#ccc"
    },
    hotStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:'center',
        height:180
    },
    NavStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        height:30
    },
    LoveStyle:{
        marginBottom:2,
        flexDirection:"row",
        alignItems:'center',
        backgroundColor:'#fff'
    },
    LineOne:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginBottom:5
    },
    lineThree:{
        flexDirection:'row',
        justifyContent:"space-between"
    },
    widthCal:{
        width:width- (13+42+5+45+11+18+10)
    }
});
module.exports=Home;