import MainLayout from '../components/main';
import { Typography, Button, Card, Col, Row, Tag, Carousel, Divider, Space, Image } from 'antd';
import { 
  WhatsAppOutlined, 
  ArrowRightOutlined,
  GlobalOutlined,
  RocketOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons';
import Link from 'next/link';

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
      {/* 1. SECCIÓN HERO - ISLACORP */}
      <div style={{ 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #001529 0%, #003a8c 100%)', 
        borderRadius: '0 0 50px 50px',
        marginBottom: '60px',
        textAlign: 'center',
        color: 'white'
      }}>
        <Tag color="blue" style={{ marginBottom: '15px' }}>GRUPO EMPRESARIAL</Tag>
        <Title level={1} style={{ color: 'white', fontSize: '48px', marginBottom: '10px' }}>ISLACORP SRL</Title>
        <Paragraph style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto 30px' }}>
          Soluciones integrales en sanitización avanzada y mantenimiento técnico con drones de vanguardia.
        </Paragraph>
        <Space size="middle">
          <Button type="primary" size="large" href="#empresas" style={{ borderRadius: '25px', height: '50px' }}>
            Nuestras Empresas
          </Button>
          <Button ghost size="large" icon={<WhatsAppOutlined />} href="https://wa.me/18295422989" target="_blank" style={{ borderRadius: '25px', height: '50px' }}>
            Contacto Directo
          </Button>
        </Space>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* 2. PRESENTACIÓN DE LAS DOS EMPRESAS */}
        <Title level={2} id="empresas" style={{ textAlign: 'center', marginBottom: '40px' }}>Nuestras Divisiones</Title>
        
        <Row gutter={[32, 32]}>
          {/* TARJETA PLA */}
          <Col xs={24} md={12}>
            <Card 
              hoverable 
              style={{ borderRadius: '20px', overflow: 'hidden', borderTop: '6px solid #389e0d' }}
              cover={<div style={{ background: '#f6ffed', padding: '40px', textAlign: 'center' }}>
                <Image src="/pla-logo.png" preview={false} style={{ maxHeight: '80px' }} />
              </div>}
            >
              <Title level={3}>PLA Sanitización</Title>
              <Paragraph>Líderes en control de plagas y desinfección industrial. Protegemos la salud de tus espacios con estándares de alta calidad.</Paragraph>
              <Link href="/servicios">
                <Button type="primary" block style={{ background: '#389e0d', borderColor: '#389e0d' }} icon={<ArrowRightOutlined />}>
                  Ver Servicios de Sanitización
                </Button>
              </Link>
            </Card>
          </Col>

          {/* TARJETA VERTICLEAN */}
          <Col xs={24} md={12}>
            <Card 
              hoverable 
              style={{ borderRadius: '20px', overflow: 'hidden', borderTop: '6px solid #1890ff' }}
              cover={<div style={{ background: '#e6f7ff', padding: '40px', textAlign: 'center' }}>
                <Image src="/VertiClean-PrimaryLogo_page-0001.jpg" preview={false} style={{ maxHeight: '80px' }} />
              </div>}
            >
              <Title level={3}>VertiClean</Title>
            <Paragraph>Innovación en limpieza de fachadas y paneles solares mediante drones. 78% más rápido y 100% seguro.</Paragraph>
            <Link href="/vertiClean"> {/* <--- ELIMINA /components/ y deja solo el nombre del archivo */}
         <Button type="primary" block style={{ background: '#1890ff', borderColor: '#1890ff' }} icon={<ArrowRightOutlined />}>
           Ver Tecnología de Drones
           </Button>
          </Link>
            </Card>
          </Col>
        </Row>

        {/* 3. EL CARRUSEL DE CONFIANZA (Se mantiene de tu código) */}
        <div style={{ padding: '80px 0' }}>
          <Divider orientation="horizontal">EMPRESAS QUE CONFÍAN EN EL GRUPO</Divider>
          <Carousel autoplay dots={false} slidesToShow={5} responsive={[{ breakpoint: 1024, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }]}>
            {[
              { src: "/Referencia-logo.png", alt: "Laboratorio Referencia" },
              { src: "/Ccn-logo.webP", alt: "CCN" },
              { src: "/Synergies-logo.png", alt: "Synergies" },
              { src: "/Eted-logo.png", alt: "ETED" },
              { src: "/Changan-logo.png", alt: "Changan" },
              { src: "/Mayol-logo.webP", alt: "Mayol & Co" },
              { src: "/BD-logo.jpg", alt: "Bonanza Dominicana" },
              { src: "/Elias-logo.png", alt: "Elias Distribución" },
              { src: "/Cine-logo.webP", alt: "Cinematográfica Blancica" }
            ].map((cliente, index) => (
              <div key={index}>
                <div style={logoWrapperStyle}>  
                  <img src={cliente.src} alt={cliente.alt} style={logoImgStyle} className="client-logo" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* 4. VALORES DE ISLACORP */}
        <Row gutter={[24, 24]} style={{ marginBottom: '80px' }}>
          <Col xs={24} md={8}>
            <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
              <SafetyCertificateOutlined style={{ fontSize: '40px', color: '#faad14' }} />
              <Title level={4}>Seguridad Certificada</Title>
              <Text type="secondary">Protocolos rigurosos en cada operación.</Text>
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
              <RocketOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
              <Title level={4}>Innovación Constante</Title>
              <Text type="secondary">Tecnología de drones de última generación.</Text>
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
              <GlobalOutlined style={{ fontSize: '40px', color: '#52c41a' }} />
              <Title level={4}>Alcance Nacional</Title>
              <Text type="secondary">Servicios en todo el territorio dominicano.</Text>
            </Space>
          </Col>
        </Row>
      </div>

      <style jsx global>{`
        .client-logo:hover { filter: grayscale(0%) !important; opacity: 1 !important; transform: scale(1.1); }
      `}</style>
    </MainLayout>
  );
}