import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      flexDirection:'row',
      backgroundColor:'red',
      width:'100%',
      height:'8%',
    },
    textoDePefil:{
      backgroundColor:'white',
      width:'55%',
      alignItems:'start',
      justifyContent:'center',
    },
    botNav:{
      backgroundColor:'red',
      width:'45%',
      alignItems:'flex-end',
    },
    body:{
      height:'77%',
      width:'100%',
      backgroundColor:'green',
    },
    parteCima:{
      height:'30%',
      width:'100%',
      flexDirection:'row',
      backgroundColor:'pink',
    },
    voltaImg:{
      height:'100%',
      width:'40%',
      backgroundColor:'red',
    },
    tituloH1:{
      height:'100%',
      width:'60%',
      justifyContent:'flex-end',
      backgroundColor:'white',
    },
    escritoH2:{
      fontSize:25,
      fontWeight:'bold',
    },
    logUm:{
      height: 150,
      width: 150,
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 100,
    },
    footer:{
      backgroundColor:'red',
      width:'100%',
      height:'15%',
    },
    textoH1:{
      fontSize:20,
    },
  });