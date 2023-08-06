
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
        apiKey: "AIzaSyDGz30zlAb5flCtO_1KB4ZERa7LRBtGbJY",
        authDomain: "to-do-40bc7.firebaseapp.com",
        projectId: "to-do-40bc7",
        storageBucket: "to-do-40bc7.appspot.com",
        messagingSenderId: "685041227107",
        appId: "1:685041227107:web:b60faef4be3e09816baf56",
        measurementId: "G-NN3H6H83SJ"
      };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;