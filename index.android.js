/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Navigator from 'react-native-deprecated-custom-components';
var Home = require("./components/Home/Home.js");
var Surrouding = require("./components/Surrounding/Surrounding.js");
var Shop = require("./components/Shop/Shop.js");
var Mine = require("./components/Mine/Mine.js");
var lashou = React.createClass({
    getInitialState:function(){
        return {
            selectedTab:"Home"
        };
    },
    render:function(){
        return (
            <TabNavigator>
                {/*首页*/}
                {this.renderTabItem('Home',"首页","ic_tab_artists_unselected","ic_tab_artists_selected",Home)}
                {/*周边*/}
                {this.renderTabItem('Surrouding',"周边","ic_tab_albums_unselected","ic_tab_albums_selected",Surrouding)}
                {/*商城*/}
                {this.renderTabItem('Shop',"商城","ic_tab_playlists_unselected","ic_tab_playlists_selected",Shop)}
                {/*我的*/}
                {this.renderTabItem('Mine',"我的","ic_tab_songs_unselected","ic_tab_songs_selected",Mine)}
            </TabNavigator>
        );
    },
    renderTabItem:function(selectedTab,title,uri,selUri,ComPonent){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab ===selectedTab }
                title={title}
                renderIcon={() => <Image source={{uri:uri}} style={myStyle.imgStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selUri}} style={myStyle.imgStyle}/>}
                onPress={() => this.setState({ selectedTab: selectedTab })}
                selectedTitleStyle={myStyle.selectedtxt}>
                <Navigator.Navigator
                    initialRoute={{name: selectedTab, component:ComPonent}}
                    configureScene={(route) => {
                        return Navigator.Navigator.SceneConfigs.HorizontalSwipeJump;
                    }}
                    renderScene={(route,navigator)=>{
                        var CP = route.component;
                        return <CP {...route.passProps} navigator={navigator}/>
                    }}/>
            </TabNavigator.Item>
        );
    }
});
var myStyle = StyleSheet.create({
    imgStyle:{
        width:30,
        height:30
    },
    selectedtxt:{
        color:"orange",
        fontWeight:"bold"
    }
});


AppRegistry.registerComponent('lashou', () => lashou);
