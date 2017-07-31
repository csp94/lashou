import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ListView
} from 'react-native';
var Dimensions = require("Dimensions");
var width = Dimensions.get("window").width;
var DeliciousCell = require("./DeliciousCell.js");
var FootCell = require("./FootCell.js");
var goodDatas = require("../../localData/data7.json").result.fd_list;

var Surrounding = React.createClass({
    getInitialState:function () {
        var ds = new ListView.DataSource({
            rowHasChanged:function (r1,r2) {
                return r1!==r2
            }
        });
        return {
            dataSource:ds.cloneWithRows(goodDatas)
        }
    },
    render: function () {
        return (
            <View style={SurroundingStyle.container}>
                {/*顶部*/}
                {this.renderSearch()}
                {/*品美食*/}
                <View style={SurroundingStyle.DeliciousStyle}>
                    {this.renderDelicious()}
                </View>
                {/*自助餐*/}
                {this.renderBuffet()}
                {/*主要内容*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },
    renderSearch: function () {
        return (
            <View style={SurroundingStyle.SearchStyle}>
                <TouchableOpacity activeOpacity={0.6}>
                    <View style={SurroundingStyle.SearchLeftStyle}>
                        <Image source={require("../../images/location_white.png")} style={{
                            width: 20, height: 20,
                            resizeMode: 'contain', marginLeft: 5
                        }}/>
                        <Text style={{color: "#fff", marginLeft: 5,fontSize:13}}>请手动定位</Text>
                    </View>
                </TouchableOpacity>
                <View style={SurroundingStyle.putStyle}>
                    <View style={SurroundingStyle.searchIconStyle}>
                        <Image source={require("../../images/home_search_white.png")} style={{width: 10, height: 10}}/>
                    </View>
                        <TextInput placeholder="搜索附近的商家.优惠..." placeholderTextColor="#fff"
                            underlineColorAndroid='transparent'    style={SurroundingStyle.inputStyle}/>
                </View>
            </View>
        )
    },
    renderDelicious:function () {
        var arr = [];
        var titles = ["品美食","玩翻天","找酒店","丽人吧","分类"];
        var icons = ["header_select_99","header_un_select_2","header_un_select_300","header_un_select_442",
            "header_un_select_1000"];
        for(var i=0;i<icons.length;i++){
            arr.push(<DeliciousCell key={i} title={titles[i]} icon={icons[i]}/>)
        }
        return arr;
    },
    renderBuffet:function () {
        return (
            <View style={{marginTop:5,backgroundColor:"#fff"}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.renderBuffetContent()}
                </ScrollView>
            </View>
        )
    },
    renderBuffetContent:function () {
        var arr = [];
        var titles = ["自助餐","火锅","蛋糕甜品","小吃快餐","干锅/香锅","咖啡/酒吧","代金券"];
        for(var i=0;i<7;i++){
            arr.push(
                <TouchableOpacity activeOpacity={0.6} key={i} >
                    <View style={SurroundingStyle.boxStyle}>
                        <Text>{titles[i]}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return arr;
    },
    renderRow:function (rowData) {
        return (
                <View style={{backgroundColor:"#fff",marginTop:5}}>
                    <TouchableOpacity activeOpacity={0.6}>
                        <View style={SurroundingStyle.headStyle}>
                            <View>
                                <Image source={{uri:rowData.goods_list[0].images[1].image}} style={SurroundingStyle.IconStyle}/>
                            </View>
                            <View style={SurroundingStyle.headRightStyle}>
                                <View style={SurroundingStyle.lineOne}>
                                    <View>
                                        <Text style={{fontWeight:"bold"}}>{rowData.fd_name}</Text>
                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                                        <Image source={{uri:"icon_groupnew"}} style={{width:15,height:15}}/>
                                        <Image source={{uri:"icon_couponse"}} style={{width:15,height:15}}/>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row',marginTop:15,flex:1}}>
                                    {this.renderStar()}
                                </View>
                                <View style={SurroundingStyle.lineThree}>
                                    <Text style={{fontSize:12}}>{rowData.new_cats_name}</Text>
                                    <View style={{flexDirection:"row"}}>
                                        <Text style={{fontSize:12}}>{rowData.zone_name}</Text>
                                        <Text style={{fontSize:12}}>{rowData.fd_id/1000}km</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={SurroundingStyle.footStyle}>
                        {this.renderfoot(rowData)}
                    </View>
                </View>
        )
    },
    renderStar:function () {
        var arr = [];
        for(var i=0;i<5;i++){
            arr.push(
                <View key={i} style={{marginLeft:3,marginRight:3}}>
                    <Image source={require("../../images/star_small.png")} style={{width:15,height:15}}/>
                </View>
            )
        }
        return arr;
    },
    renderfoot:function (rowData) {
        var arr = [];
        var data = rowData.goods_list;
        for(var i=0;i<data.length;i++){
            var dt = data[i];
            arr.push(<FootCell key={i} data={dt}/>)
        }
        return arr;
    }
});

var SurroundingStyle = StyleSheet.create({
    container:{
      backgroundColor:"#F0EFF5"
    },
    SearchStyle: {
        backgroundColor: "#FF7E1D",
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    SearchLeftStyle: {
        flexDirection: "row"
    },
    putStyle: {
        position: 'relative'
    },
    searchIconStyle: {
        position: "absolute",
        left:10,
        top:10,
        zIndex:2
    },
    inputStyle: {
        width: 150,
        height: 30,
        borderRadius: 25,
        backgroundColor: "#FF985D",
        fontSize:12,
        paddingLeft:25
    },
    DeliciousStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"#fff"
    },
    boxStyle:{
        width:width/4,
        height:20,
        justifyContent:'center',
        alignItems:"center"
    },
    IconStyle:{
        width:160,
        height:140,
        resizeMode:"contain"
    },
    headStyle:{
        flexDirection:"row"
    },
    lineOne:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:25,
        flex:1
    },
    lineThree:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1
    }
})
module.exports = Surrounding;