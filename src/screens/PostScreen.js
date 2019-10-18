import React from 'react';
import { View, Text, StyleSheet, 
TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class PostScreen extends React.Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate('Home')} >
                        <Icon name="md-arrow-back"
                            size={24}
                            color="#d8d9d8" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: '500' }}>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Image source={require('../assets/people.png')}
                        style={styles.avatar} />
                    <TextInput 
                        autoFocus={true} multiline={true} 
                        numberOfLines={4} style={{ flex: 1}}
                        placeholder="Share something with us!" />
                </View>

                <TouchableOpacity style={styles.photo}>
                    <Icon name="md-camera" size={32}
                        color="#d8d9db" />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#d8d9d8'
    },

    inputContainer: {
        margin: 32,
        flexDirection: 'row',
    },

    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },

    photo: {
        alignItems: 'flex-end',
        marginHorizontal: 32,
    }
})