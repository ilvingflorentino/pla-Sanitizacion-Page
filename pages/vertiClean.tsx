import React from 'react';
import MainLayout from '../components/main'; // RUTA REPARADA
import { Typography, Row, Col, Button, Card, Divider, Space, Tag, Statistic } from 'antd';
import { 
  ThunderboltOutlined, 
  SafetyCertificateOutlined, 
  RiseOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
  GlobalOutlined,
  DashboardOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
/* ... (tus imports se mantienen igual) ... */

export default function VertiCleanPage() {
  return (
    <MainLayout>
      {/* 1. HERO SECTION - Ajustado con el gradiente de la web base */}
      <div style={{ 
        background: 'linear-gradient(rgba(0, 21, 41, 0.7), rgba(0, 21, 41, 0.8)), url("/hero-drone.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '140px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <Tag color="blue" style={{ marginBottom: '20px', padding: '5px 15px', fontSize: '14px', borderRadius: '10px' }}>
          ISLACORP PRESENTA: VERTICLEAN
        </Tag>
        <Title style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1 }}>
          Líderes en Limpieza Automatizada <br/> con Drones de Vanguardia
        </Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '19px', maxWidth: '850px', margin: '20px auto 40px' }}>
          Combinamos tecnología innovadora y personal experto para entregar resultados de excelencia que superan los estándares del mercado dominicano.
        </Paragraph>
        <Space size="large">
          <Button type="primary" size="large" icon={<ArrowRightOutlined />} style={{ height: '55px', borderRadius: '30px', padding: '0 40px', background: '#1890ff' }} href="https://wa.me/18295422989" target="_blank">
            Cotizar Ahora
          </Button>
        </Space>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        
        {/* 2. ESTADÍSTICAS RÁPIDAS (Datos de tu PPT) */}
        <Row gutter={[32, 32]} style={{ marginBottom: '80px', textAlign: 'center' }}>
          <Col xs={24} md={8}>
            <Card bordered={false} style={{ background: '#f0f5ff', borderRadius: '20px' }}>
              <Statistic title="Más Rápido" value={78} suffix="%" valueStyle={{ color: '#003a8c', fontWeight: 'bold' }} />
              <Text type="secondary">Eficiencia vs Métodos Tradicionales</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} style={{ background: '#f6ffed', borderRadius: '20px' }}>
              <Statistic title="Riesgo Humano" value={0} suffix="%" valueStyle={{ color: '#389e0d', fontWeight: 'bold' }} />
              <Text type="secondary">Seguridad Total en Alturas</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} style={{ background: '#e6f7ff', borderRadius: '20px' }}>
              <Statistic title="Ahorro" value={35} suffix="%" valueStyle={{ color: '#1890ff', fontWeight: 'bold' }} />
              <Text type="secondary">Reducción de Costos Operativos</Text>
            </Card>
          </Col>
        </Row>

        {/* 3. SERVICIOS (Expandido según tu presentación) */}
        <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Soluciones de Limpieza Especializada</Title>
        <Row gutter={[24, 24]}>
          {[
            { title: "Paneles Solares", icon: <ThunderboltOutlined />, desc: "Maximizamos la eficiencia energética eliminando suciedad acumulada." },
            { title: "Fachadas y Cristales", icon: <GlobalOutlined />, desc: "Limpieza impecable en edificios corporativos y residenciales." },
            { title: "Aerogeneradores", icon: <DashboardOutlined />, desc: "Mantenimiento técnico para parques eólicos y energía renovable." },
            { title: "Estadios e Industria", icon: <RiseOutlined />, desc: "Llegamos a estructuras complejas y de gran escala sin esfuerzo." }
          ].map((item, i) => (
            <Col xs={24} sm={12} lg={6} key={i}>
              <Card hoverable style={{ height: '100%', borderRadius: '20px', textAlign: 'center', border: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: '45px', color: '#1890ff', marginBottom: '20px' }}>{item.icon}</div>
                <Title level={4}>{item.title}</Title>
                <Text type="secondary">{item.desc}</Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* 4. VENTAJAS (Tu PPT) */}
        <Divider style={{ margin: '80px 0' }} />
        <Row gutter={[64, 48]} align="middle">
          <Col xs={24} md={12}>
            <div style={{ position: 'relative' }}>
              <img src="/drone-operation.jpg" alt="Dron en acción" style={{ width: '100%', borderRadius: '30px', zIndex: 2 }} />
              <div style={{ position: 'absolute', top: -20, left: -20, width: '100%', height: '100%', background: '#e6f7ff', borderRadius: '30px', zIndex: -1 }}></div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Title level={2}>La Ventaja VertiClean</Title>
            <Space direction="vertical" size="large">
              <div>
                <Title level={4}><CheckCircleFilled style={{ color: '#52c41a' }} /> Acceso Total e Impecable</Title>
                <Paragraph>Llegamos a cualquier rincón de cualquier edificación, sin importar su complejidad arquitectónica.</Paragraph>
              </div>
              <div>
                <Title level={4}><CheckCircleFilled style={{ color: '#52c41a' }} /> Tecnología de Vanguardia</Title>
                <Paragraph>Equipos de última generación diseñados para la máxima precisión y cuidado de sus superficies.</Paragraph>
              </div>
              <div>
                <Title level={4}><CheckCircleFilled style={{ color: '#52c41a' }} /> Compromiso Ecológico</Title>
                <Paragraph>Nuestros métodos reducen el consumo de agua y utilizan productos biodegradables.</Paragraph>
              </div>
            </Space>
          </Col>
        </Row>
      </div>

      {/* 5. CTA FINAL - Estilo Drone Cleaning Company */}
      <div style={{ 
        background: '#001529', 
        padding: '100px 20px', 
        textAlign: 'center', 
        color: 'white',
        backgroundImage: 'radial-gradient(circle at center, #002140 0%, #001529 100%)'
      }}>
        <Title level={2} style={{ color: 'white', fontSize: '36px' }}>¿Listo para el futuro de la limpieza?</Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', marginBottom: '40px' }}>
          Agende una demostración o inspección técnica hoy mismo.
        </Paragraph>
        <Button 
          type="primary" 
          size="large" 
          href="https://wa.me/18295422989"
          target="_blank"
          style={{ height: '60px', borderRadius: '30px', padding: '0 50px', fontSize: '18px', fontWeight: 'bold' }}
        >
          Contactar con un Experto
        </Button>
      </div>
    </MainLayout>
  );
}