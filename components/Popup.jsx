import { ImageBackground, StyleSheet, Text, View, Button, Modal } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


const Popup = ({ image, isPredicting, handleClose, prediction }) => {
    return (
        <Modal style={styles.container} transparent={true} >
            <View style={styles.popupContainer}>
                <ImageBackground source={{ uri: image }} style={styles.image} resizeMethod="resize" >
                    {isPredicting && <>
                        <LottieView
                            autoPlay
                            loop
                            style={{
                                width: 300,
                                height: 300,
                            }}
                            source={require('./../assets/scane.json')}
                        />
                        <Text style={styles.text}>Scanning Image...</Text>
                    </>}
                </ImageBackground>
                <Text style={styles.value}>{prediction?.title}</Text>
                <Text style={styles.para}>{prediction?.description}</Text>
                <Button style={styles.button} title={"Close"} onPress={handleClose} />
            </View>
        </Modal>
    )
}

export default Popup

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
       
    },
    popupContainer: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ABC270',
        marginTop: "40%",
        padding: 20,
        borderRadius: 20
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 15,
        overflow: 'hidden',
        // height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop:-20,
        color:'#0004',
        marginBottom: 10
    },
    value: {
        color: '#473C33',
        margin: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    para :{
        color: '#473C33',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        color:'#0004',
        
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
        paddingHorizontal: 20
    }
})