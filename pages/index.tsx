import React, { useState, useEffect } from 'react';
import MainLayout from '../components/main';
import { Typography, Button, Card, Col, Row, Tag, Carousel, Divider, Space, Image } from 'antd';
import { 
  WhatsAppOutlined, 
  ArrowRightOutlined,
  GlobalOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Title, Paragraph, Text } = Typography;

// --- COMPONENTE NAVBAR INTERNO OPTIMIZADO ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1001, // Un nivel más alto que el MainLayout
      padding: '10px 20px', // Reducido para móviles
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.4s ease',
      opacity: scrolled ? 1 : 0,
      pointerEvents: scrolled ? 'auto' : 'none',
      transform: scrolled ? 'translateY(0)' : 'translateY(-100%)',
      background: 'rgba(0, 21, 41, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img 
          src="/islacorp-logo.jpeg" 
          alt="Logo" 
          style={{ width: '30px', height: '30px', borderRadius: '4px', background: 'white', padding: '2px' }} 
        />
        <Text style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>ISLACORP</Text>
      </div>
      <Space>
        <Button 
          type="primary" 
          size="small"
          icon={<WhatsAppOutlined />}
          href="https://wa.me/18295422989"
          style={{ background: '#1890ff', fontWeight: 'bold' }}
        >
          CONTACTO
        </Button>
      </Space>
    </nav>
  );
};

export default function Home() {
  const logoWrapperStyle: React.CSSProperties = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
  };

  const logoImgStyle: React.CSSProperties = {
    maxHeight: '50px',
    maxWidth: '90%',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    opacity: 0.6,
    transition: 'all 0.3s ease'
  };

  return (
    <MainLayout>
      <Navbar />
      
      {/* 1. SECCIÓN HERO RESPONSIVE */}
      <div style={{ 
        padding: 'clamp(100px, 15vh, 160px) 20px 80px', 
        background: 'radial-gradient(circle at top right, #003a8c, #001529)', 
        borderRadius: '0 0 40px 40px',
        marginBottom: '40px',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decoración fondo */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px',
          background: 'rgba(24, 144, 255, 0.1)', filter: 'blur(60px)', borderRadius: '50%'
        }} />

        <Tag color="blue" style={{ background: 'rgba(24, 144, 255, 0.1)', border: '1px solid #1890ff', color: '#1890ff', marginBottom: '25px' }}>
          SOLUCIONES DE VANGUARDIA
        </Tag>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '20px', 
          marginBottom: '30px'
        }}>
          <div style={{
            width: 'clamp(100px, 25vw, 150px)',
            height: 'clamp(100px, 25vw, 150px)',
            backgroundColor: '#fff',
            borderRadius: '20px',
            padding: '10px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 40px rgba(24, 144, 255, 0.4)',
            border: '3px solid #1890ff',
          }}>
            <img 
              src="/islacorp-logo.jpeg" 
              alt="Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>

          <Title level={1} style={{ 
            color: 'white', 
            fontSize: 'clamp(32px, 8vw, 64px)', 
            fontWeight: 900, 
            margin: 0, 
            lineHeight: 1.1
          }}>
            ISLACORP <span style={{ color: '#1890ff' }}>SRL</span>
          </Title>
        </div>

        <Paragraph style={{ fontSize: 'clamp(16px, 4vw, 20px)', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto 30px' }}>
          Transformamos el mantenimiento industrial con tecnología robótica y procesos de alta precisión.
        </Paragraph>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button type="primary" size="large" href="#empresas" style={{ borderRadius: '8px', fontWeight: 'bold' }}>
            Explorar Divisiones
          </Button>
          <Button ghost size="large" icon={<WhatsAppOutlined />} href="https://wa.me/18295422989" target="_blank" style={{ borderRadius: '8px' }}>
            Asesoría
          </Button>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Title level={2} id="empresas" style={{ textAlign: 'center', marginBottom: '40px', fontSize: 'clamp(24px, 5vw, 36px)' }}>
          Nuestras Divisiones
        </Title>
        
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card hoverable style={{ borderRadius: '20px', overflow: 'hidden' }}
              cover={<div style={{ background: '#f6ffed', padding: '30px', textAlign: 'center' }}>
                <Image src="/pla-logo.png" preview={false} style={{ maxHeight: '100px' }} />
              </div>}
            >
              <Title level={3}>PLA Sanitización</Title>
              <Paragraph>Control de plagas y desinfección industrial con estándares internacionales.</Paragraph>
              <Link href="/pla" passHref><Button type="primary" block icon={<ArrowRightOutlined />}>Ver Servicios</Button></Link>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card hoverable style={{ borderRadius: '20px', overflow: 'hidden' }}
              cover={<div style={{ background: '#e6f7ff', padding: '30px', textAlign: 'center' }}>
                <Image src="/VertiClean-PrimaryLogo_page-0001.jpg" preview={false} style={{ maxHeight: '100px' }} />
              </div>}
            >
              <Title level={3}>VertiClean</Title>
              <Paragraph>Limpieza de fachadas y paneles solares mediante drones de alta tecnología.</Paragraph>
              <Link href="/vertiClean" passHref><Button type="primary" block icon={<ArrowRightOutlined />}>Ver Tecnología</Button></Link>
            </Card>
          </Col>
        </Row>

        {/* LOGOS DE CLIENTES RESPONSIVE */}
        <div style={{ padding: '60px 0' }}>
          <Divider orientation="center"><Text type="secondary" style={{ letterSpacing: '2px', fontSize: '10px' }}>CONFIANZA EMPRESARIAL</Text></Divider>
          <Carousel 
            autoplay 
            dots={false} 
            slidesToShow={5} 
            autoplaySpeed={1500}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } }, 
              { breakpoint: 576, settings: { slidesToShow: 2 } }
            ]}
          >
            {[
              { src: "/Referencia-logo.png", alt: "Referencia" },
              { src: "/Ccn-logo.webP", alt: "CCN" },
              { src: "/Synergies-logo.png", alt: "Synergies" },
              { src: "/Eted-logo.png", alt: "ETED" },
              { src: "/Changan-logo.png", alt: "Changan" },
              { src: "/Mayol-logo.webP", alt: "Mayol" },
              { src: "/BD-logo.jpg", alt: "Bonanza" },
              { src: "/Elias-logo.png", alt: "Elias" },
              { src: "/Cine-logo.webP", alt: "Blancica" }
            ].map((cliente, index) => (
              <div key={index} style={logoWrapperStyle}>  
                <img src={cliente.src} alt={cliente.alt} style={logoImgStyle} className="client-logo" />
              </div>
            ))}
          </Carousel>
        </div>

        {/* ICONOS DE VALORES RESPONSIVE */}
        <Row gutter={[24, 40]} style={{ marginBottom: '80px', textAlign: 'center' }}>
          <Col xs={24} sm={8}>
            <SafetyCertificateOutlined style={{ fontSize: '36px', color: '#faad14', marginBottom: '15px' }} />
            <Title level={4} style={{ fontSize: '18px' }}>Seguridad Certificada</Title>
          </Col>
          <Col xs={24} sm={8}>
            <RocketOutlined style={{ fontSize: '36px', color: '#1890ff', marginBottom: '15px' }} />
            <Title level={4} style={{ fontSize: '18px' }}>Innovación Robótica</Title>
          </Col>
          <Col xs={24} sm={8}>
            <GlobalOutlined style={{ fontSize: '36px', color: '#52c41a', marginBottom: '15px' }} />
            <Title level={4} style={{ fontSize: '18px' }}>Cobertura Nacional</Title>
          </Col>
        </Row>
      </div>

      <style jsx global>{`
        .client-logo:hover { filter: grayscale(0%) !important; opacity: 1 !important; transform: scale(1.1); }
        html { scroll-behavior: smooth; }
        .ant-card-body { padding: 20px !important; }
      `}</style>
    </MainLayout>
  );
}