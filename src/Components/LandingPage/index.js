import { Typography, Image, Row, Col } from 'antd';

const { Title, Text } = Typography;

const containerStyle = {
  height: '80vh',
  display: 'flex',
  width: '95%',
  marginLeft: 'auto',
  marginRight: 'auto',
}
const titleStyle = {
  fontSize: '4em',
}

const textStyle = {
  fontSize: '1.25em',
}

const rowStyle = {
  marginTop: 'auto',
  marginBottom: 'auto',
}

const colStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
}

function LandingPage() {
  return (
    <>
    <div style={containerStyle}>

      <Row justify="space-around" align="middle" gutter={{ xs: 20, sm: 16, md: 24, lg: 32 }} style={rowStyle}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={colStyle}>
            <Title style={titleStyle}>Your Job Search. Optimized.</Title>
            <Text style={textStyle}>WenJobs gives you the tools to find in-network Web3 opportunities and identify the connections that can help you land your next role.</Text>
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