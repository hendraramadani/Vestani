import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Button,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  TextInput
} from 'react-native';
import Modal from 'react-native-modal';
import {SwipeListView} from 'react-native-swipe-list-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InvestasiSekarang from '../model/InvestasiSekarang';

const NotificationScreen = ({navigation}) => {
  const [listData, setListData] = useState(
    InvestasiSekarang.map((Item, index) => ({
      key: `${index}`,
      title: Item.title,
      images: Item.images,
      petani: Item.petani,
      bedge: Item.bedge,
      hitunganmundur: Item.hitunganmundur,
      totalinvestasi: Item.totalinvestasi,
      keuntungan: Item.keuntungan
    })),
  );
  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };



  const VisibleItem = props => {
    const {
      data,
      rowHeightAnimatedValue,
      removeRow,
      leftActionState,
      rightActionState,
    } = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }

    return (
      <Animated.View
        style={[styles.rowFront, {height: rowHeightAnimatedValue}]}>
        <TouchableHighlight
          style={styles.rowFrontVisible}
          onPress={() => console.log('Element touched')}
          underlayColor={'#fff'}>

          <View style={styles.card}>
              <View style={styles.cardImgWrapper,{width: '20%'}}>
              <Image
                source={data.item.images}
                resizeMode="cover"
                style={styles.cardImg}
                />

            </View>


            <View style={{flexDirection:'column',width: '60%',backgroundColor:'#fff',alignSelf:'center'}}>

              <View style={{marginBottom: 5,flexDirection:'row',alignItems:'flex-start'}}>
                <Text style={{fontSize: 12,fontWeight:'bold', marginLeft: 2, marginRight: 10}}>{data.item.title}</Text>
              </View>

              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                  <FontAwesome name="user" size={16} color="#9F9F9F" style={{marginLeft: 2}}/>
                  <Text style={{fontSize: 10,fontWeight:'bold',  marginLeft: 5}}>{data.item.petani}</Text>
                  <Text style={{fontSize: 10,fontWeight:'bold',  marginLeft: 5, backgroundColor:'#3A915A', color:'white', borderRadius: 10}}>  {data.item.bedge}  </Text>
                </View>
              </View> 

              <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize: 10}}>Investasi Anda</Text>
                </View>
              </View>

              <View style={{marginBottom:5,flexDirection:'row',justifyContent:'flex-end'}}>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize: 10, fontWeight: 'bold', color: '#3A915A'}}>{data.item.totalinvestasi}</Text>
                </View>
              </View>

              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={{fontSize: 10}}>Ditutup Dalam</Text>
                  <Text style={{fontSize: 10}}>Keuntungan</Text>
              </View>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontSize: 11, fontWeight: 'bold', color: '#3A915A'}}>{data.item.hitunganmundur}</Text>
                <Text style={{fontSize: 11, fontWeight: 'bold', color: '#fff',backgroundColor:'#3A915A'}}> {data.item.keuntungan} </Text>
            </View>
            
            </View>

            <View style={{flexDirection:'row',width:'15%'}}>
              <TouchableOpacity onPress={toggleModal} style={{width:'100%',height:'100%', backgroundColor: '#3A915A', borderBottomRightRadius:8, borderTopRightRadius:8}}>
                <View style={{width:'100%',height:'100%',flexDirection:'column',justifyContent:'center'}}>
                  <Text style={{color:'#fff',alignSelf:'center',alignContent:'center',fontWeight:'bold'}}>
                    Top Up
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableHighlight>
      </Animated.View>
    );
  };

  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(120);

    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
      />
    );
  };

  return (
    <View>
      <StatusBar barStyle="dark-content"/>
      <Modal isVisible={isModalVisible} style={{flexDirection:'column',justifyContent:'flex-end'}}>
              <View style={{ borderColor:'#fff', height: 300,backgroundColor:'#fff', borderRadius:8,marginTop:'100%',width:'100%'}}>
              <Text style={{marginBottom:8,fontSize:15,fontWeight:'bold', margin:20}}>Tambah Investasi - Budidaya Padi</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
            <Text>Progres Investasi</Text>
            <Text>Target Investasi</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
            <Text style={{fontWeight: 'bold', color:'#3A915A'}}>Rp40.000.00</Text>
            <Text style={{fontWeight: 'bold', color:'#3A915A'}}>Rp134.000.000</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop:10}}>
            <Text>Deposit Anda</Text>
            <Text>Minimal Deposit</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
            <Text style={{fontWeight: 'bold', color:'#3A915A'}}>Rp10.000.00</Text>
            <Text style={{fontWeight: 'bold', color:'#3A915A'}}>Rp100.000</Text>
          </View>
          <View style={{flexDirection: 'column', marginHorizontal: 20, marginTop:20}}>
            <Text style={{fontWeight:'bold'}}>Tambah Deposit</Text>
            <TextInput placeholder="Rp100.000" placeholderTextColor="rgba(196, 196, 196, 50)" style={{backgroundColor: 'transparent',marginHorizontal:5}}></TextInput>
          </View>
                <View style={{flexDirection:'row', justifyContent:'space-between',margin:20}}>
                  <TouchableOpacity onPress={toggleModal} style={{justifyContent:'center',backgroundColor:'#3A915A', borderRadius: 5, height: 35, width: 90,marginHorizontal:20}}>
                      <Text style={{color:'#fff', fontWeight:'bold', textAlign: 'center'}}>Kembali</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleModal} style={{justifyContent:'center',backgroundColor:'#3A915A', borderRadius: 5, height: 35, width: 90,marginHorizontal:20}}>
                      <Text style={{color:'#fff', fontWeight:'bold', textAlign: 'center'}}>Konfirmasi</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    
  },
  button_1: {
    width: '40%',
    height: 30,
  },
  cardImgWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    

  },
  tabcontainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
      flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: '100%',
    padding: 0,
    marginBottom: 0,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: 'rgba(0,0,0,0)',
    right: 75,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  backRightBtnRight: {
    backgroundColor: 'rgba(0,0,0,0)',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
  card: {
    height: '100%',
    marginVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 0,
    color: 'black'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
