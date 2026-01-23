import React from 'react';
import Link from 'next/link';
import { Layout, Menu, Button, Typography, Space, Divider } from 'antd';
import { WhatsAppOutlined, EnvironmentOutlined, ApartmentOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Barra superior de información rápida - Actualizada a IslaCorp */}

      
      <div style={{ background: '#001529', padding: '5px 50px', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
        <Text style={{ color: 'white', fontSize: '12px' }}><EnvironmentOutlined /> Cobertura Nacional | República Dominicana</Text>
        <Text style={{ color: 'white', fontSize: '12px' }}>ISLACORP SRL </Text>
      </div>

      <Header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        background: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: '0 50px'
      }}>
        {/* LOGO - Ahora IslaCorp */}
        <div style={{ flex: 1 }}>
          <Link href="/">
            <div style={{ cursor: 'pointer' }}>
              <Title level={4} style={{ margin: 0, color: '#001529' }}>
                ISLA<span style={{ color: '#1890ff', fontWeight: 'bold' }}>CORP</span> 
              </Title>
            </div>
          </Link>
        </div>

        {/* MENÚ HORIZONTAL - Organizado por Empresas */}
        <Menu
          mode="horizontal"
          style={{ flex: 2, borderBottom: 'none', justifyContent: 'center' }}
          items={[
            { key: '1', label: <Link href="/">Inicio</Link> },
            { 
              key: 'sub1', 
              label: 'Nuestras Empresas', 
              icon: <ApartmentOutlined />,
              children: [
                { key: '2', label: <Link href="/pla">PLA (Sanitización)</Link> },
                { key: '5', label: <Link href="vertiClean">VertiClean (Drones)</Link> },
              ]
            },
            { key: '3', label: <Link href="/nosotros">Nosotros</Link> },
            { key: '4', label: <Link href="/contactos">Contacto</Link> },
            { key: '5', label: <Link href="/vacantes">Vacantes</Link> },
          ]}
        />

        {/* BOTÓN DE ACCIÓN RÁPIDA */}
        <div style={{ flex: 1, textAlign: 'right' }}>
          <Button 
            type="primary" 
            shape="round" 
            icon={<WhatsAppOutlined />} 
            style={{ background: '#001529', borderColor: '#001529' }}
            href="https://wa.me/18295422989?text=Hola%20IslaCorp,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios."
            target="_blank"
           >
            Cotizar Ahora
          </Button> 
        </div>
      </Header>

      <Content style={{ padding: '0' }}>
        <div style={{ minHeight: '80vh' }}>
          {children}
        </div>
      </Content>

      {/* FOOTER - Representando al Grupo */}
      <Footer style={{ textAlign: 'center', background: '#001529', color: 'rgba(255,255,255,0.65)', padding: '50px' }}>
        <Title level={3} style={{ color: 'white', marginBottom: '10px' }}>ISLACORP SRL</Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '600px', margin: '0 auto 20px' }}>
          Soluciones integrales de mantenimiento y salud ambiental. 
          Integrando tecnología y especialización a través de nuestras marcas PLA y VertiClean.
        </Paragraph>
        <Divider style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <Text style={{ color: 'rgba(255,255,255,0.45)' }}>
          ©2025 IslaCorp SRL. Todos los derechos reservados.
        </Text>
      </Footer>
    </Layout>
  );
};

export default MainLayout;