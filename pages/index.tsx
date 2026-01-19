import MainLayout from './components/main';
import { Typography, Button, Card, Col, Row, Tag, Carousel, Divider, Space } from 'antd';
import { 
  CheckCircleFilled, 
  WhatsAppOutlined, 
  SafetyOutlined, 
  ExperimentOutlined,
  EnvironmentOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Home() {
  const logoWrapperStyle: React.CSSProperties = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  };

  const logoImgStyle: React.CSSProperties = {
    maxHeight: '60px',
    maxWidth: '85%',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    opacity: 0.7,
    transition: 'all 0.3s ease'
  };

  return (
    <MainLayout>
      {/* SECCIÓN HERO */}
      <div style={{ 
        padding: '60px 20px', 
        background: 'linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%)', 
        borderRadius: '20px',
        marginBottom: '40px',
        textAlign: 'center',
        border: '1px solid #b7eb8f'
      }}>
        <Tag color="success" style={{ marginBottom: '10px' }}>SOMOS</Tag>
        <Title level={1} style={{ color: '#135200', marginTop: 0 }}>PLA SRL SANITIZACIÓN</Title>
        <Paragraph style={{ fontSize: '18px', color: '#389e0d' }}>
          Protegiendo tu salud y tus espacios con estándares industriales.
        </Paragraph>
       <Button 
  type="primary" 
  size="large" 
  icon={<WhatsAppOutlined />} 
  style={{ 
    background: '#389e0d', 
    borderColor: '#389e0d', 
    borderRadius: '25px',
    height: '50px', // Añadido para mejor presencia
    padding: '0 30px' 
  }}
  // Enlace configurado para tu número: +1 (829) 542-2989
  href="https://wa.me/18295422989?text=Hola%20Pla%20SRL%20Sanitización,%20vi%20su%20página%20web%20y%20me%20gustaría%20solicitar%20una%20cotización."
  target="_blank"
>
  Cotizar Ahora
</Button>
      </div>

{/* 2. El componente del Carrusel */}
<div style={{ padding: '40px 0', background: '#fff' }}>
  <Divider orientation="horizontal">CONFIAN EN NOSOTROS</Divider>
  
  <Carousel 
    autoplay 
    dots={false} 
    slidesToShow={5} // Mostramos 5 para que fluyan mejor
    responsive={[
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } }
    ]}
  >
    {[
      { src: "/Referencia-logo.png", alt: "Laboratorio Referencia" },
      { src: "/Ccn-logo.webP", alt: "CCN" },
      { src: "/Synergies-logo.png", alt: "Synergies" },
      { src: "/Eted-logo.png", alt: "ETED" },
      { src: "/Changan-logo.png", alt: "Changan" },
      { src: "/Mayol-logo.webP", alt: "Mayol & Co" },
      { src: "/BD-logo.jpg", alt: "Bonanza Dominicana" },
      { src: "/Elias-logo.png", alt: "Elias Distribución" },
      { src: "/Cine-logo.webP", alt: "Cinematográfica Blancica" }
    ].map((cliente, index) => {
      // Ajuste especial para los logos que mencionaste que se ven pequeños
      const esPequeño = ["Cine-logo.webP", "Eted-logo.png", "BD-logo.jpg", "Changan-logo.png", "Mayol-logo.webP"].includes(cliente.src.replace('/', ''));
      
      return (
        <div key={index}>
          <div style={logoWrapperStyle}>
            <img 
              src={cliente.src} 
              alt={cliente.alt} 
              style={{
                ...logoImgStyle,
                transform: esPequeño ? 'scale(1.4)' : 'scale(1)', // Agranda un 40% más los logos pequeños
              }} 
              className="client-logo" 
            />
          </div>
        </div>
      );
    })}
  </Carousel>
</div>
      {/* TARJETAS - Usando 'top' o 'bottom' para evitar el error de 'middle' */}
      <Row gutter={[24, 24]} align="top"> 
        {[
          { title: 'Desinfección', icon: <SafetyOutlined />, color: '#389e0d' },
          { title: 'Fumigación', icon: <ExperimentOutlined />, color: '#73d13d' },
          { title: 'Control Total', icon: <CheckCircleFilled />, color: '#237804' }
        ].map((item, i) => (
          <Col xs={24} md={8} key={i}>
            <Card hoverable style={{ textAlign: 'center', borderRadius: '15px' }}>
              <div style={{ fontSize: '40px', color: item.color, marginBottom: '15px' }}>{item.icon}</div>
              <Title level={4}>{item.title}</Title>
              <Text type="secondary">Calidad garantizada PLA SRL.</Text>
            </Card>
          </Col>
        ))}
      </Row>
  <Divider orientation="horizontal" style={{ marginTop: '60px', color: '#003d29' }}>NUESTRA UBICACIÓN</Divider>

<div style={{ 
  width: '100%', 
  height: '450px', 
  borderRadius: '20px', 
  overflow: 'hidden', 
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginBottom: '40px'
}}>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1679.375859225407!2d-69.95778630681471!3d18.449847286571007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sdo!4v1768840149402!5m2!1ses!2sdo"
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen={true} 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      <style jsx global>{`
        .client-logo:hover { filter: grayscale(0%) !important; opacity: 1 !important; transform: scale(1.1); }
      `}</style>
    </MainLayout>
  );
}