import { initializeApp } from '@firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCGY670zOKEdQIO6qn0r9E7iaskkAhBbUE",
    authDomain: "insites-208d2.firebaseapp.com",
    projectId: "insites-208d2",
    storageBucket: "insites-208d2.appspot.com",
    messagingSenderId: "394345433966",
    appId: "1:394345433966:web:ecd8ba35db5291d6808f7f"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
