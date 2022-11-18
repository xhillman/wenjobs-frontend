import { List } from 'antd';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const Database = () => {

    const [data, setData] = useState([]);
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


    const addData = async () => {


        try {
            const docRef = await addDoc(collection(db, 'connections'), {
                Company: 'CHI Franciscan Health',
                Connected_On: '17 Nov 2022',
                Email: '',
                First: 'Elaine',
                Last: 'Huynh',
                Position: 'Critical Care Registered Nurse',
            });
            console.log('Document written with ID: ', docRef.id);
            setData([{ docRef }]);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    }

    const readData = async () => {

        let connectionsArray = [];


        const querySnapshot = await getDocs(collection(db, "connections"));
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${JSON.stringify(doc)}`);
            const newItem = doc.data();
            connectionsArray.push(newItem);
        });
        setData(connectionsArray);
    }

    return (
        <>
            <h1>Database</h1>
            <button onClick={addData}>add new collection item</button>
            <button onClick={readData}>add all collection items to state</button>
            {data &&
                <List
                    itemLayout='horizontal'
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.First}
                                description={item.Position} />
                        </List.Item>
                    )}

                />
            }

        </>
    );
}

export default Database;


// Elaine	Huynh		CHI Franciscan Health	Critical Care Registered Nurse	17 Nov 2022
