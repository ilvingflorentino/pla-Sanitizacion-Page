import React from 'react';
import MainLayout from './main'; // Ajustado para salir de /pages
import { Typography, Row, Col, Card, Button, Image, Divider, Space, Tag } from 'antd';
import { 
  CheckCircleOutlined, 
  ArrowRightOutlined,
  ClearOutlined,
  ThunderboltOutlined,
  RocketOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Empresas() {
  return (
    <MainLayout>
      {/* HEADER DE LA SECCIÓN */}
      <div style={{ 
        padding: '80px 20px 40px', 
        background: '#f0f2f5', 
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <Tag color="blue" style={{ marginBottom: '10px' }}>DIVISIONES ISLACORP</Tag>
        <Title level={1} style={{ color: '#001529' }}>Nuestras Soluciones Integrales</Title>
        <Paragraph style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
          En <strong>PLA</strong> y <strong>VertiClean</strong>, ofrecemos un espectro completo de servicios para garantizar la salubridad y el mantenimiento óptimo de sus espacios.
        </Paragraph>
      </div>

      <div style={{ padding: '0 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[48, 48]} justify="center">
          
          {/* Tarjeta de PLA SRL SANITIZACIÓN */}
          <Col xs={24} md={12}>
            <Card
              hoverable
              style={{ 
                borderRadius: '25px', 
                overflow: 'hidden', 
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                borderTop: '6px solid #389e0d', 
                height: '100%' 
              }}
            >
              <div style={{ padding: '20px' }}>
                <div style={{ height: '100px', display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <Image 
                    src="/pla-logo.png" 
                    alt="PLA SRL Sanitización Logo" 
                    preview={false}
                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                  />
                </div>
                <Title level={2} style={{ color: '#003d29' }}>PLA Sanitización</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', height: '80px' }}>
                  Líderes en control de plagas y desinfección profesional. Protegemos su hogar y empresa con más de 30 años de experiencia técnica.
                </Paragraph>
                <Divider />
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                  <li style={{ marginBottom: '12px' }}><CheckCircleOutlined style={{ color: '#389e0d', marginRight: '10px' }} /> Control de Plagas Certificado</li>
                  <li style={{ marginBottom: '12px' }}><CheckCircleOutlined style={{ color: '#389e0d', marginRight: '10px' }} /> Desinfección Ambiental Profunda</li>
                  <li><CheckCircleOutlined style={{ color: '#389e0d', marginRight: '10px' }} /> Erradicación de Virus y Bacterias</li>
                </ul>
                <Button 
                  type="primary" 
                  size="large"
                  href="/servicios" 
                  block
                  style={{ background: '#389e0d', borderColor: '#389e0d', borderRadius: '12px', height: '50px' }}
                  icon={<ArrowRightOutlined />}
                >
                  Ver Servicios de PLA
                </Button>
              </div>
            </Card>
          </Col>

          {/* Tarjeta de VertiClean */}
          <Col xs={24} md={12}>
            <Card
              hoverable
              style={{ 
                borderRadius: '25px', 
                overflow: 'hidden', 
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                borderTop: '6px solid #1890ff', 
                height: '100%'
              }}
            >
              <div style={{ padding: '20px' }}>
                <div style={{ height: '100px', display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <Image 
                    src="/VertiClean-PrimaryLogo_page-0001.jpg" 
                    alt="VertiClean Logo" 
                    preview={false}
                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                  />
                </div>
                <Title level={2} style={{ color: '#003a8c' }}>VertiClean</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', height: '80px' }}>
                  Especialistas en limpieza automatizada con drones. Máxima eficiencia y seguridad en el mantenimiento de fachadas y cristales.
                </Paragraph>
                <Divider />
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                  <li style={{ marginBottom: '12px' }}><ThunderboltOutlined style={{ color: '#1890ff', marginRight: '10px' }} /> Limpieza de Paneles Solares</li>
                  <li style={{ marginBottom: '12px' }}><ClearOutlined style={{ color: '#1890ff', marginRight: '10px' }} /> Cristalerías y Fachadas en Altura</li>
                  <li><RocketOutlined style={{ color: '#1890ff', marginRight: '10px' }} /> Tecnología de Drones de Vanguardia</li>
                </ul>
                <Button 
                  type="primary" 
                  size="large"
                  href="/vertiClean" 
                  block
                  style={{ background: '#1890ff', borderColor: '#1890ff', borderRadius: '12px', height: '50px' }}
                  icon={<ArrowRightOutlined />}
                >
                  Conocer Servicios de VertiClean
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        <Divider style={{ margin: '80px 0' }}>
          <Text type="secondary">IslaCorp SRL - Excelencia en cada detalle</Text>
        </Divider>
      </div>
    </MainLayout>
  );
}