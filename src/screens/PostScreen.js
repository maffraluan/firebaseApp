import React from 'react';
import { View, Text, StyleSheet, 
TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import Fire from '../../Fire';


export default class PostScreen extends React.Component {
    state = {
        text: '',
        image: null,
    }
    handleChoosePhoto(){
        const options = {
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          
          /**
           * The first arg is the options object for customization (it can also be null or omitted for default options),
           * The second arg is the callback which sends object: response (more info in the API Reference)
           */
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
          });
    }
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

                <TouchableOpacity 
                    onPress={this.handleChoosePhoto}
                    style={styles.photo}>
                    <Icon name="md-camera" size={32}
                        color="#d8d9db" />
                </TouchableOpacity>

                <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
                    <Image source={this.state.avatarSource} style={{ width: '100%', height: '100%'}} />
                </View>
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