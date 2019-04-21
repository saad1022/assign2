import React from "react";
import { View, Text, Button, Alert,Image ,StyleSheet} from "react-native";
import { createStackNavigator, createAppContainer ,createBottomTabNavigator, Drawer,createDrawerNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

//@Flow

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./img/profile.jpg')}
        style={{ width: 30, height: 30, marginRight:10,justifyContent:'flex-end'}}
      />
    );
  }
}






class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./img/profile.jpg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
      
    ),
    
  };

  render() {
    return (
      <View>

           
      
      <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>OBJECTIVE</Text>
      
<Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>To work in a respectable and reputable corporation and achieve the maximum opportunities.
In this view of following facts. If I will be get an opportunity to serve under you kind contrl, I would justify my selection. {'\n'}{'\n'}{'\n'}</Text>
         
    <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Resume Details"
      />    


     </View>

    );
  }
}


class SkillsScreen extends React.Component {
  static navigationOptions = {
    title: 'Skills',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'aquamarine' }}>
        <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>SKILLS:{'\n'}</Text>
        
        <Text>-> Microsoft Windows XP/7/10, Linux Ubuntu, Centos (Redhat)</Text>
        <Text>-> Microsoft Office 2007/10/16(Word/Excel/PowerPoint/Access)</Text>
        <Text>-> Computer Software / Hadware Knowledge</Text>
        <Text>-> Software Installation and Troubleshooting {'\n'}{'\n'}{'\n'}</Text>
        <Text>{'\n'}-> Fluent in Content Writing (Article, Book, etc.{'\n'}{'\n'}{'\n'}</Text>
     

     
     

        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      />
      
    
       
      </View>
    );
  }
}






class BioDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Personal Details',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'aquamarine', paddingLeft:10 }}>
         <Text style={{paddingTop:15,fontWeight:'bold', fontSize: 30}}>Personal Details:{'\n'}</Text>
      
        
        <Text>Phone Number: 03222857875</Text>

        <Text>Father Name: Nasir </Text>
        
        <Text>Religion: Islam {'\n'}{'\n'}{'\n'}</Text>
        <Text>Nationality: Pakistani {'\n'}{'\n'}{'\n'}</Text>
        

        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      />
      
    
       
      </View>
    );
  }
}


class ExperienceScreen extends React.Component {
  static navigationOptions = {
    title: 'Experience',
  };



  render() {
    return (
      
      <View>

      <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>EXPERIENCE:</Text>
      
      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>IT systeSoftwarem Support Engineer:</Text>  {'\n'}
      (Niga)  {'\n'}
      - IT Support And Web Developer, Grapic Designer  {'\n'}

      {'\n'}
      </Text>

      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>Computer Instructor:</Text>  {'\n'}
      - 15th April 2015 - 31st May 20118 (INFRA PROFESSIONAL TRAINING CENTER)  {'\n'}
      - Computer Instructor  and Other Office Related Work  {'\n'}

      {'\n'}
      </Text>

    

      

      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>Presentation Designs:</Text>  {'\n'}
      - Jan 2011 - Present (Upwork, Fiverr)  {'\n'}
      - Design corporate level presentations for meetings, conferences, webinars, courses, infographics, etc.  {'\n'}
      {'\n'}
      </Text>
         
      


        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      />
      </View>
     
    );
  }
}




class ExtraQScreen extends React.Component {
  static navigationOptions = {
    title: 'Extra Qualification',
  };



  render() {
    return (
      
      <View>

      <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>EXTRA QUALIFICATION:</Text>
      
      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>Certification in Information Technology (CIT):</Text>  {'\n'}
      - Skill Development Council 2007 - M.I.S.S   {'\n'}
      - Office, Adobe Photoshop, Web-design  {'\n'}

      {'\n'}
      </Text>

      <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
      <Text style={{fontWeight:'bold'}}>Typing Speed Examination (60WPM)</Text>  {'\n'}
      - Passed exam at 30WPM in 2004  {'\n'}
      

      {'\n'}
      </Text>



        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      />
      </View>
     
    );
  }
}




class EducationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />
    
    };
  };
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'white', paddingLeft: 5, }}>
        <Text style={{paddingTop:15, paddingLeft:5,fontWeight:'bold', fontSize: 30}}>EDUCATION:</Text>
      
        <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>Matriculation:</Text>  {'\n'}
        - Science Group - 2009  {'\n'}
        {'\n'}
        </Text>
         
        <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>Intermediate:</Text>  {'\n'}
        - Pre-Engineering Group - 2011  {'\n'}
        {'\n'}
        </Text>


        <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>BSc. :</Text>  {'\n'}
        - Statistics, Economics, Maths - 2015  {'\n'}
        {'\n'}
        </Text>        

        <Text style={{paddingTop:15, paddingLeft:5, fontSize:13}}>
        <Text style={{fontWeight:'bold'}}>MCS. :</Text>  {'\n'}
        - Software Engineering - 2017 onwords  {'\n'}
        {'\n'}
        </Text>        


   {/*     Button title="Submit" onPress= {() => 
          // this.props.navigation.navigate('Home', {
          //     fullName: 'Ahmed Shabbir',
          //     userName: 'Ahmed1922',
          //     password: '123'
          //   })}
   //>
 */}
        
        
        

         
  
        <Button
        onPress={() =>     this.props.navigation.openDrawer('')}
        title="Back"
      />
      
    
       
      </View>
    );
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Education: {
    screen: EducationScreen
  },
  Experience: {
    screen: ExperienceScreen
  },
  PersonalDetails: {
    screen: BioDetailsScreen
  },
  Skills: {
    screen: SkillsScreen
  },
  ExtraQualification: {
  screen:   ExtraQScreen

  },
});

//LEARN ABOUT NAVIGATION 'props'
//navigation events:
/* navigation - navigation props (optional, defaults to reading from React context)
onWillFocus - event listener
onDidFocus - event listener
onWillBlur - event listener
onDidBlur - event listener */



//leftside menu
const DrawerMenu = createAppContainer(MyDrawerNavigator);


export default class DrawerNav extends React.Component {
  render() {
    return <DrawerMenu />;
  }
}
