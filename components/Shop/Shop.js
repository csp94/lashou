import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    ListView
} from 'react-native';

var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var KindCell = require("./KindCell.js");

var data = require("../../localData/data3.json");
var src = data.image;
var datas = data.datas;
var Shop = React.createClass({
    getInitialState:function () {
        var ds = new ListView.DataSource({
            rowHasChanged:function (r1,r2) {
                return r1!==r2;
            }
        });
        return {
            ds:ds.cloneWithRows(datas)
        }
    },
    render:function(){
        return (
            <View style={{backgroundColor:"#F0EFF5",flex:1}}>
               <ScrollView showsVerticalScrollIndicator={true}>
                   <View style={shopStyle.container}>
                       <Image source={{uri:src}}
                       style={{width:width,height:140,resizeMode:"cover"}}/>
                       {this.renderTop()}
                       <View style={shopStyle.search}>
                           <Image source={{uri:"search"}} style={shopStyle.searchStyle}/>
                       </View>
                   </View>
                   {/*分类*/}
                   <View style={shopStyle.kindStyle}>
                       {this.renderKind()}
                   </View>
                   {/*商品*/}
                       <ListView
                           dataSource={this.state.ds}
                           renderRow={this.rendeRow}
                           contentContainerStyle={shopStyle.listViewStyle}
                       />
               </ScrollView>
            </View>
        );
    },
    renderTop:function () {
        return (
                <View style={shopStyle.putStyle}>
                    <TextInput placeholder="女装" placeholdertTextColor="#666" underlineColorAndroid="transparent"
                               style={shopStyle.inputStyle}/>
                </View>
        );
    },
    renderKind:function () {
        var arr=[];
        var titles = ["分类","购物车","我的商城","商城资产"];
        var icons = ["shoping_list_style_list","xinglijicun_9","shangdian_23","icon_my_comment"];
        var colors = ["#FC8C75","#48CFAE","#4FC0E8","#AC92ED"]
        for(var i=0;i<4;i++){
            arr.push(<KindCell key={i} icon={icons[i]} title={titles[i]} color={colors[i]}/>)
        }
        return arr;
    },
    rendeRow:function (rowData) {
        return (
                <View style={shopStyle.contentStyle}>
                    <View style={shopStyle.contentTopStyle}>
                        <Image source={{uri:rowData.goods_image}} style={shopStyle.IonStyle}/>
                        <Text>{rowData.goods_name}</Text>
                    </View>
                    <View style={shopStyle.boxStyle}>
                        <Text style={shopStyle.priceStyle}>￥{rowData.goods_promotion_price}</Text>
                    </View>
                </View>
        );
    }

});

var shopStyle = StyleSheet.create({
    container:{
        backgroundColor:"#0ff",
        position:"relative"
    },
    putStyle:{
        position:"absolute",
        bottom:10,
        left:10
    },
    inputStyle:{
        width:250,
        height:30,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor:"#FDE6E6",
        paddingLeft:25
    },
    search:{
        position:"absolute",
        bottom:15,
        left:15
    },
    searchStyle:{
        width:20,
        height:20
    },
    kindStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        height:80,
        backgroundColor:'#fff'
    },
    contentStyle:{
        width:width/2-10,
        backgroundColor:"#FFF",
        marginBottom:10,
        marginLeft:5,
        marginRight:5
    },
    contentTopStyle:{
      height:190
    },
    IonStyle:{
      width:width/2-10,
      height:130,
      resizeMode:"cover"
    },
    boxStyle:{
        marginTop:5,
        height:30
    },
    priceStyle:{
        color:"red"
    },
    listViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        marginTop:10
    }
});
module.exports=Shop;