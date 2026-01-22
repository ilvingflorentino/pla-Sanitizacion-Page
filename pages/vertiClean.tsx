import React from 'react';
import MainLayout from '../components/main';
import { Typography, Row, Col, Card, Button, Image, Tag, Divider, Space } from 'antd';
import { 
  RocketFilled, 
  ThunderboltFilled, 
  SafetyCertificateFilled, 
  GlobalOutlined, 
  RadarChartOutlined, 
  ArrowRightOutlined, 
  WhatsAppOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function VertiCleanFuturistic() {
  return (
    <MainLayout>
      <div style={{ backgroundColor: '#000814', color: '#fff', minHeight: '100vh' }}>
        
        {/* --- HERO SECTION: CYBERPUNK / TECH STYLE --- */}
        <div style={{ 
          position: 'relative', 
          padding: '120px 20px', 
          background: 'radial-gradient(circle at top right, #001d3d, #000814)',
          overflow: 'hidden'
        }}>
          {/* Decoración de fondo (grid futurista) */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundImage: 'linear-gradient(rgba(24, 144, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 144, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px', opacity: 0.3 
          }} />

          <Row gutter={[40, 40]} align="middle" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
            <Col xs={24} md={12}>
              <Tag color="blue" style={{ background: 'transparent', border: '1px solid #1890ff', color: '#1890ff', marginBottom: '20px' }}>
                Servicios De Última Generación
              </Tag>
              <Title level={1} style={{ color: '#fff', fontSize: 'clamp(40px, 6vw, 70px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '25px' }}>
                VERTICLEAN: <span style={{ color: '#1890ff', textShadow: '0 0 20px rgba(24,144,255,0.5)' }}>EL FUTURO</span> ES HOY
              </Title>
              <Paragraph style={{ color: '#a3b1c6', fontSize: '18px', marginBottom: '40px' }}>
                Desplegamos unidades robóticas aéreas para el mantenimiento de estructuras críticas. 
                Más precisión, mayor seguridad, menor impacto ambiental.
              </Paragraph>
              <Space size="large">
                <Button 
                  type="primary" 
                  size="large" 
                  icon={<WhatsAppOutlined />}
                  style={{ height: '60px', padding: '0 35px', borderRadius: '5px', background: '#1890ff', fontWeight: 'bold' }}
                  href="https://wa.me/18295422989"
                >
                  SOLICITAR DEMO
                </Button>
                <Button 
                  ghost 
                  size="large" 
                  icon={<RadarChartOutlined />}
                  style={{ height: '60px', borderRadius: '5px', borderColor: '#1890ff', color: '#1890ff' }}
                >
                  ESPECIFICACIONES
                </Button>
              </Space>
            </Col>

            <Col xs={24} md={12} style={{ textAlign: 'center' }}>
              <Row gutter={[16, 16]}>
                {[
                  { icon: <RocketFilled />, label: 'SEGURIDAD', val: 'Nivel Aero', color: '#1890ff' },
                  { icon: <ThunderboltFilled />, label: 'EFICIENCIA', val: '78% Fast', color: '#ffc300' },
                  { icon: <GlobalOutlined />, label: 'SOSTENIBLE', val: 'Eco-Clean', color: '#00f5d4' }
                ].map((item, i) => (
                  <Col span={8} key={i}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(24,144,255,0.2)' }}>
                      <div style={{ fontSize: '24px', color: item.color, marginBottom: '10px' }}>{item.icon}</div>
                      <Text strong style={{ color: '#fff', display: 'block' }}>{item.val}</Text>
                      <Text style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px' }}>{item.label}</Text>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
          
          <Title level={2} style={{ color: '#fff', textAlign: 'center', marginBottom: '60px', letterSpacing: '1px' }}>
            SOLUCIONES DE ALTO IMPACTO
          </Title>

          <Row gutter={[30, 30]}>
            {[
              { title: "Paneles Solares", img: "/drone-paneles.png", desc: "Optimización de absorción fotovoltaica mediante limpieza robótica." },
              { title: "Fachadas de Cristal", img: "/Drone-cristales.webp", desc: "Mantenimiento impecable en torres corporativas sin interrumpir labores." },
              { title: "Inspección Industrial", img: "/inspeccion-Drone.webp", desc: "Análisis térmico y estructural mediante visión computarizada avanzada." }
            ].map((app, idx) => (
              <Col xs={24} md={8} key={idx}>
                <Card
                  hoverable
                  style={{ background: '#001d3d', border: '1px solid rgba(24,144,255,0.1)', borderRadius: '20px', overflow: 'hidden' }}
                  cover={<img alt={app.title} src={app.img} style={{ height: '200px', objectFit: 'cover', opacity: 0.8 }} />}
                  bodyStyle={{ color: '#fff' }}
                >
                  <Title level={4} style={{ color: '#1890ff' }}>{app.title}</Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.6)' }}>{app.desc}</Paragraph>
                  <Button type="text" style={{ color: '#fff', padding: 0 }}>
                    Explorar <ArrowRightOutlined />
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          <Divider style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '100px 0' }} />

          {/* --- SECCIÓN TÉCNICA: IMAGEN HUD (ACTUALIZADA) + TEXTO --- */}
          <Row gutter={[60, 40]} align="middle">
            <Col xs={24} md={12}>
              <div style={{ 
                position: 'relative', 
                padding: '10px',
                background: 'rgba(24, 144, 255, 0.05)',
                borderRadius: '20px',
                border: '1px solid rgba(24, 144, 255, 0.3)',
                boxShadow: '0 0 30px rgba(24, 144, 255, 0.2)'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '30px', height: '30px', borderTop: '3px solid #1890ff', borderLeft: '3px solid #1890ff', borderRadius: '15px 0 0 0', zIndex: 3 }} />
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px', borderBottom: '3px solid #1890ff', borderRight: '3px solid #1890ff', borderRadius: '0 0 15px 0', zIndex: 3 }} />

                <div style={{ borderRadius: '15px', overflow: 'hidden', lineHeight: 0, position: 'relative', zIndex: 2 }}>
                  <img 
                    src="/limpieza-drone.webp" 
                    alt="VertiClean Operative Drone" 
                    style={{ width: '100%', height: 'auto', display: 'block', filter: 'brightness(0.9) contrast(1.1)' }} 
                  />
                  
                 

                  <div style={{ position: 'absolute', bottom: '15px', right: '15px', opacity: 0.6 }}>
                    <Text style={{ color: '#fff', fontSize: '10px', fontFamily: 'monospace' }}>
                      VERTI_UNIT_RD.01
                    </Text>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} md={12}>
              <Title level={2} style={{ color: '#fff', letterSpacing: '2px' }}>TECNOLOGÍA VS CONVENCIONAL</Title>
              <div style={{ marginTop: '30px' }}>
                <div style={{ marginBottom: '25px', paddingLeft: '15px', borderLeft: '3px solid #1890ff' }}>
                  <Text strong style={{ color: '#1890ff', fontSize: '18px', display: 'block' }}>RIESGO HUMANO</Text>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                    Nulo. Operación remota desde tierra con sistemas de estabilización automática y sensores anticolisión.
                  </Paragraph>
                </div>
                <div style={{ marginBottom: '25px', paddingLeft: '15px', borderLeft: '3px solid #1890ff' }}>
                  <Text strong style={{ color: '#1890ff', fontSize: '18px', display: 'block' }}>TIEMPO DE EJECUCIÓN</Text>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                    Despliegue en 15 minutos. Limpieza hasta 5 veces más rápida que el rapel o andamios convencionales.
                  </Paragraph>
                </div>
                <div style={{ marginBottom: '25px', paddingLeft: '15px', borderLeft: '3px solid #1890ff' }}>
                  <Text strong style={{ color: '#1890ff', fontSize: '18px', display: 'block' }}>PRECISIÓN</Text>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                    Control de flujo constante y posicionamiento GPS de alta precisión para un acabado uniforme.
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* --- FOOTER BANNER --- */}
        <div style={{ background: 'linear-gradient(90deg, #001d3d 0%, #000814 100%)', padding: '80px 20px', textAlign: 'center' }}>
          <Title level={3} style={{ color: '#fff', marginBottom: '30px' }}>¿LISTO PARA AUTOMATIZAR SU MANTENIMIENTO?</Title>
          <Button 
            type="primary" 
            size="large" 
            style={{ borderRadius: '0', background: '#1890ff', height: '55px', padding: '0 50px', fontWeight: 'bold', boxShadow: '0 0 15px rgba(24,144,255,0.4)' }}
            href="https://wa.me/18295422989"
          >
            INICIAR PROYECTO
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}