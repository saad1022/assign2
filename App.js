import React from "react";
import { View, Text, Button, Alert,Image } from "react-native";
import {createAppContainer ,createBottomTabNavigator, DrawerActions, TabBarBottom, createStackNavigator, TabNavigator} from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import Drawers from './src/Drawer';


class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./src/img/profile.jpg')}
        style={{ width: 30, height: 30, marginRight:10,justifyContent:'flex-end'}}
      />
    );
  }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Saad Ali Afandi',
    headerRight: <LogoTitle/>
  };



  render() {
    return (
      <Drawers/>
      
  
     
    );
  }
}


const MainScreenNavigator = createStackNavigator({
  Recent: { screen: HomeScreen },
  All: { screen: HomeScreen },
});

const SimpleApp = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: HomeScreen },
});


const ResumeNavigator = createStackNavigator({
  Home: HomeScreen
},
  {
    defaultNavigationOptions: {
      title: 'Home',
      //headerTitle: <LogoTitle />, 
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Hossame',
    },
  }
);



// const Home = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Education: { screen: EducationScreen },
//   Home: HomeScreen,
//   Education: EducationScreen,
//   Personal: BioDetailsScreen,
//   Experience: ExperienceScreen
//   },
  
//   {

    
//   defaultNavigationOptions: {
//     title: 'Home',
//     headerRight: <LogoTitle />,
//     headerTintColor: '#fff',
//     headerStyle: {
//       backgroundColor: '#000',
//     },
//   },
//   navigationOptions: {
//     tabBarLabel: 'Main CV Page',
//     headerTintColor: 'black',
//     headerStyle: {
//       fontSize: 33,
//       backgroundColor: '#ff0',
//       fontWeight:"bold",
//     },

//   },
// }
// );





//onst Tabs = createBottomTabNavigator({ bottomMenu });

//OLD APPCONTAINER OF LAST NIGHT 
//export default createAppContainer(ResumeNavigator);  
/* 
  export default createAppContainer(createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
    
    },

    {
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      animationEnabled: false,
      swipeEnabled: false,
    }
  ));

 */

export default createAppContainer(ResumeNavigator);  



// import React, { Component } from 'react';

// import {
//   AppRegistry,
//   Text,
//   TouchableOpacity,
//   View,
//   StyleSheet,
//   Image,
//   Button,
//   TouchableNativeFeedback,
//   Platform,
//   Dimensions
// } from 'react-native';

// import { createStackNavigator, createBottomTabNavigator, TabView, createAppContainer } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';


// console.disableYellowBox = true;

// class HomeScreen extends Component {
//   static navigationOptions = {
//     tabBarLabel: 'Home',
//     title: 'Home 01',
//     tabBarIcon: ({ tintColor, focused }) => (
//       <View>
//         <Icon name="home" size={24} color={tintColor} />
//       </View>
//     ),
//   };

//   render() {
//     return (
//      <View></View>
//     );
//   }
// }

// class HomeScreen2 extends Component {
//   static navigationOptions = {
//     tabBarLabel: 'Home',
//     title: 'Home 02',
//     tabBarIcon: ({ tintColor, focused }) => (
//       <View>
//         <Icon name="home" size={24} color={tintColor} />
//       </View>
//     ),
//   };

//   render() {
//     const {state} = this.props.navigation;
//     return (
//       <View>
//         <Text>{`Name: ${state.params.name}`}</Text>
//         <Text>{`Age: ${state.params.age}`}</Text>
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Go Home 01"
//         />
//       </View>
//     );
//   }
// }

// class NotificationsScreen extends Component {
//   static navigationOptions = {
//     tabBarLabel: 'Notifications',
//     title: 'Notifications 01',
//     tabBarIcon: ({ tintColor }) => (
//       <View>
//         <Icon name="bell" size={24} color={tintColor} />
//       </View>
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('NotificationsTwo')}
//         title="Go Notifications 02"
//       />
//     );
//   }
// }

// class NotificationsScreen2 extends Component {
//   static navigationOptions = {
//     tabBarLabel: 'Notifications',
//     title: 'Notifications 02',
//     tabBarIcon: ({ tintColor }) => (
//       <View>
//         <Icon name="bell" size={24} color={tintColor} />
//       </View>
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go Notifications 01"
//       />
//     );
//   }
// }

// class ProfileScreen extends Component {
//   static navigationOptions = {
//     tabBarLabel: 'Profile',
//     title: 'Profile 01',
//     tabBarIcon: ({ tintColor }) => (
//       <View>
//         <Icon name="user" size={24} color={tintColor} />
//       </View>
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('ProfileTwo')}
//         title="Go Profile 02"
//       />
//     );
//   }
// }

// class ProfileScreen2 extends Component {
//   static navigationOptions = {
//     tabBarLabel: 'Profile',
//     title: 'Profile 02',
//     tabBarIcon: ({ tintColor }) => (
//       <View>
//         <Icon name="user" size={24} color={tintColor} />
//       </View>
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Profile 02"
//       />
//     );
//   }
// }

// export const Home = createStackNavigator(
//   {
//     HomeOne: { screen: HomeScreen},
//     HomeTwo: { screen: HomeScreen2},
//   },
//   {
//     cardStyle: {
//       shadowOpacity: 0,
//       backgroundColor: 'black',
//     }
//   }
// );

// // 
// export const Profile = createStackNavigator(
//   {
//     ProfileOne: { screen: HomeScreen},
//     ProfileTwo: { screen: ProfileScreen2},
//   },
//   {
//     cardStyle: {
//       shadowOpacity: 0,
//       backgroundColor: 'brown',
//     }
//   }
// );

// const SimpleApp = createBottomTabNavigator( 
//   {
//      Home: Home, // a StackNavigator object
//      Profile: Profile,
//   }, 
//    {
//      lazy: true,
//      animationEnabled: false,
//      tabBarOptions: {
//        showLabel: true,
//          style: {
//          backgroundColor: 'pink',
//          height: 222,
        
//        }
//      }
//    }
//  );

// const App = createAppContainer(SimpleApp);
// export default App;


