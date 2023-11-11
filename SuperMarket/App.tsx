import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/pages/Login/Login';
import CreateAccount from './src/pages/CreateAccount/CreateAccount';
import Home from './src/pages/Home/Home';
import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';
import ShoppingCart from './src/pages/ShoppingCart/ShoppingCart'
import  Icon  from 'react-native-vector-icons/AntDesign';
import { Header } from 'react-native-elements';
import {useState} from 'react'
import Favorites from './src/pages/Favorites/Favorites'



const App = (): JSX.Element => {
 const Stack = createNativeStackNavigator()
 const [shoppingCart,setShoppingCart] = useState([])
 const [favorites, setFavorites] = useState([])
 
 return(
 
  <NavigationContainer> 
    <Stack.Navigator> 
     <Stack.Screen options={{headerShown: false}}name="Login" component={Login}></Stack.Screen> 
     
     <Stack.Screen options={({navigation}) => { return{
      title:"Home", 
      headerBackVisible:false,
      headerTitleAlign:"center",
      headerRight:() => (<Icon onPress={()=>(navigation.navigate("ShoppingCart",{shoppingCart}))} name = "shoppingcart" size={30}></Icon>),
      headerLeft:() => (<Icon onPress={()=>(navigation.navigate("Login"))}name = "logout"size={28}></Icon>)
     }
     }} name="home"> 
        {
          ()=>(
            <Home shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} favorites ={favorites} setFavorites={setFavorites} ></Home>
          )
        }
     </Stack.Screen> 
     
     
     <Stack.Screen options = {{title:'Criar Usuario',headerTintColor:'#000'}} name="createAccount" component={CreateAccount}></Stack.Screen> 
     
     <Stack.Screen options = {{title:'Recuperar senha',headerTintColor:'#000'}} name="forgotPassword" component={ForgotPassword}></Stack.Screen> 
     
     <Stack.Screen options = {{title:'Carrinho',headerTintColor:'#000'}} name="ShoppingCart" component={ShoppingCart}></Stack.Screen> 
     
    <Stack.Screen name ="Favorites">{()=>(<Favorites favorites ={favorites} setFavorites={setFavorites}></Favorites>)}</Stack.Screen>    
     
    </Stack.Navigator> 
  </NavigationContainer>

 );
}



export default App;