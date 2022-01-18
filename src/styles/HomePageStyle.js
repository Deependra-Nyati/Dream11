import {StyleSheet} from 'react-native';
import { responsiveHeight, responsiveWidth } from '../utils/Responsive';
import * as Colors from '../utils/colors'
const style=StyleSheet.create({
    Parent:{
        backgroundColor:Colors.VERY_LIGHT_GREY
    },
    Header:{
        alignItems:"center",
        flexDirection:"row",
        height:responsiveHeight(10),
        width:responsiveWidth(100),
        // borderWidth:5,
        // borderColor:Colors.BLACK,
        backgroundColor:Colors.PRIMARY_COLOR
    },
    Dream11Image:{
        marginLeft:130,
        height:30,
        width:30
    },
    TextDream11:{
        marginLeft:5,
        fontSize:20,
        fontWeight:"bold",
        color:Colors.WHITE
    },
    Notification:{
        marginLeft:30,
    },
    Balance:{
        marginLeft:5
    },
    Header1:{
        flexDirection:"row",
        height:responsiveHeight(10),
        width:responsiveWidth(100),
        // borderWidth:5,
        // borderColor:Colors.BLACK

    },
    // random:{
    //     borderWidth:5,
    //     borderColor:Colors.BLACK
    // },
    CricketWithIconParent:{
        // borderWidth:5,
        // borderColor:Colors.BLACK,
            marginLeft:150
    },
    CricketIcon:{
          marginLeft:8
    },
    Cricket:{
        color:Colors.PRIMARY_COLOR,
        marginLeft:0
    },
    
    FootBallIcon:{
          marginLeft:30
    },
    FootBall:{
        color:Colors.PRIMARY_COLOR,
        marginLeft:20
    },

    Images:{
        height:responsiveHeight(13),
        width:responsiveWidth(100),
        // borderWidth:5,
        // borderColor:Colors.BLACK
    },

    MatchPage:{
        height:responsiveHeight(54),
        width:responsiveWidth(100),
        // borderWidth:5,
        // borderColor:Colors.BLACK
    },
    UpcomingMatches:{
        margin:10,
        fontSize:26,
        fontWeight:"bold"
    },
    MatchButton:{
        margin:20,
        backgroundColor:Colors.WHITE
    },
    MatchName:{
        margin:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    MatchesTextChild:{
        margin:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },

    TeamImageWithText:{
        alignItems:"center",
            flexDirection:"row"
    },
    TeamImage:{
        
        height:20,
        width:20
    },
    MatchImageChild:{
        margin:10,
        marginTop:0,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    
    PrizeWithLiveStream:{
            flexDirection:"row",
            margin:0,
            backgroundColor:"#D3D3D3",
            justifyContent:"space-between"
    },
    Mega:{
        fontSize:20,
        alignSelf:"center",
        color:"green",
        fontWeight:"bold",
        borderColor:"green",
        borderWidth:1
    },
    Footer:{
        flexDirection:"row",
        height:responsiveHeight(10),
        width:responsiveWidth(100),
        // borderWidth:5,
        // borderColor:Colors.BLACK,
        alignItems:"center",
        justifyContent:"space-between"

    },
    
})

export default style;