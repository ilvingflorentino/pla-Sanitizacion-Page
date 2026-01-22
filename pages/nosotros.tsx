import React from 'react';
import MainLayout from '../components/main';
import { Typography, Row, Col, Card, Divider, Tag, Space, Timeline, Statistic } from 'antd';
import { 
  SafetyCertificateOutlined, 
  TrophyOutlined, 
  RocketOutlined,
  HistoryOutlined,
  CheckCircleOutlined,
  BulbOutlined,
  SafetyOutlined,
  DeploymentUnitOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Nosotros() {
  return (
    <MainLayout>
      {/* SECCIÓN 1: BIENVENIDA A ISLACORP */}
      <div style={{ 
        textAlign: 'center', 
        padding: '80px 20px', 
        background: 'linear-gradient(135deg, #001529 0%, #002140 100%)', 
        color: 'white',
        borderRadius: '0 0 50px 50px'
      }}>
        <Tag color="blue" style={{ marginBottom: '15px' }}>GRUPO EMPRESARIAL</Tag>
        <Title level={1} style={{ color: 'white', marginBottom: '10px' }}>Sobre ISLACORP SRL</Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
          La unión perfecta entre 30 años de maestría técnica y la vanguardia en tecnología robótica aplicada.
        </Paragraph>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* SECCIÓN 2: LA HISTORIA (PLA COMO BASE) */}
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12}>
            <Title level={2}><HistoryOutlined /> Nuestra Trayectoria</Title>
            <Paragraph style={{ fontSize: '17px', lineHeight: '1.8', textAlign: 'justify' }}>
              Nuestra historia comienza con <strong>PLA Sanitización</strong>, una empresa que durante más de tres décadas ha liderado el control de plagas y la salud ambiental en la República Dominicana. 
            </Paragraph>
            <Paragraph style={{ fontSize: '17px', lineHeight: '1.8', textAlign: 'justify' }}>
              Bajo la sombrilla de <strong>IslaCorp</strong>, hoy expandimos ese legado con <strong>VertiClean</strong>, introduciendo drones de última generación para revolucionar el mantenimiento industrial y la limpieza de altura, eliminando riesgos y optimizando recursos.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Card bordered={false} style={{ background: '#f0f5ff', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <Timeline
                items={[
                  {
                    color: '#389e0d',
                    children: (
                      <>
                        <Text strong>El Legado de PLA</Text>
                        <Paragraph style={{ margin: 0 }}>Más de 30 años garantizando bioseguridad y salud ambiental en el territorio nacional.</Paragraph>
                      </>
                    ),
                  },
                  {
                    color: '#1890ff',
                    children: (
                      <>
                        <Text strong>Innovación VertiClean</Text>
                        <Paragraph style={{ margin: 0 }}>Implementación de tecnología aeroespacial para mantenimiento industrial eficiente.</Paragraph>
                      </>
                    ),
                  },
                ]}
              />
            </Card>
          </Col>
        </Row>

        <Divider style={{ margin: '60px 0' }} />

        {/* SECCIÓN 3: LAS DOS MARCAS LADO A LADO */}
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Nuestras Divisiones Especializadas</Title>
        <Row gutter={[32, 32]}>
          {/* COLUMNA PLA */}
          <Col xs={24} md={12}>
            <Card 
              hoverable 
              style={{ height: '100%', borderRadius: '20px', borderTop: '6px solid #389e0d' }}
              bodyStyle={{ padding: '30px' }}
            >
              <Space style={{ marginBottom: '20px' }}>
                <SafetyOutlined style={{ fontSize: '28px', color: '#389e0d' }} />
                <Title level={3} style={{ margin: 0 }}>PLA Sanitización</Title>
              </Space>
              <Paragraph style={{ fontSize: '15px' }}>
                Expertos en control de plagas y sanitización profunda. Utilizamos métodos certificados que garantizan la bioseguridad de espacios residenciales y comerciales.
              </Paragraph>
              <Space direction="vertical">
                <Text><CheckCircleOutlined style={{ color: '#389e0d' }} /> Personal altamente capacitado.</Text>
                <Text><CheckCircleOutlined style={{ color: '#389e0d' }} /> Productos certificados de baja toxicidad.</Text>
                <Text><CheckCircleOutlined style={{ color: '#389e0d' }} /> Cumplimiento estricto de normas de salud.</Text>
              </Space>
            </Card>
          </Col>

          {/* COLUMNA VERTICLEAN */}
          <Col xs={24} md={12}>
            <Card 
              hoverable 
              style={{ height: '100%', borderRadius: '20px', borderTop: '6px solid #1890ff' }}
              bodyStyle={{ padding: '30px' }}
            >
              <Space style={{ marginBottom: '20px' }}>
                <RocketOutlined style={{ fontSize: '28px', color: '#1890ff' }} />
                <Title level={3} style={{ margin: 0 }}>VertiClean</Title>
              </Space>
              <Paragraph style={{ fontSize: '15px' }}>
                Lideramos la limpieza de altura con drones. Eliminamos el peligro del trabajo humano en andamios, ofreciendo rapidez y precisión técnica sin precedentes.
              </Paragraph>
              <Space direction="vertical">
                <Text><DeploymentUnitOutlined style={{ color: '#1890ff' }} /> Limpieza 78% más rápida.</Text>
                <Text><DeploymentUnitOutlined style={{ color: '#1890ff' }} /> Cero riesgo de accidentes laborales.</Text>
                <Text><DeploymentUnitOutlined style={{ color: '#1890ff' }} /> Tecnología de precisión en fachadas y paneles.</Text>
              </Space>
            </Card>
          </Col>
        </Row>

        <Divider style={{ margin: '80px 0' }} />

        {/* SECCIÓN 4: MISIÓN Y VISIÓN UNIFICADA */}
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card 
              title={<Space><CheckCircleOutlined style={{ color: '#1890ff' }} /> <Text strong>Nuestra Misión</Text></Space>} 
              bordered={false} 
              style={{ background: '#f8f9fa', borderRadius: '20px', height: '100%' }}
            >
              Proporcionar soluciones integrales de mantenimiento y sanitización que aseguren la salud ambiental y la preservación de infraestructuras, combinando la experiencia técnica acumulada con la innovación robótica.
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card 
              title={<Space><BulbOutlined style={{ color: '#1890ff' }} /> <Text strong>Nuestra Visión</Text></Space>} 
              bordered={false} 
              style={{ background: '#f8f9fa', borderRadius: '20px', height: '100%' }}
            >
              Consolidarnos como el grupo empresarial referente en el Caribe, reconocido por transformar servicios tradicionales a través de la tecnología, la seguridad y la excelencia operativa.
            </Card>
          </Col>
        </Row>

        {/* CIERRE Y CIFRAS */}
        <div style={{ marginTop: '80px', textAlign: 'center', padding: '50px 20px', background: '#001529', borderRadius: '30px', color: 'white' }}>
          <Row gutter={[24, 40]}>
            <Col xs={12} md={6}>
              <Statistic title={<Text style={{color: 'rgba(255,255,255,0.7)'}}>Años de Experiencia</Text>} value={30} suffix="+" valueStyle={{color: 'white', fontWeight: 'bold'}} />
            </Col>
            <Col xs={12} md={6}>
              <Statistic title={<Text style={{color: 'rgba(255,255,255,0.7)'}}>Seguridad Física</Text>} value={100} suffix="%" valueStyle={{color: '#52c41a', fontWeight: 'bold'}} />
            </Col>
            <Col xs={12} md={6}>
              <Statistic title={<Text style={{color: 'rgba(255,255,255,0.7)'}}>Proyectos Realizados</Text>} value={500} suffix="+" valueStyle={{color: 'white', fontWeight: 'bold'}} />
            </Col>
            <Col xs={12} md={6}>
              <Statistic title={<Text style={{color: 'rgba(255,255,255,0.7)'}}>Clientes Satisfechos</Text>} value={250} suffix="+" valueStyle={{color: '#52c41a', fontWeight: 'bold'}} />
            </Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
}