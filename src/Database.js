import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const Database = () => {

    const addData = async () => {
        const firebaseConfig = {
            apiKey: 'AIzaSyDEZe5LjMna_JwHWWUTz7WoQ9rnSDcHYR8',
            authDomain: 'wenjobs-fba5d.firebaseapp.com',
            projectId: 'wenjobs-fba5d',
            storageBucket: 'wenjobs-fba5d.appspot.com',
            messagingSenderId: '1030799827901',
            appId: '1:1030799827901:web:68dba6c523f20abd3a68d4',
            measurementId: 'G-J006Q916VK',
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        // Initialize Cloud Firestore and get a reference to the service
        const db = getFirestore(app);

        try {
            const docRef = await addDoc(collection(db, 'connections'), {
                Company: 'CHI Franciscan Health',
                Connected_On: '17 Nov 2022',
                Email: '',
                First: 'Elaine',
                Last: 'Huynh',
                Position: 'ritical Care Registered Nurse',
            });
            console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    }

    return (
        <>
            <button onClick={addData}>add new collection item</button>
            <h1>Database</h1>
        </>
    );
}

export default Database;


// Elaine	Huynh		CHI Franciscan Health	Critical Care Registered Nurse	17 Nov 2022
