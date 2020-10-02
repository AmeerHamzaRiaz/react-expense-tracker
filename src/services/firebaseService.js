import firebase from 'firebase';

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "apiKey",
        authDomain: "authDomain",
        databaseURL: "databaseURL",
        projectId: "projectId",
        storageBucket: "storageBucket",
        messagingSenderId: "messagingSenderId",
        appId: "appId"
    });
}

export const askForPermissioToReceiveNotifications = async () => {
    if (!firebase.apps.length) {
        initializeFirebase();
    }
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('token :', token);
        return token;
    } catch (error) {
        console.error(error);
    }
}