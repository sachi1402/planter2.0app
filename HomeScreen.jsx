import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import Popup from './components/Popup';


export default function HomeScreen({ handlepredict, isLoaded, isPredicting, prediction, toggleHistory, AddHistory }) {

  const cameraRef = useRef()

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [openPopup, setOpenPopup] = useState(false)
  const [image, setImage] = useState(null)



  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === 'granted');

      const { status: galleryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (prediction && !isPredicting) {
      // save the image and date to history
      const data = {
        image,
        date: new Date().toLocaleDateString(),
        ...prediction
      }
      AddHistory(data)

    }
  }, [isPredicting, prediction, image])


  const takePicture = async () => {
    console.log("log cam");
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo?.uri) {
        setImage(photo.uri)
        handlepredict(photo.uri);
        setOpenPopup(true)
      }
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImage(result.assets[0].uri)
      handlepredict(result.assets[0].uri);
      setOpenPopup(true)
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <View style={styles.container}><Text style={styles.text}>No access to camera or gallery</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef} type={type}>
        <View style={styles.info}>
          {isLoaded && <>
            <LottieView
              autoPlay
              loop
              style={{
                width: 300,
                height: 300,
              }}
              source={require('./assets/loading.json')}
            />
            <Text style={styles.text}>Loading Model...</Text>
          </>}
        </View>
        <View style={styles.btnCont}>
          <TouchableOpacity style={styles.galleryButton} onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
            <MaterialIcons name="flip-camera-android" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.captureButton} onPress={isLoaded ? () => console.log('sssss') : takePicture}>
            <View style={styles.captureRing} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.galleryButton} onPress={isLoaded ? () => console.log('ssw') : pickImage}>
            <Entypo name="images" size={30} color="white" />
          </TouchableOpacity>
        </View>

      </Camera>

      {openPopup && <Popup image={image} isPredicting={isPredicting} handleClose={() => { setOpenPopup(false) }} prediction={prediction} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 50
  },
  info: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'white',
  },
  galleryButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    color: 'white',
  },
  HistoryBtn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',

  }
})
