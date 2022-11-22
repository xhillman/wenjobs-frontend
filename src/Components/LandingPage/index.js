import { Typography, Image } from 'antd';

const { Title, Text } = Typography;

const heroSection = {
  display: 'flex',
  alignItems: 'center',
}

const heroTextStyle = {
  width: '20rem',
  backgroundColor: 'lightgrey',
  marginLeft: '5rem',
  height: 'fit-content',
}

const titleStyle = {
  marginTop: '0',
}

function LandingPage() {
  return (
    <div style={heroSection}>
      <div style={heroTextStyle}>
        <Title level={1} style={titleStyle}>Your Job Search. Optimized.</Title>
        {/* <Title level={2} style={titleStyle}>Optimized.</Title> */}
        <Text >WenJobs gives you the tools to find in-network Web3 jobs and identify the connections that can help you land your next role.</Text>
      </div>
      <Image
        width={600}
        src='https://img.freepik.com/free-vector/successful-partnership-negotiation-partners-handshaking_335657-2453.jpg?w=740&t=st=1669081435~exp=1669082035~hmac=8059dd027dd3c834df7a452354f321fc5246ad57438168f79ce47c195da8079c'
      />
    </div>
  )
}

export default LandingPage;