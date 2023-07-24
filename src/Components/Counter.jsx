import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Counter = () => {
    
    const count = 0

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}> - </Text>
                </Pressable>

                <Text style={styles.span}>{count}</Text>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}> + </Text>
                </Pressable>
            </View>
            
            <View style={styles.buttonsContainer}>
                <TextInput
                    placeholder='Cantidad a aumentar'
                    style={styles.spanInput}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}> Add </Text>
                </Pressable>
            </View>
            
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}> Reset </Text>
            </Pressable>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({})