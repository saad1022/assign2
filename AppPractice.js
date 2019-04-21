import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Syed Faizullah Shah',
    headerStyle: {
      backgroundColor: '#f4511e',
      
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign:'right'
    },
  }
  render() {
    const { navigation } = this.props;

   const fullName = navigation.getParam('fullName', 'Your Name');
   const userName = navigation.getParam('userName', 'Your UserName');
   const password = navigation.getParam('password', 'Your Password');


  const checkLoginDetails = () => {
    if(userName == "Ahmed1922" && password == "123"){
      Alert.alert("Login Successfully!!!..")
    }
    else{
      Alert.alert("Login Failed!!!..")
    }
} 

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
        <Text> FullName: {JSON.stringify(fullName)}</Text>
        <Text> userName: {JSON.stringify(userName)}</Text>
        <Text> password: {JSON.stringify(password)}</Text>


        <Button
            title="Experience"
            onPress={() => this.props.navigation.navigate('Experience')}
        />

        <Button
            title="Education"
            onPress={() => this.props.navigation.navigate('Education')}
        />
         <Button
            title="Check Login"
            onPress={() => checkLoginDetails()}
        />
       
      </View>
    );
  }
}

class ExperienceScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };



  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>About Screen</Text>
       
        

          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Contact1')}
          />

       
      </View>
    );
  }
}


class BioDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Contact',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:'aquamarine' }}>
        <Text >Contact us Now:</Text>
        
        <Text>Phone Number: 0315-2019137</Text>
        

          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Login')}
          />

      <Button
          title="Go back"
          onPress={() => this.props.navigation.popToTop()}
        />

    
       
      </View>
    );
  }
}


class EducationScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:'grey' }}>
        <Text >Enter Your Sign Up Details:</Text>
        
        <Text>Full Name:</Text><TextInput/>
        <Text>Username:</Text><TextInput/>
        <Text>Password:</Text><TextInput/>  
        <Button title="Submit" onPress= {() => 
          this.props.navigation.navigate('Home', {
              fullName: 'Ahmed Shabbir',
              userName: 'Ahmed1922',
              password: '123'
            })}
   />

        
        
        

          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Home')}
          />

      <Button
          title="Go back"
          onPress={() => this.props.navigation.popToTop()}
        />

    
       
      </View>
    );
  }
}


const ResumeNavigator = createStackNavigator({
  Home: HomeScreen,
  Education: EducationScreen,
  Personal: BioDetailsScreen,
  Experience: ExprienceScreen
  },
  
    {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(ResumeNavigator);  