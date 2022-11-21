import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, List, UploadProps } from 'antd';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { parse } from 'papaparse';





const Database = () => {

    const [data, setData] = useState([]);


    const props = {
        name: 'file',

        beforeUpload: (file) => {
            let csvData;
            const reader = new FileReader();
            console.log('YOOOOOOO', file);
            reader.onload = e => console.log(e.target.result);
            
            console.log(csvData);

            
            



        }
    };



    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID,
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

            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>

        </>
    );
}

export default Database;


// Elaine	Huynh		CHI Franciscan Health	Critical Care Registered Nurse	17 Nov 2022
