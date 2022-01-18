import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {HomePageStyle} from '../../styles/HomePageStyle';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import STYLES from '../../../src/styles/HomePageStyle';
// require('../atoms/Images/Ireland_Cricket.png')
//require('../atoms/Images/SA_cricket.png')
const SingleMatch=(props)=>
{
    const Icon=MaterialCommunityIcons;
    return(
<TouchableOpacity 
   onPress = {() => props.navigation.navigate('ContestPage')}
  style={STYLES.MatchButton}>
              <View style={STYLES.Match}>
                <View style={STYLES.MatchName}>
                <Text style={{fontSize:20}}>{props.Name}</Text>
                <Icon name={props.IconName} size={20} style={{alignSelf:"center"}}/>
                </View>
                <View>
                  <View style={STYLES.MatchesTextChild}> 

                     <Text style={{fontSize:20}}>{props.TeamName1}</Text>                 
                     <Text style={{fontSize:20}}>{props.TeamName2}</Text>
                     
                  </View>

                  <View style={STYLES.MatchImageChild}>
                      <View style={STYLES.TeamImageWithText}>
                      <Image source= {props.Image1} style={STYLES.TeamImage}></Image>
                      <Text style={{fontWeight:"bold",fontSize:20}}>{props.TeamName1Short}</Text>
                      </View>
                      <View>
                        <Text style={{color:"red",fontSize:20}}>{props.Time}</Text>
                      </View>
                      <View style={STYLES.TeamImageWithText}>
                      <Text style={{fontWeight:"bold",fontSize:20}}>{props.TeamName2Short}</Text>
                      <Image source={props.Image2} style={STYLES.TeamImage}></Image>
                      
                      </View>
                  </View>
                  <View style={STYLES.PrizeWithLiveStream}>
                    <View style={{flexDirection:"row"}}>
                    <Text style={STYLES.Mega}>{props.Mega}</Text>
                    <Text style={{fontSize:20}}>{props.Prize}</Text>
                    </View>
                    <View>
                      <Icon name="credit-card-marker-outline"size={25} style={{marginRight:10}}></Icon>
                    </View>
                  </View>
                  
                </View>

              </View>
              </TouchableOpacity>
    );}

