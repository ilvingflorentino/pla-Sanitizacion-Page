import React from 'react';
import MainLayout from './components/main';
import { Typography, Row, Col, Card, Statistic, Divider, Timeline, Tag } from 'antd';
import { 
  SafetyCertificateOutlined, 
  UserOutlined, 
  TrophyOutlined, 
  EnvironmentOutlined,
  FileSearchOutlined,
  SettingOutlined,
  ExperimentOutlined,
  SafetyOutlined
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
            En Pla SRL Sanitización, nuestra misión es proporcionar soluciones integrales 
            en el control de plagas y sanitización, utilizando métodos innovadores que 
            garanticen la seguridad de nuestros clientes, sus familias y el medio ambiente.
          </Paragraph>
          <Paragraph style={{ fontSize: '17px', lineHeight: '1.8' }}>
            PLA,SRL Sanitización es una empresa especializada en y #1 en 
            control de plagas y sanitización, respaldada por un
            equipo técnico altamente capacitado con más de 30 años de experiencia acumulada en el sector
          </Paragraph>
        </Col>

        <Col xs={24} md={12}>
          <Card bordered={false} style={{ background: '#003d29', color: 'white', borderRadius: '20px' }}>
            <Title level={3} style={{ color: '#52c41a' }}>¿Por qué elegirnos?</Title>
           <Timeline

              pending={<Text style={{ color: 'white' ,fontSize: '16px'}}>Evolucionando para ti...</Text>}
              reverse={false}
              style={{ marginTop: '20px' }}
  >
              <Timeline.Item color="#52c41a">
                <Text style={{ color: 'white' }}>Personal técnico altamente capacitado y uniformado.</Text>
              </Timeline.Item>
              <Timeline.Item color="#52c41a">
                <Text style={{ color: 'white' }}>Productos Seguros y Aprobados.</Text>
              </Timeline.Item>
              <Timeline.Item color="#52c41a">
                <Text style={{ color: 'white' }}>Respuestas Rápidas y Soluciones Adaptables.</Text>
              </Timeline.Item>
              <Timeline.Item color="#52c41a">
                <Text style={{ color: 'white' }}>Garantía total de satisfacción y Protocolos de Bioseguridad.</Text>
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
      </Row>

      <Divider style={{ margin: '60px 0' }} />

      {/* NUEVA SECCIÓN: ¿CÓMO TRABAJAMOS? (Basada en tu imagen) */}
      <div style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Tag color="gold" style={{ marginBottom: '10px' }}>PROCESO PLA</Tag>
          <Title level={2} style={{ color: '#003d29' }}>Nuestro Método de Trabajo</Title>
          <Paragraph type="secondary" style={{ fontSize: '16px' }}>
            Seguimos un protocolo riguroso para asegurar la eliminación total de la plaga.
          </Paragraph>
        </div>

        <Row gutter={[16, 32]} justify="center">
          {[
            { title: "Levantamiento gratuito", icon: <FileSearchOutlined />, color: '#fadb14' },
            { title: "Diagnóstico técnico", icon: <SettingOutlined />, color: '#fadb14' },
            { title: "Selección de productos", icon: <ExperimentOutlined />, color: '#fadb14' },
            { title: "Aplicación eficiente", icon: <SafetyOutlined />, color: '#fadb14' },
            { title: "Seguimiento y Garantía", icon: <TrophyOutlined />, color: '#fadb14' }
          ].map((paso, index) => (
            <Col xs={24} sm={12} lg={4} key={index} style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '85px', 
                height: '85px', 
                borderRadius: '50%', 
                backgroundColor: '#003d29', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '32px', 
                margin: '0 auto 15px',
                border: `3px solid ${paso.color}`,
                position: 'relative',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                {paso.icon}
                <div style={{ 
                  position: 'absolute', 
                  bottom: -5, 
                  right: -5, 
                  background: '#fadb14', 
                  color: '#003d29', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  fontSize: '14px', 
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {index + 1}
                </div>
              </div>
              <Text strong style={{ color: '#003d29', fontSize: '14px', display: 'block', padding: '0 10px' }}>
                {paso.title}
              </Text>
            </Col>
          ))}
        </Row>
      </div>

      <Divider style={{ margin: '60px 0' }} />

      {/* ESTADÍSTICAS DE CONFIANZA */}
      <Row gutter={[24, 24]} style={{ textAlign: 'center' }}>
        <Col xs={12} md={6}>
          <Statistic title="Clientes Satisfechos" value={150} prefix={<UserOutlined />} suffix="+" />
        </Col>
        <Col xs={12} md={6}>
          <Statistic title="Zonas de Cobertura" value={10} prefix={<EnvironmentOutlined />} />
        </Col>
        <Col xs={12} md={6}>
          <Statistic title="Certificaciones" value={5} prefix={<SafetyCertificateOutlined />} />
        </Col>
        <Col xs={12} md={6}>
          <Statistic title="Años de Experiencia" value={30} prefix={<TrophyOutlined />} />
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