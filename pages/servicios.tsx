import React from 'react';
import MainLayout from './components/main'; // Verifica que la ruta al layout sea correcta
import { Typography, Row, Col, Card, Divider, Tag } from 'antd';
import { 
  BugOutlined, 
  SafetyCertificateOutlined, 
  CheckCircleFilled,
  WarningOutlined,
  GlobalOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Servicios() {
  // Lista exacta de tus servicios
  const misServicios = [
    { title: "Fumigación General", icon: <BugOutlined />, desc: "Control preventivo y correctivo de plagas en residencias y comercios." },
    { title: "Control de Roedores", icon: <WarningOutlined />, desc: "Sistemas de cebado y monitoreo para la eliminación de ratas y ratones." },
    { title: "Control de Mosquitos", icon: <GlobalOutlined />, desc: "Tratamientos espaciales para reducir la población de mosquitos transmisores de enfermedades." },
    { title: "Insectos Voladores y Rastreros", icon: <BugOutlined />, desc: "Eliminación de cucarachas, hormigas, moscas y otros insectos molestos." },
    { title: "Control de Chinches", icon: <CheckCircleFilled />, desc: "Tratamientos especializados y profundos para la erradicación de chinches de cama." },
    { title: "Control de Termitas", icon: <SafetyCertificateOutlined />, desc: "Protección de estructuras y muebles contra el daño de termitas y carcomas." },
    { title: "Sanitización y Desinfección", icon: <SafetyCertificateOutlined />, desc: "Desinfección de alto nivel contra virus, bacterias y hongos en todas las áreas." }
  ];

  return (
    <MainLayout>
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* ENCABEZADO DE PÁGINA */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Tag color="success">EXPERTOS EN CONTROL DE PLAGAS</Tag>
          <Title level={1} style={{ color: '#003d29', marginTop: '10px' }}>Nuestros Servicios</Title>
          <Paragraph style={{ fontSize: '18px', color: '#595959', maxWidth: '700px', margin: '0 auto' }}>
            En PLA SRL SANITIZACION ofrecemos soluciones integrales adaptadas a las necesidades específicas de cada cliente, garantizando ambientes libres de plagas.
          </Paragraph>
        </div>

        {/* CUADRÍCULA DE SERVICIOS */}
        <Row gutter={[24, 24]}>
          {misServicios.map((servicio, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card 
                hoverable 
                style={{ 
                  height: '100%', 
                  borderRadius: '15px', 
                  textAlign: 'center',
                  borderTop: '5px solid #389e0d' 
                }}
              >
                <div style={{ 
                  fontSize: '40px', 
                  color: '#389e0d', 
                  marginBottom: '15px',
                  background: '#f6ffed',
                  width: '80px',
                  height: '80px',
                  lineHeight: '90px',
                  borderRadius: '50%',
                  margin: '0 auto 20px'
                }}>
                  {servicio.icon}
                </div>
                <Title level={4}>{servicio.title}</Title>
                <Paragraph type="secondary">
                  {servicio.desc}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        {/* NOTA DE CALIDAD */}
        <Divider />
        <div style={{ 
          background: '#003d29', 
          padding: '40px', 
          borderRadius: '20px', 
          color: 'white', 
          textAlign: 'center',
          marginTop: '40px' 
        }}>
          <Title level={3} style={{ color: 'white' }}>¿Necesitas un plan personalizado?</Title>
          <Paragraph style={{ color: '#d9f7be' }}>
            Emitimos certificaciones legales para negocios y cumplimos con todos los protocolos de Salud Pública.
          </Paragraph>
          <Text strong style={{ color: 'white' }}>Llámanos o escríbenos para una inspección gratuita.</Text>
        </div>
      </div>
    </MainLayout>
  );
}