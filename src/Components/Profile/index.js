import { useAuth0 } from "@auth0/auth0-react";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";

const profileStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '1rem',
  // backgroundColor: '#333',
}

const imgStyle = {
  borderRadius: '50%',
  height: '40px',
  marginLeft: '1rem',
}

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();


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

  const createUser = async () => {
    //firestore logic
    let newUser = user.email; //from auth0 user obj
    console.log('createUser triggered', newUser)


    try {
      if (newUser) {
        const docRef = await setDoc(doc(db, 'users', newUser),
          {
            connections: [],
          })
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (error) {
      console.error(error)
    }

  }
  useEffect(() => {


    createUser();
    console.log('creating user in db...');

  }, [user])

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      <div style={profileStyle}>
        <img src={user.picture} alt={user.name} style={imgStyle} />
      </div>
    )
  );
};

export default Profile;
