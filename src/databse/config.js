//feel free to send me any images into database i will comment it :)
import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAGyqK8NKbYSNPArVtzLxhAxxO4i8R_WwY",
    authDomain: "photowall-cdd66.firebaseapp.com",
    databaseURL: "https://photowall-cdd66.firebaseio.com",
    projectId: "photowall-cdd66",
    storageBucket: "photowall-cdd66.appspot.com",
    messagingSenderId: "52886047670"
};

firebase.initializeApp(config)
const database = firebase.database()

export {database}
