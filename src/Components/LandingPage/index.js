import { Typography, Image, Row, Col } from 'antd';

import './LandingPage.css';

const { Title, Text } = Typography;

function LandingPage() {
  return (
    <>
      <div className='container'>

        <Row justify="space-around"
          align="middle"
          gutter={{ xs: 20, sm: 16, md: 24, lg: 32 }}
          className='row'>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className='col'>
            <Title className='hero-title'>Your Job Search. Optimized.</Title>
            <Text className='text'>WenJobs gives you the tools to find in-network Web3 opportunities and identify the connections that can help you land your next role.</Text>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Image
              src='https://img.freepik.com/free-vector/successful-partnership-negotiation-partners-handshaking_335657-2453.jpg?w=740&t=st=1669081435~exp=1669082035~hmac=8059dd027dd3c834df7a452354f321fc5246ad57438168f79ce47c195da8079c'
              preview={false}
            />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default LandingPage;