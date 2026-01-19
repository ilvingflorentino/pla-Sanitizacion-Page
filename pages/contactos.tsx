import React from 'react';
import MainLayout from './components/main';
import { Typography, Row, Col, Card, Button, Image, Space, Tag } from 'antd';
import { 
  WhatsAppOutlined, 
  InstagramOutlined, 
  EnvironmentOutlined,
  CameraOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Contacto() {
  // 1. CONFIGURACIÓN DE TUS IMÁGENES REALES
  // Estos nombres deben coincidir exactamente con los archivos en tu carpeta /public
  const fotosTrabajo = [
    "/fumi-3.webp", 
    "/fumigadores-1.jpg", 
    "/fumigadores-2.webp", 
    "/fumigadores.jpg",
  ];

  return (
    <MainLayout>
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[48, 32]} align="middle">
          
          {/* COLUMNA DE INFORMACIÓN */}
          <Col xs={24} md={10}>
            <Tag color="success" style={{ marginBottom: '10px' }}>ESTAMOS EN LÍNEA</Tag>
            <Title level={1} style={{ color: '#003d29', marginTop: 0 }}>PLA SRL SANITIZACIÓN</Title>
            <Paragraph style={{ fontSize: '16px' }}>
              Expertos en control de plagas y desinfección profesional en toda la República Dominicana.
            </Paragraph>

            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Card bordered={false} hoverable style={{ background: '#f6ffed', borderRadius: '15px' }}>
                <Space>
                  <EnvironmentOutlined style={{ color: '#389e0d', fontSize: '20px' }} />
                  <div>
                    <Text strong style={{ display: 'block' }}>Ubicación</Text>
                    <Text>Santo Domingo, República Dominicana</Text>
                  </div>
                </Space>
              </Card>

              <Card bordered={false} hoverable style={{ background: '#f6ffed', borderRadius: '15px' }}>
                <Space>
                  <WhatsAppOutlined style={{ color: '#52c41a', fontSize: '20px' }} />
                  <div>
                    <Text strong style={{ display: 'block' }}>WhatsApp Directo</Text>
                    <Text>+1 (829) 542-2989</Text>
                  </div>
                </Space>
              </Card>

              <Card bordered={false} hoverable style={{ background: '#f6ffed', borderRadius: '15px' }}>
                <Space>
                  <InstagramOutlined style={{ color: '#E1306C', fontSize: '20px' }} />
                  <div>
                    <Text strong style={{ display: 'block' }}>Síguenos</Text>
                    <Text>@plasrlsanitizacion</Text>
                  </div>
                </Space>
              </Card>
            </Space>

            <Button 
              type="primary" 
              size="large" 
              block 
              icon={<WhatsAppOutlined />}
              style={{ 
                marginTop: '30px', 
                background: '#389e0d', 
                borderColor: '#389e0d',
                height: '55px',
                borderRadius: '15px',
                fontSize: '18px',
                fontWeight: 'bold'
              }}
              href="https://wa.me/18295422989?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización."
              target="_blank"
            >
              Solicitar Cotización Ahora
            </Button>
          </Col>

          {/* COLUMNA DE GALERÍA DE OPERATIVOS */}
          <Col xs={24} md={14}>
            <div style={{ 
              background: '#f0f2f5', 
              padding: '25px', 
              borderRadius: '25px' 
            }}>
              <div style={{ 
                borderLeft: '5px solid #389e0d', 
                paddingLeft: '15px', 
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <CameraOutlined style={{ fontSize: '24px', color: '#389e0d' }} />
                <Title level={4} style={{ margin: 0, color: '#003d29' }}>
                  NUESTROS OPERATIVOS
                </Title>
              </div>

              <Row gutter={[12, 12]}>
                {fotosTrabajo.map((src, index) => (
                  <Col span={12} key={index}>
                    <div style={{ 
                      borderRadius: '15px', 
                      overflow: 'hidden', 
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      background: '#fff'
                    }}>
                      <Image
                        src={src}
                        alt="Operativo PLA SRL"
                        style={{ 
                          objectFit: 'cover', 
                          height: '200px', 
                          width: '100%',
                          display: 'block'
                        }}
                        // Si la imagen no carga, muestra este texto:
                        fallback="Estamos trabajando para ti"
                      />
                    </div>
                  </Col>
                ))}
              </Row>
              <Paragraph style={{ marginTop: '15px', textAlign: 'center', fontSize: '13px', color: '#8c8c8c' }}>
                Evidencia real de nuestro compromiso con la calidad.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}