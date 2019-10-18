import React from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation
} from 'react-native';
import * as firebase from 'firebase';

import Icon from 'react-native-vector-icons/Ionicons';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    state = {
        name: '',
        email: '',
        password: '',
        errorMessage: null,
    };

    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({ errorMessage: error.message }));
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <Image
                    source={require('../assets/image.jpg')}
                    style={{width: '100%', height: '50%', marginTop: -174, borderBottomLeftRadius: 180, borderBottomRightRadius: 180}} />

                <Image 
                    source={require('../assets/image.jpg')}
                    style={{ width: '100%', height: '30%', position: 'absolute', bottom: -160, left: 200, borderTopLeftRadius: 250,}} />
                <Image 
                    source={require('../assets/image.jpg')}
                    style={{ width: '100%', height: '30%', position: 'absolute', bottom: -160, right: 200, borderTopRightRadius: 250,}} />


                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}> 
                    <Icon name="ios-arrow-round-back" size={32} color="#fff" />
                </TouchableOpacity>

                
                    <Text style={styles.greeting}>{`Hello!\nSign up to get started.`}</Text>


                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput style={styles.input} 
                         autoCapitalize="none"
                         onChangeText={name => this.setState({ name })}
                         value={this.state.name} />
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Email address</Text>
                        <TextInput style={styles.input} 
                         autoCapitalize="none"
                         onChangeText={email => this.setState({ email })}
                         value={this.state.email} />
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} 
                            secureTextEntry 
                            autoCapitalize="none" 
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password} />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ color: '#fff', fontWeight: '500' }}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }}
                    onPress={ () => this.props.navigation.navigate('Login')}>
                    <Text style={{ color: '#414959', fontSize: 13 }}>
                        Have an account already? <Text style={{ fontWeight: '500', color: '#e9446a' }}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    error: {
        color: '#e9448a',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase',
    },
    input: {
        borderBottomColor: '#8A8f9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161f3d',
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#e9446a',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        position: 'absolute',
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    }
})