import React from 'react';
import MainLayout from './components/main';
import { Typography, Row, Col, Card, Button, Image, Space } from 'antd';
import { 
  WhatsAppOutlined, 
  InstagramOutlined, 
  EnvironmentOutlined,
  MailOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Contacto() {
  // Imágenes de ejemplo (Placeholder de alta calidad para fumigación)
  const fotosTrabajo = [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
    "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=500",
    "https://images.unsplash.com/photo-1590682847055-217f1974ef11?w=500",
    "https://images.unsplash.com/photo-1581578731522-a2049ac899d3?w=500"
  ];

  return (
    <MainLayout>
      <div style={{ padding: '20px' }}>
        <Row gutter={[32, 32]}>
          {/* COLUMNA DE INFORMACIÓN */}
          <Col xs={24} md={10}>
            <Title level={2} style={{ color: '#135200' }}>PLA SRL SANITIZACIÓN</Title>
            <Paragraph>
              Expertos en control de plagas y desinfección profesional. 
              Contáctanos para una evaluación gratuita.
            </Paragraph>

            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Card bordered={false} style={{ background: '#f6ffed', borderRadius: '12px' }}>
                <Space>
                  <EnvironmentOutlined style={{ color: '#389e0d', fontSize: '20px' }} />
                  <Text>Santo Domingo, República Dominicana</Text>
                </Space>
              </Card>

              <Card bordered={false} style={{ background: '#f6ffed', borderRadius: '12px' }}>
                <Space>
                  <WhatsAppOutlined style={{ color: '#52c41a', fontSize: '20px' }} />
                  <Text strong>WhatsApp: +1 (8XX) XXX-XXXX</Text>
                </Space>
              </Card>

              <Card bordered={false} style={{ background: '#f6ffed', borderRadius: '12px' }}>
                <Space>
                  <InstagramOutlined style={{ color: '#E1306C', fontSize: '20px' }} />
                  <Text>@plasrlsanitizacion</Text>
                </Space>
              </Card>
            </Space>

            <Button 
              type="primary" 
              size="large" 
              block 
              icon={<WhatsAppOutlined />}
              style={{ 
                marginTop: '24px', 
                background: '#389e0d', 
                borderColor: '#389e0d',
                height: '50px',
                borderRadius: '25px'
              }}
              href="https://wa.me/tu_numero"
              target="_blank"
            >
              Solicitar Cotización
            </Button>
          </Col>

          {/* COLUMNA DE GALERÍA (REDISEÑADA) */}
          <Col xs={24} md={14}>
            <div style={{ 
              borderLeft: '4px solid #b7eb8f', 
              paddingLeft: '15px', 
              marginBottom: '20px' 
            }}>
              <Title level={4} style={{ margin: 0, color: '#135200' }}>
                NUESTROS OPERATIVOS
              </Title>
            </div>

            <Row gutter={[12, 12]}>
              {fotosTrabajo.map((src, index) => (
                <Col span={12} key={index}>
                  <div style={{ 
                    borderRadius: '12px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                  }}>
                    <Image
                      src={src}
                      alt="Pla SRL Sanitización en acción"
                      style={{ 
                        objectFit: 'cover', 
                        height: '200px', 
                        width: '100%',
                        display: 'block'
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}