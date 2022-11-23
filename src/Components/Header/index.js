import { Typography } from 'antd';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import './style.css'
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

              <Link className='linkButton' to='/'>Home</Link>
              <Link className='linkButton'to='/Companies'>Companies</Link>
              <Link className='linkButton'to='/Roles'>Roles</Link>
              <Link className='linkButton'to='/Connections'>Connections</Link>

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