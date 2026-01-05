import MainLayout from './components/main';
import { Typography, Button, Card, Col, Row, Tag, Carousel, Divider, Space } from 'antd';
import { 
  CheckCircleFilled, 
  WhatsAppOutlined, 
  SafetyOutlined, 
  ExperimentOutlined,
  EnvironmentOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Home() {
  const logoWrapperStyle: React.CSSProperties = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  };

  const logoImgStyle: React.CSSProperties = {
    maxHeight: '60px',
    maxWidth: '85%',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    opacity: 0.7,
    transition: 'all 0.3s ease'
  };

  return (
    <MainLayout>
      {/* SECCIÓN HERO */}
      <div style={{ 
        padding: '60px 20px', 
        background: 'linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)', 
        borderRadius: '20px',
        marginBottom: '40px',
        textAlign: 'center',
        border: '1px solid #b7eb8f'
      }}>
        <Tag color="success" style={{ marginBottom: '10px' }}>CERTIFICADOS</Tag>
        <Title level={1} style={{ color: '#135200', marginTop: 0 }}>PLA SRL SANITIZACIÓN</Title>
        <Paragraph style={{ fontSize: '18px', color: '#389e0d' }}>
          Protegiendo tu salud y tus espacios con estándares industriales.
        </Paragraph>
        <Button 
          type="primary" 
          size="large" 
          icon={<WhatsAppOutlined />} 
          style={{ background: '#389e0d', borderColor: '#389e0d', borderRadius: '25px' }}
        >
          Cotizar Ahora
        </Button>
      </div>

      
      <div style={{ marginBottom: '60px' }}>
        <Divider orientation="horizontal">CONFIAN EN NOSOTROS</Divider>
        <Carousel autoplay dots={false} slidesToShow={3} responsive={[{ breakpoint: 768, settings: { slidesToShow: 1 } }]}>
          <div><div style={logoWrapperStyle}><img src="/nacional.png" style={logoImgStyle} className="client-logo" /></div></div>
          <div><div style={logoWrapperStyle}><img src="/jumbo.jpg" style={logoImgStyle} className="client-logo" /></div></div>
          <div><div style={logoWrapperStyle}><img src="/MERCA-JUMBO.png" style={logoImgStyle} className="client-logo" /></div></div>
        </Carousel>
      </div>

      {/* TARJETAS - Usando 'top' o 'bottom' para evitar el error de 'middle' */}
      <Row gutter={[24, 24]} align="top"> 
        {[
          { title: 'Desinfección', icon: <SafetyOutlined />, color: '#389e0d' },
          { title: 'Fumigación', icon: <ExperimentOutlined />, color: '#73d13d' },
          { title: 'Control Total', icon: <CheckCircleFilled />, color: '#237804' }
        ].map((item, i) => (
          <Col xs={24} md={8} key={i}>
            <Card hoverable style={{ textAlign: 'center', borderRadius: '15px' }}>
              <div style={{ fontSize: '40px', color: item.color, marginBottom: '15px' }}>{item.icon}</div>
              <Title level={4}>{item.title}</Title>
              <Text type="secondary">Calidad garantizada PLA SRL.</Text>
            </Card>
          </Col>
        ))}
      </Row>

      {/* SECCIÓN DE MAPA Y UBICACIÓN */}
      <div style={{ marginTop: '80px', marginBottom: '40px' }}>
        <Divider orientation="horizontal">NUESTRA UBICACIÓN</Divider>
        <Row gutter={[32, 32]} align="top">
          <Col xs={24} md={12}>
            <Title level={3} style={{ color: '#003d29' }}>Visítanos</Title>
            <Paragraph>
              Estamos ubicados estratégicamente para brindar cobertura en todo el 
              Distrito Nacional y zonas aledañas.
            </Paragraph>
            <Space direction="vertical">
              <Text><EnvironmentOutlined style={{ color: '#389e0d' }} /> Santo Domingo, República Dominicana</Text>
              <Text strong>Horario: Lun - Sáb: 8:00 AM - 6:00 PM</Text>
            </Space>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ borderRadius: '15px', overflow: 'hidden', border: '1px solid #d9f7be' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m1!1s0x8eaf883906f0e393:0x7940e4f346944e0b!2sSanto+Domingo!5e0!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx global>{`
        .client-logo:hover { filter: grayscale(0%) !important; opacity: 1 !important; transform: scale(1.1); }
      `}</style>
    </MainLayout>
  );
}