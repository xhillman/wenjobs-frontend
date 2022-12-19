import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import { Alert, Space } from 'antd';
import Papa from 'papaparse';
import { useDispatch, useSelector } from 'react-redux';
import { setConnectionsData } from '../../Store/slices/connections';
import { doc, updateDoc } from 'firebase/firestore';
import db from "../Firebase/FirebaseConfig";
import { useAuth0 } from "@auth0/auth0-react";
import './style.css'



const UploadConnections = () => {

    let connectionsData = useSelector(state => state.connections.connections);

    const dispatch = useDispatch();

    const { user, isAuthenticated } = useAuth0();

    const handleFile = (info) => {

        if (isAuthenticated) {
            // console.log(info);
            console.log('authenticated', user.email)
            try {
                Papa.parse(info.file, {
                    header: true,
                    complete: (result) => {
                        console.log(result.data);
                        dispatch(setConnectionsData(result.data))
                        console.log('papa parse connections ', connectionsData)
                    }
                });
                console.log('papa parse connections ', connectionsData);
                addConnectionsData();
                info.onSuccess(info.file);
            } catch (error) {
                console.error(error);
            };
        }
    }


    const addConnectionsData = async () => {
        console.log(user.email)
        try {
            if (connectionsData) {
                const ref = doc(db, 'users', user.email);
                await updateDoc(ref, {
                    connections: connectionsData
                });
                console.log('added connections data to DB')

            }
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    }

    return (
        <>
            {/* <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
            >
                <Alert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    closable
                />
            </Space> */}

            <Upload customRequest={handleFile}>
                <Button className='uploadCSVButton' icon={<UploadOutlined />}>Upload CSV</Button>
            </Upload>
        </>
    );
}

export default UploadConnections;