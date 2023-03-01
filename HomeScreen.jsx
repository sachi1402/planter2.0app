import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import ImageEditor from '@react-native-community/image-editor';


export default function HomeScreen({handlepredict}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === 'granted');

      const { status: galleryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    console.log("log cam");
    if (camera) {
      const photo = await camera.takePictureAsync();
      setImage(photo.uri);
      handlepredict(photo.uri);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    //   const editedImage = await ImageEditor.cropImage(result.assets[0].uri, {
    //     offset: { x: 0, y: 0 },
    //     size: { width: 256, height: 256 },
    //   });
      handlepredict(result.assets[0].uri);
    }
  };

//   const predictImage = async (uri) => {
//     const img = await ImageManipulator.manipulateAsync(uri, [], { compress: 0.5 });
//     const imageTensor = tf.browser.fromPixels(img);
//     const batchedImage = imageTensor.expandDims(0).toFloat().div(tf.scalar(255));
//     const predictionTensor = model.predict(batchedImage);
//     const predictionData = await predictionTensor.data();
//     setPrediction(predictionData);
//   };

  if (hasCameraPermission === null || hasGalleryPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera or gallery</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {image && <Image source={{ uri: image }} style={{ flex: 1 }} resizeMode="contain" />}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Take Picture" onPress={takePicture} />
        <Button title="Pick Image" onPress={pickImage} />
      </View>
      {prediction && (
        <View style={{ alignItems: 'center' }}>
          <Text>Prediction: {prediction[0]}</Text>
        </View>
      )}
    </View>
  );
}
