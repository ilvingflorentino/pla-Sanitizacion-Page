import React from 'react';
import MainLayout from './components/main';
import { Typography, Row, Col, Card, Statistic, Divider, Timeline, Layout } from 'antd';
import { 
  SafetyCertificateOutlined, 
  UserOutlined, 
  TrophyOutlined, 
  EnvironmentOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Nosotros() {
  return (
    <MainLayout>
      {/* SECCIÓN DE TÍTULO */}
      <div style={{ textAlign: 'center', marginBottom: '60px', padding: '40px 0', background: '#f6ffed', borderRadius: '20px' }}>
        <Title level={1} style={{ color: '#135200', marginBottom: '10px' }}>Sobre PLA SRL</Title>
        <Title level={4} style={{ color: '#389e0d', fontWeight: 300, marginTop: 0 }}>
          Comprometidos con la Higiene y la Salud Ambiental
        </Title>
      </div>

      <Row gutter={[48, 48]} align="middle">
        <Col xs={24} md={12}>
          <Title level={2} style={{ color: '#003d29' }}>Nuestra Misión</Title>
          <Paragraph style={{ fontSize: '17px', lineHeight: '1.8' }}>
            En **Pla SRL Sanitización**, nuestra misión es proporcionar soluciones integrales 
            en el control de plagas y sanitización, utilizando métodos innovadores que 
            garanticen la seguridad de nuestros clientes, sus familias y el medio ambiente.
          </Paragraph>
          <Paragraph style={{ fontSize: '17px', lineHeight: '1.8' }}>
            Nos distinguimos por nuestra rapidez de respuesta y por el uso exclusivo de 
            productos certificados que no representan un riesgo para la salud humana ni animal.
          </Paragraph>
        </Col>

        <Col xs={24} md={12}>
          <Card bordered={false} style={{ background: '#003d29', color: 'white', borderRadius: '20px' }}>
            <Title level={3} style={{ color: '#52c41a' }}>¿Por qué elegirnos?</Title>
            <Timeline 
              pending="Evolucionando para ti..." 
              reverse={false}
              style={{ marginTop: '20px' }}
            >
              <Timeline.Item color="#52c41a">
                <Text style={{ color: 'white' }}>Personal técnico altamente capacitado y uniformado.</Text>
              </Timeline.Item>
              <Timeline.Item color="#52c41a">
                <Text style={{ color: 'white' }}>Equipos de termonebulización de última generación.</Text>
              </Timeline.Item>
              <Timeline.Item color="#52c41a">
                <Text style={{ color: 'white' }}>Productos 100% biodegradables (Pet Friendly).</Text>
              </Timeline.Item>
              <Timeline.Item color="#52c41a">
                <Text style={{ color: 'white' }}>Garantía total de satisfacción en cada servicio.</Text>
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
      </Row>

      <Divider style={{ margin: '60px 0' }} />

      {/* ESTADÍSTICAS DE CONFIANZA */}
      <Row gutter={[24, 24]} style={{ textAlign: 'center' }}>
        <Col xs={12} md={6}>
          <Statistic title="Clientes Satisfechos" value={500} prefix={<UserOutlined />} suffix="+" />
        </Col>
        <Col xs={12} md={6}>
          <Statistic title="Zonas de Cobertura" value={10} prefix={<EnvironmentOutlined />} />
        </Col>
        <Col xs={12} md={6}>
          <Statistic title="Certificaciones" value={5} prefix={<SafetyCertificateOutlined />} />
        </Col>
        <Col xs={12} md={6}>
          <Statistic title="Años de Experiencia" value={8} prefix={<TrophyOutlined />} />
        </Col>
      </Row>

      <div style={{ marginTop: '80px', textAlign: 'center', padding: '40px', background: '#f0f2f5', borderRadius: '20px' }}>
        <Title level={3}>Nuestro Compromiso</Title>
        <Paragraph italic>
          "La tranquilidad de vivir en un espacio libre de plagas no tiene precio. 
          En PLA SRL lo hacemos posible."
        </Paragraph>
      </div>
    </MainLayout>
  );
}