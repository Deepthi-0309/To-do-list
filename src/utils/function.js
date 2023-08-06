import db from './db'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

export const getTodos = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "todos"));
        return querySnapshot
    } catch (error) {
        console.log("Error getting documents: ", error);
    }
    
}

export const addTodoDB = async (todo) => {
    try {
        const todoRef = collection(db, 'todos');
        await addDoc(todoRef, { todo: todo });
    } catch (error) {
        console.error('Error adding document: ', error);
    }
}