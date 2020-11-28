import React, {useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  ProgressBar
} from 'react-native';
import * as Progress from 'react-native-progress';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import * as Animatable from 'react-native-animatable';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const CardItemDetails = ({route}) => {
  const itemData = route.params.itemData;
  const navTitleView = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={itemData.image} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>{itemData.title}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>{itemData.title}</Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Detail</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <FontAwesome name="star" size={16} color="#9F9F9F" />
              <Text style={{marginHorizontal: 2}}>{itemData.rating}</Text>
              <Text>({itemData.reviews})</Text>
            </View>
          </View>

        </TriggeringView>

        <View style={[styles.section, styles.sectionLarge]}>

          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 4}}>
            <Text style={{fontWeight:'bold', fontSize: 15, alignItems: 'flex-start'}}>{itemData.title} - {itemData.kota}</Text>
            <Text style={{color:'#9F9F9F', alignItems: 'flex-end'}}>Keuntungan</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4}}>
           <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <FontAwesome name="user" size={16} color="#9F9F9F" />
              <Text style={{marginHorizontal:10}}>{itemData.namapetani}</Text>
              <Text style={{ backgroundColor:'#3A915A', color:'white', borderRadius: 10}}>  {itemData.bedge}  </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{backgroundColor:'#3A915A', color:'white'}}> {itemData.keuntungan} </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2}}>
           <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <FontAwesome name="map-marker" size={16} color="#9F9F9F" />
              <Text style={{marginHorizontal: 10}}>{itemData.kota}, {itemData.provinsi}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{color:'#9F9F9F'}}>Luas Lahan</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'flex-end',marginVertical: 2}}>
            <Text style={{fontWeight:'bold',color:'#3A915A'}}>{itemData.luaslahan}</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2 ,paddingTop: 4}}>
            <Text style={{color:'#9F9F9F'}}>Ditutup Dalam</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{color:'#9F9F9F'}}>Minimal Investasi</Text>
            </View>
          </View>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2}}>
            <Text style={{fontWeight:'bold',color:'#3A915A'}}>{itemData.ditutupdalam}</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{fontWeight:'bold',color:'#3A915A'}}>{itemData.minimalinvestasi}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2,paddingTop: 4}}>
            <Text style={{color:'#9F9F9F'}}>Tenor</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={{fontWeight:'bold',color:'#3A915A'}}>{itemData.tenor}</Text>
            <Text style={{color:'#9F9F9F'}}> ({itemData.bulantenor})</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2,paddingTop: 10}}>
            <Text style={{fontWeight: 'bold'}}>{itemData.tercapai}</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{color:'#9F9F9F'}}>dari {itemData.target}</Text>
            </View>
          </View>
          <View style={{paddingTop:10}}>
            <Progress.Bar 
            progress={0.3} 
            width={null} 
            height={10} 
            borderWidth={0}
            animated={true}
            color={['#3A915A']}
            unfilledColor={['#C4C4C4']} />
          </View>
          
        </View>

        

        {/* <View style={styles.section}>
          <Text style={{marginBottom:8,fontSize:15,fontWeight:'bold'}}>Kategori</Text>
          <View style={styles.categories}>
            {itemData.categories.map((category, index) => (
              <View style={styles.categoryContainer} key={index}>
                <FontAwesome name="tag" size={16} color="#fff" />
                <Text style={styles.category}>{category}</Text>
              </View>
            ))}
          </View>
        </View> */}

        <View style={[styles.section, {height: 320}]}>
        <Text style={{marginBottom:15,fontSize:15,fontWeight:'bold'}}>Lokasi</Text>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex: 1}}
            region={{
              latitude: itemData.coordinate.latitude,
              longitude: itemData.coordinate.longitude,
              latitudeDelta: 0.00864195044303443,
              longitudeDelta: 0.000142817690068,
            }}>
            <MapView.Marker
              coordinate={itemData.coordinate}
              image={require('../assets/map_marker.png')}
            />
          </MapView>
        </View>
        <View style={{borderColor:'#c4c4c4', borderWidth: 1, margin: 20, paddingVertical: 10, paddingHorizontal: 5}}>
          <Text style={{marginBottom:8,fontSize:15,fontWeight:'bold', marginLeft: 5}}>Simulasi</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
            <Text>Minimal Investasi</Text>
            <Text>Maksimal Investasi</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold', color:'#3A915A'}}>{itemData.minimalinvestasi}</Text>
            <Text style={{fontWeight: 'bold', color:'#3A915A'}}>{itemData.target}</Text>
          </View>
          <View style={{flex: 1,flexDirection: 'row', margin: 5}}>
            <TextInput placeholder="Rp100.000" placeholderTextColor="rgba(196, 196, 196, 50)" style={{width: '100%', height:'50%', backgroundColor: 'transparent'}}></TextInput>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
            <Text>Keuntungan yang Anda Peroleh</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
            <Text style={{fontWeight: 'bold', color:'#3A915A'}}>Rp112.000</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 15,marginBottom: 20}}>
              <TouchableOpacity style={{backgroundColor: '#3A915A', width:'100%', borderRadius: 3, height: 40}}>
                <View style={{width:'100%',height:'100%',flexDirection:'column',justifyContent:'center'}}>
                    <Text style={{color:'#fff',alignSelf:'center',alignContent:'center',fontWeight:'bold'}}>
                      Beli
                    </Text>
                </View>
              </TouchableOpacity>
        </View>
        
      </HeaderImageScrollView>
    </View>
  );
};

export default CardItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#3A915A',
    borderRadius: 20,
    margin: 5,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
});
