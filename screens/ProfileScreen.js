import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import files from '../assets/filesBase64';
import{ AuthContext } from '../components/context';


const ProfileScreen = ({navigation}) => {

  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
      url: files.appLogo,
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };

  const { signOut } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal:20}}>

      

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={60}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginBottom: 5,
            }]}>Dwi Prasetya Armunanta</Title>
            <Caption style={styles.caption}>+628812345678</Caption>
          </View>
        </View>
      </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize: 14}}>Total investasi</Text>
            <Text style={{fontSize: 14}}>Jumlah Subjek Investasi</Text>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:5}}>
            <Text style={{fontWeight:'bold',fontSize: 18}}>Rp. 10.000.000</Text>
            <Text style={{fontWeight:'bold',fontSize: 18}}>5</Text>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between',marginTop: 20}}>
            <Text >Vestpay Anda</Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>Rp. 10.000.000</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=> navigation.navigate('Vestpay')}>
                  <Text style={{color:'#3A915A'}}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
          </View>

          <View style={{borderBottomColor: '#dddddd',borderBottomWidth: 1,borderTopColor: '#dddddd',borderTopWidth: 1,marginTop:15}}>
          <TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'space-between',height: 40}}>
              <View style={{flexDirection:'column', justifyContent:'center'}}>
                <Text style={{color: '#3A915A',marginLeft:20}}>Lihat Detail Keuntungan Investasi</Text>
              </View>

              <View style={{marginRight:20,flexDirection:'column', justifyContent:'center'}}>
                <Icon name='chevron-right' size={30} color='#3A915A'/>
              </View>
              
            </View>

          </TouchableOpacity>

          </View>

      <View style={{backgroundColor:'#dddddd', height:10}}></View>
        
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings" color="#9F9F9F" size={25}/>
            <Text style={styles.menuItemText}>Pengaturan</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="help" color="#3A915A" size={25}/>
            <Text style={styles.menuItemText}>Bantuan</Text>
          </View>
        </TouchableRipple>
      </View>
      <View>
      <TouchableOpacity style={styles.commandButton} onPress={() => {signOut()}}>
       <View style={{borderWidth:1, width:'100%',borderRadius: 5,height:40, borderColor:'#FF0000',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontWeight:'bold',color:'#FF0000'}}>Keluar</Text>
       </View> 
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    flex: 1,
  },
  
  commandButton: {
    padding: 15,
    borderRadius: 10,
    borderColor: '#FF0000',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  userInfoSection: {
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "100",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    width:'100%',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: 'transparent',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 80,
  },
  infoBoxWrapper2: {
    flexDirection: 'row',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    height: 40,
    
  },
  infoBox: {
    width: '50%',
    marginLeft: 30,
    justifyContent: 'center'
  },
  menuWrapper: {
    paddingTop:15
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26
  },
});
