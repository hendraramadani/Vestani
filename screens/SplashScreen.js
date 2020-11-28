import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#FF6347' barStyle="light-content"/>
        <View>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/minilogo.png')}
            style={styles.minilogo}
            resizeMode="stretch"
            />
        </View>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/ilustrasi.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        
        <Animatable.View 
            style={[styles.footer]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title1, {
                color: colors.text
            }]}>Selamat Datang di</Text>
            <Text style={[styles.title2]}>VESTANI</Text>
            
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#639C38', '#639C38']}
                    style={styles.signIn}
                >
                <Text style={styles.textSign}>Lanjutkan</Text>
                <MaterialIcons 
                    name="navigate-next"
                    color="#fff"
                    size={20}
                />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const width_logo = height * 0.38;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    marginBottom : '0%'
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 20,
      paddingHorizontal: 0
  },
  logo: {
      width: width_logo,
      height: height_logo
  },
  minilogo: {
    marginTop: 20,
    marginLeft: 10,
        width: 50,
        height: 30
  },
  title1: {
      textAlign: 'center',
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  title2: {
    textAlign: 'center',
    color: '#639C38',
    fontSize: 30,
    fontWeight: 'bold'
},
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'center',
      marginTop: 80
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
  }
});

