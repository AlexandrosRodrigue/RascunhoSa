import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

export default function Registro() {
    
    const navigation = useNavigation();

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        cpf: '',
        password:'',
    })

    function adicionar(){


    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
        [name]: event.target.value
        })
    }

    const hableForm = async (event) =>{
        try{
            event.preventDefault()
            const response = await fetch(`C:/Users/alexandros_kotzias/Documents/repos/rascunho/RascunhoSa/src/PessoasDados`)
        } catch (err){

        }
        console.log(formData)
    }
}  
  return (
    <View style={styles.container}>

        <View style={{  height:'10%',
                        width:'100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'#ffa500',
                    }}>
            <Text style={{
                            fontSize:25,
            }}>Registre-se</Text>
        </View>
        
        <View style={styles.viewInput}>
            <Text>Nome:</Text>
            <TextInput style={styles.input} value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}}>
                
            </TextInput>
        </View>
        <View style={styles.viewInput}>
            <Text>Sobrenome:</Text>
            <TextInput style={styles.input} value={formData.surname} onChange={(e) => {handleFormEdit(e, 'name')}}>
                
            </TextInput>
        </View>
        
        <View style={styles.viewInput}>
            <Text>Email:</Text>
            <TextInput style={styles.input} value={formData.email} onChange={(e) => {handleFormEdit(e, 'name')}}>
                
            </TextInput>
        </View>
        
        <View style={styles.viewInput}>
            <Text>CPF:</Text>
            <TextInput style={styles.input} value={formData.cpf} onChange={(e) => {handleFormEdit(e, 'name')}}>
                
            </TextInput>
        </View>
        
        <View style={styles.viewInput}>
            <Text>Telefone:</Text>
            <TextInput style={styles.input} >
                
            </TextInput>
        </View>
        
        <View style={styles.viewInput}>
            <Text>Senha:</Text>
            <TextInput style={styles.input} value={formData.password} onChange={(e) => {handleFormEdit(e, 'name')}}> 
                    
            </TextInput>
        </View>
        
        <View style={styles.viewInput}>
            <Text>Confirmar Senha:</Text>
            <TextInput style={styles.input}>
                    
            </TextInput>
            <TouchableOpacity onPress={adicionar()}>
                <Text>Pronto</Text>
            </TouchableOpacity>
        </View>

        
        
        <View  style={{ height:'20%',
                        width:'100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}> 
              <Text>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}> 
              <Text>Fazer Login</Text>
            </TouchableOpacity>

        </View>
    
    </View>
  );
}

