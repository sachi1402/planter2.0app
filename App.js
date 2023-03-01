import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import { fetch, bundleResourceIO } from '@tensorflow/tfjs-react-native';
import HomeScreen from './HomeScreen';
import { manipulateAsync } from 'expo-image-manipulator';
import transformImageToTensor from './utils/TfConverter';

function App() {
  const [modelstate, setmodelstate] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function loadModel() {
      console.log("[+] Application started")
      const tfReady = await tf.ready();
      console.log("[+] Loading custom ")
      const modelJson = await require("./assets/model/model.json");
      const modelWeight = await require("./assets/model/group1-shard1of1.bin");
      console.log('sdsd')
      const modelLoader = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));
      console.log("[+] Loading pre-trained ")
      setmodelstate(modelLoader)
      console.log("[+] Model Loaded")
      setIsLoaded(true)
    }
    loadModel()
  }, []);

  const runTfConverter = async (uri) => {
    const convertFc = async () => {
      const tensorImage = await transformImageToTensor(
        uri,
        256,
        256
      )
      return tensorImage
    }

    return await convertFc().then((t_image) => t_image)
  }

  const handlepredict = async (url) => {
    console.log(url);

    const imageResize = await runTfConverter(url)
    console.log(imageResize, 'resixe');
    const upscale = imageResize.expandDims(0)
    console.log(upscale, 'up');
    (async () => {
      const prediction = await modelstate.predict(upscale);
      console.log(prediction, 'fy');
      let fei = await prediction.array()
      console.log(fei);



      const max = Math.max(...fei[0]);
      const index = fei[0].indexOf(max);
      console.log("index:", index);
      setpred(desis[index])
      console.log(desis[index], 'fei', desis.length)
    })();
  }
  return (
    <HomeScreen handlepredict={handlepredict} isLoaded={isLoaded} />
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
