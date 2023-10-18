import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [generoSelecionado, setGeneroSelecionado] = useState(0);
  const [generos, setGeneros] = useState([
    {key: 1, nome: 'Móveis'},
    {key: 2, nome: 'Eletrodomésticos'},
    {key: 3, nome: 'Informática'},    
    {key: 4, nome: 'Celulares'},
    {key: 5, nome: 'TV e Vídeo'}
  ]) 



  let generosItem = generos.map( (v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  })

 return (
  <View style={styles.container}>

    <Picker
      selectedValue={generoSelecionado}
      onValueChange={ (itemValue, itemIndex) => setGeneroSelecionado(itemValue) }
    >
      {generosItem}
    </Picker>


   <Text style={styles.carros}>Categoria: {generos[generoSelecionado].nome} </Text>

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 35
  },
  carros:{
   marginTop: 15,
   fontSize: 25 
  }
})