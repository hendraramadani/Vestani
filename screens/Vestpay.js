import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import files from '../assets/filesBase64';
import{ AuthContext } from '../components/context';
const ProfileScreen = () => {

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
      <View style={{margin:20}}>

        <View>
          <Text style={{fontSize: 15}}>Saldo</Text>
        </View>

        <View style={{flexDirection:'row',marginBottom:10}}>
          <Text style={{fontWeight:'bold', fontSize:20}}>Rp10.000.000</Text>
        </View>


        <View style={{flexDirection:'row',justifyContent:'space-around',alignContent:'center',borderColor:'#000',shadowRadius: 2,elevation:4,shadowOpacity: 1,shadowOffset: {width: 0,height: 4,},}}>
            <TouchableOpacity style={{marginRight:0,marginVertical:8}}>
                <View style={{flexDirection: 'column',alignItems:'center'}}>
                <Icon name='qrcode' size={40} color='#3A915A'/>
                <Text>Bayar</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity style={{marginVertical:8}}>
                <View style={{flexDirection: 'column',alignItems:'center'}}>
                <Icon name='credit-card-plus' size={40} color='#3A915A'/>
                <Text>Top Up</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity style={{marginRight:0,marginVertical:8}}>
                <View style={{flexDirection: 'column',alignItems:'center'}}>
                <Icon name='cash-refund' size={40} color='#3A915A'/>
                <Text>Tarik Tunai</Text>
              </View>
              </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',marginBottom:10,marginTop:20}}>
          <Text style={{fontWeight:'bold', fontSize:20}}>Riwayat Transaksi</Text>
        </View>

        <View style={{flexDirection:'column'}}>
          <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',marginVertical:4,borderWidth:1,borderRadius:8,height:70,borderColor:'#9F9F9F'}}>
           <View style={{flexDirection: 'row', alignSelf:'flex-start'}}>
            <View style={{margin:10}}>
            <Icon name='minus-circle-outline' size={40} color='#3A915A'/>
            </View>
            <View style={{flexDirection:'column', marginTop: 5}}>
              <Text style={{fontWeight:'bold'}}>
                Investasi
              </Text>
              <Text>
                Budidaya padi - Jombang
              </Text>
              <Text>
                13 November 2020
              </Text>
              </View>
              </View> 
            <View style={{flexDirection:'column',alignSelf:'flex-end',margin:10,marginLeft:20}}>
              <Text style={{fontWeight:'bold',fontSize:14}}>Rp10.000.000</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',marginVertical:4,borderWidth:1,borderRadius:8,height:70,borderColor:'#9F9F9F'}}>
          <View style={{flexDirection: 'row', alignSelf:'flex-start'}}>
            <View style={{margin:10}}>
            <Icon name='minus-circle-outline' size={40} color='#3A915A'/>
            </View>
            <View style={{flexDirection:'column', marginTop: 5}}>
              <Text style={{fontWeight:'bold'}}>
                Investasi
              </Text>
              <Text>
                Budidaya padi - Jombang
              </Text>
              <Text>
                13 November 2020
              </Text>
              </View>
              </View> 
            <View style={{flexDirection:'column',alignSelf:'flex-end',margin:10,marginLeft:20}}>
              <Text style={{fontWeight:'bold',fontSize:14}}>Rp10.000.000</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',marginVertical:4,borderWidth:1,borderRadius:8,height:70,borderColor:'#9F9F9F'}}>
          <View style={{flexDirection: 'row', alignSelf:'flex-start'}}>
            <View style={{margin:10}}>
            <Icon name='minus-circle-outline' size={40} color='#3A915A'/>
            </View>
            <View style={{flexDirection:'column', marginTop: 5}}>
              <Text style={{fontWeight:'bold'}}>
                Investasi
              </Text>
              <Text>
                Budidaya padi - Jombang
              </Text>
              <Text>
                13 November 2020
              </Text>
              </View>
              </View> 
            <View style={{flexDirection:'column',alignSelf:'flex-end',margin:10,marginLeft:20}}>
              <Text style={{fontWeight:'bold',fontSize:14}}>Rp10.000.000</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',marginVertical:4,borderWidth:1,borderRadius:8,borderColor:'#9F9F9F',height:70}}>
          <View style={{flexDirection: 'row', alignSelf:'flex-start'}}> 
            <View style={{margin:10}}>
            <Icon name='minus-circle-outline' size={40} color='#3A915A'/>
            </View>
            <View style={{flexDirection:'column', marginTop: 5}}>
              <Text style={{fontWeight:'bold'}}>
                Investasi
              </Text>
              <Text>
                Budidaya padi - Jombang
              </Text>
              <Text>
                13 November 2020
              </Text>
              </View>
              </View>
            <View style={{flexDirection:'column',alignSelf:'flex-end',margin:10,marginLeft:20}}>
              <Text style={{fontWeight:'bold',fontSize:14}}>Rp10.000.000</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',marginVertical:4,borderWidth:1,borderRadius:8,borderColor:'#9F9F9F',height:70}}>
          <View style={{flexDirection: 'row', alignSelf:'flex-start'}}>
            <View style={{margin:10}}>
            <Icon name='plus-circle-outline' size={40} color='#3A915A'/>
            </View>
            <View style={{flexDirection:'column', marginTop: 5}}>
              <Text style={{fontWeight:'bold'}}>
                Ambil Keuntungan
              </Text>
              <Text>
                Budidaya padi - Jombang
              </Text>
              <Text>
                07 November 2020
              </Text>
              </View>
              </View> 

            <View style={{flexDirection:'column',alignSelf:'flex-end',margin:10,marginLeft:20}}>
              <Text style={{fontWeight:'bold',fontSize:14}}>Rp11.630.000</Text>
            </View>
          </TouchableOpacity>
        </View>
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
