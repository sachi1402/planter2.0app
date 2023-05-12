import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { log } from '@tensorflow/tfjs'

const HistoryScreen = ({ toggleHistory, historyData }) => {
  console.log(historyData);
  return (
    <View style={styles.HistoryScreen}>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.list}>

          {historyData.map((data, index) => (
            <View key={index} style={styles.listItem}>
              <Image source={{ uri: data.image }} style={{ width: 50, height: 50 }} />
              <View style={styles.historyData}>
                <Text>{data.title}</Text>
                <Text>{data.description}</Text>
                <Text>{data.date}</Text>
              </View>
            </View>
          ))}

        </View>
      </ScrollView>


    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  HistoryScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: '100%'
  },
  list: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  listItem: {
    backgroundColor: '#ccc',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  historyData: {
    marginLeft: 10,

  },
  HistoryBtn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    bottom: 0
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})