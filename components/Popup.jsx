import { ImageBackground, StyleSheet, Text, View, Button, Modal } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


const Popup = ({ image, isPredicting, handleClose, prediction }) => {
    return (
        <Modal style={styles.container}>
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
                <Text style={styles.value}>{prediction}</Text>
                <Button style={styles.button} title={"Close"} onPress={handleClose} />
            </View>
        </Modal>
    )
}

export default Popup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
    },
    popupContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
        marginBottom: 10
    },
    value: {
        color: '#000',
        margin: 15,
        fontWeight: 'bold',
        fontSize: 28
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