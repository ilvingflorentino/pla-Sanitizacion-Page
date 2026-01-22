import React from 'react';
import MainLayout from '../components/main'; // RUTA REPARADA
import { Typography, Row, Col, Card, Button, Image, Space, Tag, Divider } from 'antd';
import { 
  WhatsAppOutlined, 
  InstagramOutlined, 
  EnvironmentOutlined,
  CameraOutlined,
  MailOutlined,
  RocketOutlined,
  SafetyOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Contacto() {
  // Tus imágenes reales de los operativos
  const fotosTrabajo = [
    "/fumi-3.webp", 
    "/fumigadores-1.jpg", 
    "/fumigadores-2.webp", 
    "/fumigadores.jpg",
  ];

  return (
    <MainLayout>
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[48, 48]}>
          
          {/* COLUMNA DE INFORMACIÓN */}
          <Col xs={24} md={10}>
            <Tag color="blue" style={{ marginBottom: '10px' }}>CONTACTO CENTRAL</Tag>
            <Title level={1} style={{ color: '#001529', marginTop: 0 }}>ISLACORP SRL</Title>
            <Paragraph style={{ fontSize: '16px', color: '#595959' }}>
              Estamos listos para atender sus necesidades de sanitización y mantenimiento técnico. 
              Contáctenos a través de cualquiera de nuestras divisiones para una atención especializada.
            </Paragraph>

            <Divider orientation='horizontal' style={{ fontSize: '14px', color: '#bfbfbf' }}>CANALES DIRECTOS</Divider>

            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Card bordered={false} bodyStyle={{ padding: '15px' }} style={{ background: '#f0f5ff', borderRadius: '15px' }}>
                <Space>
                  <EnvironmentOutlined style={{ color: '#1890ff', fontSize: '20px' }} />
                  <div>
                    <Text strong style={{ display: 'block' }}>Ubicación</Text>
                    <Text>Santo Domingo, República Dominicana</Text>
                  </div>
                </Space>
              </Card>

              <Card bordered={false} bodyStyle={{ padding: '15px' }} style={{ background: '#f0f5ff', borderRadius: '15px' }}>
                <Space>
                  <MailOutlined style={{ color: '#1890ff', fontSize: '20px' }} />
                  <div>
                    <Text strong style={{ display: 'block' }}>Correo Electrónico</Text>
                    <Text>info@islacorprd.com</Text>
                  </div>
                </Space>
              </Card>

              <Card bordered={false} bodyStyle={{ padding: '15px' }} style={{ background: '#f6ffed', borderRadius: '15px', border: '1px solid #d9f7be' }}>
                <Space>
                  <WhatsAppOutlined style={{ color: '#52c41a', fontSize: '20px' }} />
                  <div>
                    <Text strong style={{ display: 'block' }}>WhatsApp Directo</Text>
                    <Text>+1 (829) 542-2989</Text>
                  </div>
                </Space>
              </Card>
            </Space>

            <div style={{ marginTop: '30px' }}>
              <Title level={4}>Solicite su presupuesto:</Title>
              <Row gutter={[12, 12]}>
                <Col span={12}>
                  <Button 
                    block 
                    icon={<SafetyOutlined />}
                    style={{ height: '55px', borderRadius: '12px', background: '#389e0d', color: 'white', border: 'none', fontWeight: 'bold' }}
                    href="https://wa.me/18295422989?text=Hola%20IslaCorp,%20necesito%20una%20cotización%20para%20PLA%20Sanitización."
                    target="_blank"
                  >
                    COTIZAR PLA
                  </Button>
                </Col>
                <Col span={12}>
                  <Button 
                    block 
                    icon={<RocketOutlined />}
                    style={{ height: '55px', borderRadius: '12px', background: '#1890ff', color: 'white', border: 'none', fontWeight: 'bold' }}
                    href="https://wa.me/18295422989?text=Hola%20IslaCorp,%20necesito%20una%20cotización%20para%20VertiClean%20(Drones)."
                    target="_blank"
                  >
                    VERTICLEAN
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>

          {/* COLUMNA DE GALERÍA Y SOCIAL */}
          <Col xs={24} md={14}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '30px', border: '1px solid #f0f0f0' }}>
              <div style={{ 
                marginBottom: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <CameraOutlined style={{ fontSize: '22px', color: '#1890ff' }} />
                <Title level={4} style={{ margin: 0, color: '#001529' }}>
                  NUESTROS OPERATIVOS
                </Title>
              </div>

              <Row gutter={[12, 12]}>
                {fotosTrabajo.map((src, index) => (
                  <Col span={12} key={index}>
                    <div style={{ borderRadius: '15px', overflow: 'hidden', height: '200px', background: '#eee' }}>
                      <Image
                        src={src}
                        alt="Operativo IslaCorp"
                        style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                        preview={true}
                        fallback="https://via.placeholder.com/400x300?text=IslaCorp+Operativo"
                      />
                    </div>
                  </Col>
                ))}
              </Row>

              <Divider />
              
              <div style={{ textAlign: 'center' }}>
                <Text type="secondary" style={{ display: 'block', marginBottom: '15px' }}>Nuestras Redes Sociales</Text>
                <Space size="large">
                  <Button 
                    type="default" 
                    shape="round"
                    icon={<InstagramOutlined style={{ color: '#E1306C' }} />} 
                    href="https://instagram.com/plasrlsanitizacion" 
                    target="_blank"
                  >
                    PLA Sanitización
                  </Button>
                  <Button 
                    type="default" 
                    shape="round"
                    icon={<InstagramOutlined style={{ color: '#1890ff' }} />} 
                    href="#" 
                    target="_blank"
                  >
                    VertiClean
                  </Button>
                </Space>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}