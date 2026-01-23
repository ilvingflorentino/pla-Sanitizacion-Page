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

// --- COMPONENTE NAVBAR INTERNO ---
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
      zIndex: 1000,
      padding: '12px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: scrolled ? 1 : 0,
      pointerEvents: scrolled ? 'auto' : 'none',
      transform: scrolled ? 'translateY(0)' : 'translateY(-100%)',
      background: 'rgba(0, 21, 41, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(24, 144, 255, 0.3)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '35px',
          height: '35px',
          backgroundColor: '#fff',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3px'
        }}>
          <img 
            src="/islacorp-logo.jpeg" 
            alt="Logo" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        </div>
        <Text style={{ color: '#fff', fontWeight: 800, fontSize: '18px', letterSpacing: '1px' }}>
          ISLACORP
        </Text>
      </div>
      <Space size="large">
        <Button type="text" style={{ color: '#fff' }} href="#empresas">Empresas</Button>
        <Button 
          type="primary" 
          icon={<WhatsAppOutlined />}
          href="https://wa.me/18295422989"
          style={{ background: '#1890ff', borderRadius: '4px', fontWeight: 'bold' }}
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
      <Navbar />
      
      {/* 1. SECCIÓN HERO */}
      <div style={{ 
        padding: '160px 20px 100px', 
        background: 'radial-gradient(circle at top right, #003a8c, #001529)', 
        borderRadius: '0 0 60px 60px',
        marginBottom: '60px',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px',
          background: 'rgba(24, 144, 255, 0.1)', filter: 'blur(80px)', borderRadius: '50%'
        }} />

        <Tag color="blue" style={{ background: 'transparent', border: '1px solid #1890ff', color: '#1890ff', marginBottom: '20px', padding: '0 15px' }}>
          SOLUCIONES DE VANGUARDIA
        </Tag>
{/* CONTENEDOR FLEX PARA LOGO GIGANTE + TÍTULO */}
<div style={{ 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  gap: '35px', 
  marginBottom: '30px',
  flexWrap: 'wrap' // Importante para que en móvil el logo se ponga arriba del texto
}}>
  <div style={{
    // Tamaño masivo: mínimo 100px, ideal 15vw, máximo 180px
    width: 'clamp(100px, 15vw, 180px)',
    height: 'clamp(100px, 15vw, 180px)',
    backgroundColor: '#fff',
    borderRadius: '24px', // Bordes más curvos para un logo más grande
    padding: '15px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 50px rgba(24, 144, 255, 0.5)', // Brillo expandido
    border: '4px solid #1890ff',
    transition: 'all 0.4s ease',
    zIndex: 2
  }}>
            <img 
              src="/islacorp-logo.jpeg" 
              alt="Islacorp Logo" 
              style={{ width: '300%', height: '100%', objectFit: 'contain' }} 
            />
          </div>

          <Title level={1} style={{ 
            color: 'white', 
            fontSize: 'clamp(40px, 6vw, 64px)', 
            fontWeight: 900, 
            margin: 0, 
            letterSpacing: '-2px',
            lineHeight: 1
          }}>
            ISLACORP <span style={{ color: '#1890ff' }}>SRL</span>
          </Title>
        </div>

        <Paragraph style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          Transformamos el mantenimiento industrial y la sanitización con 
          tecnología robótica y procesos de alta precisión.
        </Paragraph>
        
        <Space size="large">
          <Button type="primary" size="large" href="#empresas" style={{ borderRadius: '8px', height: '55px', padding: '0 40px', fontWeight: 'bold' }}>
            Explorar Divisiones
          </Button>
          <Button ghost size="large" icon={<WhatsAppOutlined />} href="https://wa.me/18295422989" target="_blank" style={{ borderRadius: '8px', height: '55px', color: '#1890ff', borderColor: '#1890ff' }}>
            Asesoría Técnica
          </Button>
        </Space>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Title level={2} id="empresas" style={{ textAlign: 'center', marginBottom: '60px', letterSpacing: '-1px' }}>Nuestras Divisiones Especializadas</Title>
        
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card hoverable style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
              cover={<div style={{ background: '#f6ffed', padding: '50px', textAlign: 'center' }}>
                <Image src="/pla-logo.png" preview={false} style={{ maxHeight: '140px' }} />
              </div>}
            >
              <Title level={3}>PLA Sanitización</Title>
              <Paragraph style={{ minHeight: '60px' }}>Líderes en control de plagas y desinfección industrial. Protegemos la salud de tus espacios con estándares internacionales.</Paragraph>
              <Link href="/pla" passHref>
                <Button type="primary" block style={{ background: '#389e0d', borderColor: '#389e0d', height: '45px', borderRadius: '8px' }} icon={<ArrowRightOutlined />}>
                  Ver Servicios de Sanitización
                </Button>
              </Link>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card hoverable style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
              cover={<div style={{ background: '#e6f7ff', padding: '50px', textAlign: 'center' }}>
                <Image src="/VertiClean-PrimaryLogo_page-0001.jpg" preview={false} style={{ maxHeight: '140px' }} />
              </div>}
            >
              <Title level={3}>VertiClean</Title>
              <Paragraph style={{ minHeight: '60px' }}>Especialistas en limpieza de fachadas y paneles solares mediante drones. Innovación que garantiza 100% de seguridad operativa.</Paragraph>
              <Link href="/vertiClean" passHref>
                <Button type="primary" block style={{ background: '#1890ff', borderColor: '#1890ff', height: '45px', borderRadius: '8px' }} icon={<ArrowRightOutlined />}>
                  Ver Tecnología de Drones
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>

        <div style={{ padding: '100px 0' }}>
          <Divider orientation="horizontal" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
            <Text type="secondary" strong style={{ letterSpacing: '2px' }}>CONFIANZA EMPRESARIAL</Text>
          </Divider>
         <Carousel 
  autoplay 
  dots={false} 
  slidesToShow={5} 
  autoplaySpeed={1500} // Cambiado de 3000 a 1500 (pasa cada 1.5 segundos)
  speed={500} // Velocidad del deslizamiento (0.5 segundos)
  easing="linear" // Hace que el movimiento sea constante
  responsive={[
    { breakpoint: 1024, settings: { slidesToShow: 3 } }, 
    { breakpoint: 768, settings: { slidesToShow: 2 } }
  ]}
>
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

        <Row gutter={[48, 48]} style={{ marginBottom: '100px' }}>
          <Col xs={24} md={8}>
            <div style={{ textAlign: 'center' }}>
              <SafetyCertificateOutlined style={{ fontSize: '45px', color: '#faad14', marginBottom: '20px' }} />
              <Title level={4}>Seguridad Certificada</Title>
              <Text type="secondary" style={{ fontSize: '16px' }}>Protocolos internacionales de seguridad en altura y manejo de químicos.</Text>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div style={{ textAlign: 'center' }}>
              <RocketOutlined style={{ fontSize: '45px', color: '#1890ff', marginBottom: '20px' }} />
              <Title level={4}>Innovación Robótica</Title>
              <Text type="secondary" style={{ fontSize: '16px' }}>La flota de drones más avanzada del Caribe para mantenimiento técnico.</Text>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div style={{ textAlign: 'center' }}>
              <GlobalOutlined style={{ fontSize: '45px', color: '#52c41a', marginBottom: '20px' }} />
              <Title level={4}>Cobertura Nacional</Title>
              <Text type="secondary" style={{ fontSize: '16px' }}>Capacidad logística para atender proyectos en todo el territorio nacional.</Text>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx global>{`
        .client-logo:hover { 
          filter: grayscale(0%) !important; 
          opacity: 1 !important; 
          transform: scale(1.15); 
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </MainLayout>
  );
}