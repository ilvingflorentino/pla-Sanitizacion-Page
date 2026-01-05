import React from 'react';
import MainLayout from './components/main'; // Verifica que la ruta al layout sea correcta
import { Typography, Row, Col, Card, List, Button, Divider } from 'antd';
import { 
  CheckCircleOutlined, 
  WhatsAppOutlined, 
  ExperimentOutlined, 
  HomeOutlined, 
  MedicineBoxOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function ServiciosPage() {
  const servicios = [
    {
      title: "Desinsectación",
      desc: "Control profesional de insectos rastreros y voladores.",
      icon: <ExperimentOutlined style={{ color: '#52c41a' }} />,
      list: ["Cucarachas y Hormigas", "Moscas y Mosquitos", "Chinches y Pulgas"]
    },
    {
      title: "Desratización",
      desc: "Control integral de roedores en áreas críticas.",
      icon: <HomeOutlined style={{ color: '#237804' }} />,
      list: ["Barreras físicas", "Cebado de seguridad", "Monitoreo constante"]
    },
    {
      title: "Sanitización",
      desc: "Desinfección profunda de ambientes y superficies.",
      icon: <MedicineBoxOutlined style={{ color: '#389e0d' }} />,
      list: ["Nebulización", "Eliminación de Virus", "Ambientes Seguros"]
    }
  ];

  return (
    <MainLayout>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <Title level={2} style={{ color: '#135200' }}>SERVICIOS DE PLA SRL SANITIZACIÓN</Title>
        <Paragraph style={{ fontSize: '16px' }}>
          Soluciones integrales de higiene y control para hogares, comercios e industrias.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {servicios.map((s, idx) => (
          <Col xs={24} md={8} key={idx}>
            <Card hoverable style={{ height: '100%', borderRadius: '15px' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{s.icon}</div>
              <Title level={4}>{s.title}</Title>
              <Text type="secondary">{s.desc}</Text>
              <Divider />
              <List
                dataSource={s.list}
                renderItem={item => (
                  <List.Item style={{ border: 'none', padding: '4px 0' }}>
                    <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} /> {item}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ 
        marginTop: '60px', 
        padding: '40px', 
        background: '#003d29', 
        borderRadius: '20px', 
        textAlign: 'center',
        color: 'white'
      }}>
        <Title level={3} style={{ color: 'white' }}>¿Necesitas un presupuesto para PLA SRL?</Title>
        <Button 
          type="primary" 
          size="large" 
          icon={<WhatsAppOutlined />} 
          style={{ background: '#52c41a', border: 'none', height: '50px', borderRadius: '25px' }}
          href="https://wa.me/tu-numero-aqui"
          target="_blank"
        >
          Contactar por WhatsApp
        </Button>
      </div>
    </MainLayout>
  );
}