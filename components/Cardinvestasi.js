import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from './StarRating';
import * as Progress from 'react-native-progress';
const Card = ({itemData, onPress}) => {
  return (
    <View style={styles.parentCard}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={itemData.image}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          
        </View>
        <View style={styles.cardInfo}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2 ,paddingTop: 4}}>
              <Text style={{fontSize:12,fontWeight:'bold'}}>{itemData.title}</Text>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={{fontSize:10,color:'#3A915A'}}>Details </Text>
                <FontAwesome name="angle-right" size={10}color="#3A915A" />
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4}}>
              <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                <FontAwesome name="user" size={12}color="#9F9F9F" />
                <Text style={{fontSize:10,marginHorizontal:2}}>{itemData.namapetani}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={{ fontSize:9,backgroundColor:'#3A915A', color:'white', borderRadius: 10}}>  {itemData.bedge}  </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2}}>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                <FontAwesome name="map-marker" size={12} color="#9F9F9F" />
                <Text style={{fontSize:9,marginHorizontal: 2}}>{itemData.kota}, {itemData.provinsi}</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start',marginVertical: 7}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize:9,backgroundColor:'#3A915A', color:'white',alignItems: 'flex-end'}}> {itemData.keuntungan} </Text>
                <Text style={{fontSize:9,color:'#9F9F9F',marginHorizontal: 2, alignItems: 'flex-end'}}> Keuntungan</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2 ,}}>
              <Text style={{fontSize:9,color:'#9F9F9F'}}>Ditutup Dalam</Text>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={{fontSize:9,color:'#9F9F9F'}}>Target Dana</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 0}}>
              <Text style={{fontSize:9,fontWeight:'bold',color:'#3A915A'}}>{itemData.ditutupdalam}</Text>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={{fontSize:9,fontWeight:'bold',color:'#3A915A'}}>{itemData.target}</Text>
              </View>
            </View>
            <View style={{paddingTop:5}}>
            <Progress.Bar 
              progress={0.3} 
              width={null}
              useNativeDriver={true}
              height={5}
              borderWidth={0}
              animated={true}
              color={['#3A915A']}
              unfilledColor={['#C4C4C4']} />
            </View>
          </View>
      </TouchableOpacity>
    </View>
    
  );
};

export default Card;

const styles = StyleSheet.create({
  parentCard:{
    marginVertical:10,
    marginHorizontal:10,
    width: '45%'
  },
  card: {
    height: 100,
    marginVertical: 0,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 100,
    elevation: 10,
  },
  cardImgWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
