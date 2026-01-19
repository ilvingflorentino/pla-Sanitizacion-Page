import React from 'react';
import Link from 'next/link';
import { Layout, Menu, Button, Typography, Space } from 'antd';
import { WhatsAppOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Barra superior de información rápida */}
      <div style={{ background: '#003d29', padding: '5px 50px', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
        <Text style={{ color: 'white', fontSize: '12px' }}><EnvironmentOutlined /> Cobertura en toda la ciudad</Text>
        <Text style={{ color: 'white', fontSize: '12px' }}>Pla SRL Sanitización </Text>
      </div>



      <Header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1, 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        background: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: '0 50px'
      }}>
        {/* LOGO */}
        <div style={{ flex: 1 }}>
          <Link href="/">
            <Title level={4} style={{ margin: 0, color: '#237804', cursor: 'pointer' }}>
              PLA <span style={{ color: '#003d29', fontWeight: 300 }}>SANITIZACIÓN</span> 
            </Title>
          </Link>
        </div>

        {/* MENÚ HORIZONTAL */}
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ flex: 2, borderBottom: 'none', justifyContent: 'center' }}
          items={[
            { key: '1', label: <Link href="/">Inicio</Link> },
            { key: '2', label: <Link href="/servicios">Servicios</Link> },
            { key: '3', label: <Link href="/nosotros">Nosotros</Link> },
            { key: '4', label: <Link href="/contactos">Contacto</Link> },
          ]}
        />

        {/* BOTÓN DE ACCIÓN RÁPIDA */}
        <div style={{ flex: 1, textAlign: 'right' }}>
          <Button 
            type="primary" 
            shape="round" 
            icon={<WhatsAppOutlined />} 
            style={{ background: '#52c41a', border: 'none' }}
        href="https://wa.me/18295422989?text=Hola%20Pla%20SRL%20Sanitización,%20vi%20su%20página%20web%20y%20me%20gustaría%20solicitar%20una%20cotización."
        target="_blank"
           >
            Cotizar Gratis
          </Button> 
        </div>
      </Header>
      <Content style={{ padding: '0' }}>
        <div style={{ minHeight: '80vh' }}>
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', background: '#001529', color: 'rgba(255,255,255,0.65)', padding: '50px' }}>
        <Title level={3} style={{ color: 'white' }}>PLA SRL </Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.45)' }}>
          Líderes en control de plagas y sanitización profesional. 
        </Paragraph>
        <Text style={{ color: 'white' }}>©2025 Pla SRL Sanitización. Todos los derechos reservados.</Text>
      </Footer>
    </Layout>
  );
};

export default MainLayout;