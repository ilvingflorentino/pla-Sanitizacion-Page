import React from 'react';
import MainLayout from '../components/main';
import { Typography, Row, Col, Card, Button, Image, Divider, Tag, Space, List } from 'antd';
import { 
  CheckCircleFilled, 
  WhatsAppOutlined, 
  SafetyCertificateOutlined, 
  HomeOutlined, 
  BankOutlined,
  MedicineBoxOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function PLAServicios() {
  const serviciosPrincipales = [
    {
      title: "Control de Plagas",
      icon: <SafetyCertificateOutlined />,
      items: ["Manejo Integrado de Plagas (MIP)", "Control de Termitas (Comején)", "Desratización técnica", "Control de insectos rastreros y voladores"]
    },
    {
      title: "Sanitización y Desinfección",
      icon: <MedicineBoxOutlined />,
      items: ["Desinfección de grado hospitalario", "Eliminación de virus y bacterias", "Tratamiento de áreas comunes", "Nebulización ambiental"]
    }
  ];

  return (
    <MainLayout>
      {/* 1. HERO SECTION - PLA */}
      <div style={{ 
        background: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("/fumi-3.webp")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 20px',
        textAlign: 'center',
        borderBottom: '5px solid #389e0d'
      }}>
        <Image 
          src="/pla-logo.png" 
          alt="PLA Logo" 
          preview={false} 
          style={{ maxHeight: '100px', marginBottom: '20px' }}
          fallback="https://via.placeholder.com/150x80?text=PLA+Logo"
        />
        <Title level={1} style={{ color: '#003d29', margin: 0 }}>PLA Sanitización</Title>
        <Text strong style={{ fontSize: '18px', color: '#389e0d', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Más de 30 años garantizando bioseguridad
        </Text>
        <Paragraph style={{ maxWidth: '700px', margin: '20px auto', fontSize: '16px' }}>
          Expertos en el manejo integral de plagas y desinfección profunda. Protegemos lo que más importa con tecnología certificada y personal experto.
        </Paragraph>
        <Button 
          type="primary" 
          size="large" 
          icon={<WhatsAppOutlined />}
          href="https://wa.me/18295422989?text=Hola%20PLA,%20necesito%20una%20inspección%20de%20plagas."
          style={{ background: '#389e0d', borderColor: '#389e0d', borderRadius: '10px', height: '50px' }}
        >
          Solicitar Inspección Gratis
        </Button>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* 2. TARJETAS DE SERVICIOS */}
        <Row gutter={[32, 32]}>
          {serviciosPrincipales.map((srv, idx) => (
            <Col xs={24} md={12} key={idx}>
              <Card 
                hoverable 
                title={<Space>{srv.icon} <Text strong>{srv.title}</Text></Space>}
                style={{ borderRadius: '20px', height: '100%', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
              >
                <List
                  dataSource={srv.items}
                  renderItem={item => (
                    <List.Item style={{ border: 'none', padding: '8px 0' }}>
                      <CheckCircleFilled style={{ color: '#389e0d', marginRight: '10px' }} /> {item}
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Divider style={{ margin: '60px 0' }} />

        {/* 3. SECTORES QUE ATENDEMOS */}
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Sectores Especializados</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={8}>
            <Card bordered={false} style={{ background: '#f6ffed', borderRadius: '20px', textAlign: 'center' }}>
              <HomeOutlined style={{ fontSize: '40px', color: '#389e0d' }} />
              <Title level={4}>Residencial</Title>
              <Text>Protección para hogares y condominios con productos de baja toxicidad.</Text>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card bordered={false} style={{ background: '#f6ffed', borderRadius: '20px', textAlign: 'center' }}>
              <BankOutlined style={{ fontSize: '40px', color: '#389e0d' }} />
              <Title level={4}>Corporativo</Title>
              <Text>Certificaciones para oficinas, bancos y locales comerciales.</Text>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card bordered={false} style={{ background: '#f6ffed', borderRadius: '20px', textAlign: 'center' }}>
              <MedicineBoxOutlined style={{ fontSize: '40px', color: '#389e0d' }} />
              <Title level={4}>Industrial / Salud</Title>
              <Text>Protocolos estrictos para plantas de alimentos y centros médicos.</Text>
            </Card>
          </Col>
        </Row>

        {/* 4. SECCIÓN DE CONFIANZA */}
        <div style={{ marginTop: '80px', padding: '40px', background: '#003d29', borderRadius: '30px', color: 'white' }}>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} md={14}>
              <Title level={2} style={{ color: 'white' }}>¿Por qué confiar en PLA?</Title>
              <Paragraph style={{ color: 'rgba(255,255,255,0.8)' }}>
                Nuestra metodología no se limita a aplicar productos; realizamos un diagnóstico profundo de cada caso para eliminar el problema de raíz, cumpliendo con todas las normativas de salud pública.
              </Paragraph>
              <Space size="large">
                <div style={{ textAlign: 'center' }}>
                  <Title level={3} style={{ color: 'white', margin: 0 }}>30+</Title>
                  <Text style={{ color: 'rgba(255,255,255,0.6)' }}>Años</Text>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Title level={3} style={{ color: 'white', margin: 0 }}>Certificados</Title>
                  <Text style={{ color: 'rgba(255,255,255,0.6)' }}>Salud Pública</Text>
                </div>
              </Space>
            </Col>
            <Col xs={24} md={10}>
              <Image 
                src="/fumigadores-1.jpg" 
                style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                fallback="https://via.placeholder.com/400x300?text=Operativo+PLA"
              />
            </Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
}