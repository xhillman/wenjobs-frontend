import { Typography } from 'antd';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '3rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
}

const titleStyle = {
  margin: '0',
}

const userInfoStyle = {
  display: 'flex',
  alignItems: 'center',
}
const optionItemStyle = {
  // display: 'flex',
  margin: '.5rem',
  paddingLeft: '.5rem',
  paddingRight: '.5rem',
  border: 'solid black 1px',
  justifyContent: 'space-evenly',
  color: 'black',
  borderRadius: '25%'
}
const optionStyle = {
  marginLeft: '6rem',
  
}

function Header() {

  const { isAuthenticated } = useAuth0();

  return (
    <header style={headerStyle}>
      <Title level={3} style={titleStyle}>WenJobs</Title>
      
      {
          isAuthenticated ?
            <div style={optionStyle}>

              <Link style={optionItemStyle} to='/'>Home</Link>
              <Link style={optionItemStyle} to='/Companies'>Companies</Link>
              <Link style={optionItemStyle} to='/Roles'>Roles</Link>
              <Link style={optionItemStyle} to='/Connections'>Connections</Link>

            </div> :
            null
        }

      <div style={userInfoStyle}>
        <Profile />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  )
}

export default Header;