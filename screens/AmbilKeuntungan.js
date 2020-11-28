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

const AmbilKeuntungan = ({route}) => {
  // const itemData = route.params.itemData;
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
          <Image source={require('../assets/banners/image1.png')} style={styles.image} />
        )}
        renderForeground={() => (
          <View style={styles.titleContainer}>
            <Text style={styles.imageTitle}>Budidaya Padi</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text style={styles.navTitle}>Budidaya Padi</Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>

        </TriggeringView>

        <View style={[styles.section, styles.sectionLarge]}>

          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 4}}>
            <Text style={{fontWeight:'bold', fontSize: 15, alignItems: 'flex-start'}}>Budidaya Padi - Jombang</Text>
            <Text style={{color:'#9F9F9F', alignItems: 'flex-end'}}>Keuntungan</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4}}>
           <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <FontAwesome name="user" size={16} color="#9F9F9F" />
              <Text style={{marginHorizontal:10}}>Yusuf Mukharom</Text>
              <Text style={{ backgroundColor:'#3A915A', color:'white', borderRadius: 10}}>  Petani baik  </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{backgroundColor:'#3A915A', color:'white'}}> 12% (p.p) </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2}}>
           <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <FontAwesome name="map-marker" size={16} color="#9F9F9F" />
              <Text style={{marginHorizontal: 10}}>Jombang, Jawa Timur</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{color:'#9F9F9F'}}>Luas Lahan</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'flex-end',marginVertical: 2}}>
            <Text style={{fontWeight:'bold',color:'#3A915A'}}>1.3 Ha</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2 ,paddingTop: 4}}>
            <Text style={{color:'#9F9F9F'}}>Investasi Anda</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{color:'#9F9F9F'}}>Minimal Investasi</Text>
            </View>
          </View>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2}}>
            <Text style={{fontWeight:'bold',color:'#3A915A'}}>Rp10.000.000</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{fontWeight:'bold',color:'#3A915A'}}>Rp100.000</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2 ,paddingTop: 4}}>
            <Text style={{color:'#9F9F9F'}}>Keuntungan Anda</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{color:'#9F9F9F'}}>Target</Text>
            </View>
          </View>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 2}}>
            <Text style={{fontWeight:'bold',color:'#3A915A'}}>Rp1X.XXX.XXX</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{fontWeight:'bold',color:'#3A915A'}}>Rp134.000.000</Text>
            </View>
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


        <View style={{flexDirection: 'row', margin:10}}>
              <TouchableOpacity style={{backgroundColor: '#3A915A', width:'100%', borderRadius: 3, height: 40}}>
                <View style={{width:'100%',height:'100%',flexDirection:'column',justifyContent:'center'}}>
                    <Text style={{color:'#fff',alignSelf:'center',alignContent:'center',fontWeight:'bold'}}>
                      Ambil
                    </Text>
                </View>
              </TouchableOpacity>
        </View>
        
      </HeaderImageScrollView>
    </View>
  );
};

export default AmbilKeuntungan;

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
    paddingVertical: 5,
    paddingHorizontal: 20,
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
    minHeight: 210,
  },
});
