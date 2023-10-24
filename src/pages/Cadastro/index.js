import { StatusBar } from 'expo-status-bar';
import { Text, View,TextInput, } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';

import {Picker} from '@react-native-picker/picker';

export default function Cadastro() {
  const [titulo, setTitulo] = useState('')
  const [generoSelecionado, setGeneroSelecionado] = useState(0);
  const [generos, setGeneros] = useState([
    {key: 1, nome: ''},
    {key: 2, nome: 'Móveis'},
    {key: 3, nome: 'Eletrodomésticos'},
    {key: 4, nome: 'Informática'},    
    {key: 5, nome: 'Celulares'},
    {key: 6, nome: 'TV e Vídeo'}
  ]) 

  const [quantidadeSelecionada, setQuantidadeSelecionado] = useState(0);
  const [quantidades, setQuantidades] = useState([
    {key: 1, nome: ''},
    {key: 2, nome: '10 Pessoas'},
    {key: 3, nome: '50 Pessoas'},
    {key: 4, nome: '100 Pessoas'},    
    {key: 5, nome: '250 Pessoas'},
    {key: 6, nome: '500 Pessoas'},
    {key: 7, nome: '1000 Pessoas'},
  ]) 


  let generosItem = generos.map( (v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  })

  let quantidadesItem = quantidades.map( (v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  })

  function addLista() {
    console.log("nome: " + titulo 
                + "\nGênero: " + genero)
  }


  return (
    <View style={styles.container}>

      <View style={styles.viewTitulo}>
        <Text style={styles.textTitle}>Cadastre sua lista</Text>
      </View> 

        <View style={styles.viewInputsGeral}>
          <View style={styles.linha}>
            <View style={styles.titulosInput}>
              <Text style={styles.textInput}>Título da lista</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput
               style={styles.input}
               value={titulo}
               onChangeText={setTitulo}
              >                 
              </TextInput>
            </View>
          </View>
          <View style={styles.linha}>
            <View style={styles.titulosInput}>
              <Text style={styles.textInput}>Gênero</Text>
            </View>
            <View style={styles.viewInput}>
              <Picker
                style={styles.seletor}
                selectedValue={generoSelecionado}
                onValueChange={ (itemValue, itemIndex) => setGeneroSelecionado(itemValue) }
              >
                {generosItem}
              </Picker>
            </View>
          </View>
          <View style={styles.linha}>
            <View style={styles.titulosInput}>
              <Text style={styles.textInput}>Tamanho da lista</Text>
            </View>
            <View style={styles.viewInput}>
              <Picker
                style={styles.seletor}
                selectedValue={quantidadeSelecionada}
                onValueChange={ (itemValue, itemIndex) => setQuantidadeSelecionado(itemValue) }
              >
                {quantidadesItem}
              </Picker>
            </View>
          </View>
          <View style={styles.linha}>
            <View style={styles.titulosInput}>
              <Text style={styles.textInput}>desconto desejado</Text>
            </View>
            <View style={styles.viewInput}>
              <TextInput style={styles.input}>
                  
              </TextInput>
            </View>
          </View>
          <View style={styles.viewBot}>
            <TouchableOpacity onPress={addLista}>
              <Text>
                addLista
              </Text>
            </TouchableOpacity>
          </View>
      </View>

    </View>
  );
}