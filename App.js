import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import { fetch, bundleResourceIO } from '@tensorflow/tfjs-react-native';
import HomeScreen from './HomeScreen';
import { manipulateAsync } from 'expo-image-manipulator';
import transformImageToTensor from './utils/TfConverter';
import plantData from './assets/plantData'
import HistoryScreen from './HistoryScreen';
import { TouchableOpacity } from 'react-native';
function App() {
  const [modelstate, setmodelstate] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true)
  const [isPredicting, setIsPredicting] = useState(false)
  const [prediction, setPrediction] = useState(null)

  const [showHistory, setShowHistory] = useState(false)

  const [historyData, setHistoryData] = useState([])

  const desis = ["Apple   Apple scab", "Apple   Black rot", "Apple   Cedar apple rust", "Apple   healthy", "Blueberry   healthy", "Cherry (including sour)   healthy", "Cherry (including sour)   Powdery mildew", "Corn (maize)   Cercospora leaf spot Gray leaf spot", "Corn (maize)  Common rust", "Corn (maize)   healthy", "Corn (maize)   Northern Leaf Blight", "Grape   Black rot", "Grape  Esca(Black Measles)", "Grape   healthy", "Grape  Leaf blight(Isariopsis Leaf Spot)", "Orange  Haunglongbing(Citrus greening)", "Peach   Bacterial spot", "Peach   healthy", "Pepper,bell  Bacterial spot", "Pepper,bell  healthy", "Potato   Early blight", "Potato   healthy", "Potato   Late blight", "Raspberry   healthy", "Soybean   healthy", "Squash   Powdery mildew", "Strawberry   healthy", "Strawberry   Leaf scorch", "Tomato   Bacterial spot", "Unrecognized"]

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
      setIsLoaded(false)
    }
    loadModel()
  }, []);

  const AddHistory = (data) => {
    setHistoryData([...historyData, data])
  }

  // togle history screen
  const toggleHistory = () => {
    setShowHistory(!showHistory)
  }

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
    setPrediction(null)
    console.log(url);
    setIsPredicting(true)
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
      console.log("index:", index, '+length of predic arr=', fei[0].length, '+length of dois arr is = ', desis.length);
      setPrediction(index < 32 ? plantData[index] : {
        name: "unrecognized",
        title: "unrecognized",
        description: " "
      })
      // console.log(desis[index], 'fei', desis.length)
      setIsPredicting(false)
    })();
  }
  return (
    <View style={styles.container}>

      {showHistory ? <HistoryScreen toggleHistory={toggleHistory} historyData={historyData} /> : <HomeScreen handlepredict={handlepredict} isLoaded={isLoaded} isPredicting={isPredicting} prediction={prediction} toggleHistory={toggleHistory} AddHistory={AddHistory} />}
      <TouchableOpacity onPress={() => toggleHistory()} style={styles.HistoryBtn}>
        <Text style={styles.text} >{
          showHistory ? 'Home' : 'History'
        }</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    width: '100%'
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
  HistoryBtn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#cccccc33',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ABC270',
  }


});

export default App;
