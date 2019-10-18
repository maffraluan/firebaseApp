import Firebasekey from './config';
import firebase from 'firebase';

class Fire {
    constructor() {
        firebase.initializeApp(Firebasekey)
    }

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;