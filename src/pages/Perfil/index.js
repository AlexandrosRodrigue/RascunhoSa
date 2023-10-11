import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'
import FontAwesome from "@expo/vector-icons/FontAwesome";

function irConf() {
  
}

export default function Perfil() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.textoDePefil}>
          <Text style={styles.textoH1}>Perfil</Text>
        </View>
        <View style={styles.botNav}>
          <TouchableOpacity onPress={irConf} style={styles.botaoNav}>
            <FontAwesome
              name='bars'
              size={45}
              color='white'
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.parteCima}>
          <View style={styles.voltaImg}>
            <Image
              style={styles.logUm}
              source={require('../../componentes/imagens/fotoPerfil.jpg')}
            />
          </View>
          <View style={styles.tituloH1}>
            <Text style={styles.escritoH2}>Informações pessoais</Text>
          </View>
        </View>
        <View style={styles.meio}>
          
        </View>
      </View>
      <View style={styles.footer}>

      </View>
      </View>
    
  );
}

{/* <View style={styles.}></View>
<View style={styles.}></View>
<View style={styles.}></View>
<View style={styles.}></View>
<View style={styles.}></View>
<View style={styles.}></View>
<View style={styles.}></View> */}