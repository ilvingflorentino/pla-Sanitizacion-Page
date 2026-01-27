import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, Menu, Button, Typography, Divider, Drawer } from 'antd';
import { WhatsAppOutlined, EnvironmentOutlined, ApartmentOutlined, MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { key: '1', label: <Link href="/">Inicio</Link> },
    { 
      key: 'sub1', 
      label: 'Nuestras Empresas', 
      icon: <ApartmentOutlined />,
      children: [
        { key: '2', label: <Link href="/pla">PLA (Sanitización)</Link> },
        { key: '5', label: <Link href="/vertiClean">VertiClean (Drones)</Link> },
      ]
    },
    { key: '3', label: <Link href="/nosotros">Nosotros</Link> },
    { key: '4', label: <Link href="/contactos">Contacto</Link> },
    { key: '6', label: <Link href="/vacantes">Vacantes</Link> },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      
      {/* Barra superior de información */}
      <div style={{ 
        background: '#001529', 
        padding: '5px 20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        color: 'white',
        flexWrap: 'wrap'
      }}>
        <Text style={{ color: 'white', fontSize: '11px' }}><EnvironmentOutlined /> Rep. Dominicana</Text>
        <Text style={{ color: 'white', fontSize: '11px' }}>ISLACORP SRL </Text>
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
        padding: '0 20px', 
        justifyContent: 'space-between'
      }}>
        
        {/* LOGO REPARADO: Imagen + Texto */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img 
                src="/islacorp.jpeg" 
                alt="Logo Islacorp" 
                style={{ 
                  width: '35px', 
                  height: '35px', 
                  borderRadius: '4px',
                  objectFit: 'contain',
                  background: '#fff'
                }} 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} // Si la imagen no carga, se oculta para no dejar el icono roto
              />
              <Title level={4} style={{ margin: 0, color: '#001529', fontSize: '18px' }}>
                ISLA<span style={{ color: '#1890ff', fontWeight: 'bold' }}>CORP</span> 
              </Title>
            </div>
          </Link>
        </div>

        {/* MENÚ ESCRITORIO */}
        <div className="desktop-menu" style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
          <Menu
            mode="horizontal"
            style={{ borderBottom: 'none', minWidth: '400px', justifyContent: 'center' }}
            items={menuItems}
          />
        </div>

        {/* BOTÓN Y MENÚ MÓVIL */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Button 
            type="primary" 
            shape="round" 
            icon={<WhatsAppOutlined />} 
            style={{ background: '#001529', borderColor: '#001529' }}
            href="https://wa.me/18295422989?text=Hola%20IslaCorp"
            target="_blank"
            className="header-btn"
          >
            <span className="btn-text">Cotizar</span>
          </Button> 

          <Button 
            className="mobile-menu-btn"
            icon={<MenuOutlined />} 
            onClick={() => setVisible(true)} 
            style={{ display: 'none', background: '#f0f2f5', border: 'none' }} 
          />
        </div>

        <Drawer
          title="Menú ISLACORP"
          placement="right"
          onClose={() => setVisible(false)}
          open={visible}
        >
          <Menu
            mode="inline"
            items={menuItems}
            onClick={() => setVisible(false)}
            style={{ borderRight: 'none' }}
          />
        </Drawer>
      </Header>

      <Content style={{ padding: '0' }}>
        <div style={{ minHeight: '80vh' }}>
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', background: '#001529', color: 'rgba(255,255,255,0.65)', padding: '40px 20px' }}>
        <Title level={3} style={{ color: 'white', marginBottom: '10px', fontSize: '20px' }}>ISLACORP SRL</Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '600px', margin: '0 auto 20px', fontSize: '13px' }}>
          Soluciones integrales de mantenimiento y salud ambientales. Tu Mejor Opción en Servicios Profesionales
        </Paragraph>
        <Divider style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <Text style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px' }}>
          ©2026 IslaCorp SRL.
        </Text>
      </Footer>

      {/* CSS GLOBAL PARA RESPONSIVE */}
      <style jsx global>{`
        @media (max-width: 992px) { /* Aumenté el rango para que el menú no choque con el botón */
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          .btn-text {
            display: none !important; /* Deja solo el icono de WhatsApp en móvil */
          }
          .header-btn {
            padding: 4px 12px !important;
            width: 40px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default MainLayout;