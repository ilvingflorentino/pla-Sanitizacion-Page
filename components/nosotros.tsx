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
  SafetyOutlined
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
          La unión perfecta entre 30 años de maestría técnica y la vanguardia en tecnología robótica.
        </Paragraph>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* SECCIÓN 2: LA HISTORIA (PLA COMO BASE) */}
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12}>
            <Title level={2}><HistoryOutlined /> Nuestra Trayectoria</Title>
            <Paragraph style={{ fontSize: '17px', lineHeight: '1.8' }}>
              Nuestra historia comienza con <strong>PLA Sanitización</strong>, una empresa que durante más de tres décadas ha liderado el control de plagas y la salud ambiental en la República Dominicana. 
            </Paragraph>
            <Paragraph style={{ fontSize: '17px', lineHeight: '1.8' }}>
              Bajo la sombrilla de <strong>IslaCorp</strong>, hoy expandimos ese legado con <strong>VertiClean</strong>, introduciendo drones de última generación para revolucionar el mantenimiento industrial y la limpieza de altura.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Card bordered={false} style={{ background: '#f0f5ff', borderRadius: '20px' }}>
              <Timeline
                items={[
                  {
                    color: '#389e0d',
                    children: (
                      <>
                        <Text strong>El Legado de PLA</Text>
                        <Paragraph>Más de 30 años garantizando bioseguridad y salud ambiental.</Paragraph>
                      </>
                    ),
                  },
                  {
                    color: '#1890ff',
                    children: (
                      <>
                        <Text strong>Innovación VertiClean</Text>
                        <Paragraph>Tecnología aérea aplicada a la eficiencia y seguridad total.</Paragraph>
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
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Nuestras Divisiones</Title>
        <Row gutter={[32, 32]}>
          {/* COLUMNA PLA */}
          <Col xs={24} md={12}>
            <Card hoverable style={{ height: '100%', borderRadius: '20px', borderTop: '6px solid #389e0d' }}>
              <Space><SafetyOutlined style={{ fontSize: '24px', color: '#389e0d' }} /><Title level={3} style={{ margin: 0 }}>PLA Sanitización</Title></Space>
              <Paragraph style={{ marginTop: '15px' }}>
                Especialistas #1 en control de plagas y sanitización profunda. 
                Utilizamos métodos innovadores que garantizan la seguridad de familias y empresas dominicanas.
              </Paragraph>
              <ul style={{ paddingLeft: '20px', color: '#595959' }}>
                <li>Personal altamente capacitado.</li>
                <li>Productos seguros y aprobados.</li>
                <li>Garantía total de satisfacción.</li>
              </ul>
            </Card>
          </Col>

         {/* --- INICIO SECCIÓN VERTICLEAN --- */}
<div style={{ marginTop: '60px' }}>
  <Row gutter={[48, 48]} align="middle">
    {/* Columna de Texto Informativo */}
    <Col xs={24} md={12}>
      <div style={{ borderLeft: '5px solid #1890ff', paddingLeft: '20px', marginBottom: '20px' }}>
        <Tag color="blue" style={{ marginBottom: '10px' }}>DIVISIÓN TECNOLÓGICA</Tag>
        <Title level={2} style={{ color: '#001529', marginTop: 0 }}>VertiClean: Innovación en Altura</Title>
      </div>
      
      <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'justify' }}>
        VertiClean redefine el mantenimiento industrial mediante la integración de **tecnología robótica aérea**. Nuestra misión es clara: eliminar los riesgos asociados al trabajo en altura y maximizar la eficiencia operativa.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={12}>
          <Card size="small" style={{ borderRadius: '15px', background: '#e6f7ff', border: 'none' }}>
            <Text strong><RocketOutlined style={{ color: '#1890ff' }} /> Eficiencia</Text>
            <Paragraph style={{ fontSize: '12px', margin: 0 }}>Limpieza un 78% más rápida que los métodos convencionales.</Paragraph>
          </Card>
        </Col>
        <Col span={12}>
          <Card size="small" style={{ borderRadius: '15px', background: '#f0f5ff', border: 'none' }}>
            <Text strong><SafetyCertificateOutlined style={{ color: '#1890ff' }} /> Seguridad</Text>
            <Paragraph style={{ fontSize: '12px', margin: 0 }}>Riesgo cero de caídas al operar 100% desde el suelo.</Paragraph>
          </Card>
        </Col>
      </Row>

      <div style={{ marginTop: '30px' }}>
        <Title level={4}>¿Qué nos diferencia?</Title>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}><CheckCircleFilled style={{ color: '#1890ff', marginRight: '10px' }} /> <strong>Ahorro de Recursos:</strong> Reducción drástica en el uso de agua y químicos.</li>
          <li style={{ marginBottom: '10px' }}><CheckCircleFilled style={{ color: '#1890ff', marginRight: '10px' }} /> <strong>Precisión Aeroespacial:</strong> Sensores ultrasónicos para un acabado uniforme.</li>
          <li><CheckCircleFilled style={{ color: '#1890ff', marginRight: '10px' }} /> <strong>Sin Andamios:</strong> Instalación inmediata sin obstruir el tránsito o la vista.</li>
        </ul>
      </div>
    </Col>

    {/* Columna de Imagen / Visual */}
    <Col xs={24} md={12}>
      <div style={{ position: 'relative' }}>
        <Image 
          src="/drone-tecnico.jpg" 
          alt="Operativo VertiClean"
          style={{ borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
          fallback="https://via.placeholder.com/600x500?text=VertiClean+Tecnologia"
        />
        {/* Badge flotante de impacto */}
        <div style={{ 
          position: 'absolute', 
          bottom: '20px', 
          right: '20px', 
          background: 'white', 
          padding: '15px 25px', 
          borderRadius: '20px', 
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <Text type="secondary" style={{ display: 'block', fontSize: '12px' }}>RIESGO LABORAL</Text>
          <Title level={3} style={{ margin: 0, color: '#52c41a' }}>0%</Title>
        </div>
      </div>
    </Col>
  </Row>
</div>
{/* --- FIN SECCIÓN VERTICLEAN --- */}
        <Divider style={{ margin: '80px 0' }} />

        {/* SECCIÓN 4: MISIÓN Y VISIÓN UNIFICADA */}
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card title={<><CheckCircleOutlined style={{ color: '#1890ff' }} /> Nuestra Misión</>} bordered={false} style={{ background: '#f8f9fa', borderRadius: '20px' }}>
              Proporcionar soluciones integrales de mantenimiento y sanitización que aseguren la salud ambiental y la preservación de infraestructuras, combinando experiencia técnica con innovación robótica.
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title={<><BulbOutlined style={{ color: '#1890ff' }} /> Nuestra Visión</>} bordered={false} style={{ background: '#f8f9fa', borderRadius: '20px' }}>
              Liderar el mercado como el grupo empresarial más confiable y tecnológico, transformando industrias tradicionales a través de la eficiencia y la seguridad.
            </Card>
          </Col>
        </Row>

        {/* CIERRE Y CIFRAS */}
        <div style={{ marginTop: '80px', textAlign: 'center', padding: '40px', background: '#001529', borderRadius: '30px', color: 'white' }}>
          <Row gutter={[24, 24]}>
            <Col xs={12} md={6}><Statistic title={<Text style={{color: 'white'}}>Años Experiencia</Text>} value={30} suffix="+" valueStyle={{color: '#1890ff'}} /></Col>
            <Col xs={12} md={6}><Statistic title={<Text style={{color: 'white'}}>Seguridad</Text>} value={100} suffix="%" valueStyle={{color: '#52c41a'}} /></Col>
            <Col xs={12} md={6}><Statistic title={<Text style={{color: 'white'}}>Proyectos</Text>} value={500} suffix="+" valueStyle={{color: '#1890ff'}} /></Col>
            <Col xs={12} md={6}><Statistic title={<Text style={{color: 'white'}}>Clientes</Text>} value={250} suffix="+" valueStyle={{color: '#52c41a'}} /></Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
}