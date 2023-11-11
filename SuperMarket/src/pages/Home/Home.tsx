import React from 'react'
import { ScrollView, Text, View,StyleSheet, TouchableOpacity, ToastAndroid,Pressable } from 'react-native'
import { Button, Card } from 'react-native-elements'
import Styles from '../Login/Styles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon  from 'react-native-vector-icons/AntDesign'

import {useState} from 'react'
import { color } from '@rneui/base';

{/* Essa parte de código é o botão mais bonito e menos porco do que o que vem por padrao no react native
 <TouchableOpacity style={Styles.generalButtons} onPress={() => { navigation.replace("login") }}>
                    <Text style={Styles.generalButtonsText}>
                        Create
                    </Text>
                </TouchableOpacity> */}
const products = [
  { name: "Rice ", price: "R$ 15", salePrice: "R$ 10", type: "carbohydrate", desc: "Simple rice", expirationDate: "07/06/2024", image: "https://media.cotabest.com.br/media/sku/arroz-tipo-1-pacote-1kg-camil-pct.jpg" },
  { name: "Bean ", price: "R$ 10", salePrice: "R$ 5", type: "legume", desc: "Simple beans", expirationDate: "06/06/2024", image: "https://ibassets.com.br/ib.item.image.big/b-b0e8cb327d6d449a86d190e2dcb73d72.jpeg" },
  { name: "Meat ", price: "R$ 25", salePrice: "R$ 20", type: "protein", desc: "Simple meat", expirationDate: "07/03/2024", image: "https://www.chegouafeira.com.br/image/cache/catalog/FOTOS%20MERCADORIAS/Carne%20Bovina%20Patinho%20em%20Peda%C3%A7o%20500g-500x500.jpg" },
]

const Home = ({shoppingCart, setShoppingCart,favorites, setFavorites}:any) => {
    const openToast = (message:string)=>{
      ToastAndroid.show(message,3000)
    }
    const removeFavorite = (product:any)=>{
      for(let i =0; favorites.lenght; i++){
        if(favorites[i].name === product.name){ 
          delete favorites[i]
        }
      }
    }
  return (
    <ScrollView>
      
      {
        products.map((product, i) => {
          const [favorite, setFavorite] = useState(false)
          return(
            <Card key={i}>
            <Card.Title>{product.name}</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: product.image }} />
            <View style={Styles.productDescriptionView}>
              <Text style={Styles.productDescriptionText}>Price: {product.price}</Text>
              <Text style={Styles.productDescriptionText}>Description: {product.desc}</Text>
            </View>
             {
              favorite ?
              <Icon onPress={()=>{removeFavorite(product),setFavorite(false)}} name= "heart"size={28} color = "red" ></Icon>:
              <Icon onPress={()=>{setFavorites([...favorites, product]),setFavorite(true)}} name="hearto" size={28}></Icon>
              }

            {/*<Button onPress={()=>{
              openToast("Item adicionado ao carrinho")
              setShoppingCart([...shoppingCart,product])
            }} title='ADD'></Button>*/}

          <Pressable 
          onPress={()=>{
          openToast("Item adicionado ao carrinho")
          setShoppingCart([...shoppingCart,product])
          }} 
          style={
            ({pressed}:any) => (
              {
                backgroundColor: pressed ? '#404040' : 'black',
                height:40,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:5
              }
            )
          }
          >
           <Text style={{fontSize:20, color:'white'}}>Add To Cart</Text>

          </Pressable>

          
          </Card>
          )
        })
      }
    </ScrollView>
  )
}

export default Home