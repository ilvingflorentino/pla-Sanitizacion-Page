import React from 'react';
import MainLayout from '../components/main';
import { Typography, Button, Card, Col, Row, Form, Input, Select, message, Divider, Space, Tag } from 'antd';
import { RocketOutlined, ExperimentOutlined, LinkOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

export default function UneteNosotros() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // TUS CREDENCIALES REALES
    const serviceID = 'service_5ynzidj';
    const templateID = 'template_u38jdiw';
    const publicKey = 'MjTuVknNQEIanjDZF';

    const templateParams = {
      nombre: values.nombre,
      email: values.email,
      division: values.division,
      experiencia: values.experiencia,
      cv_link: values.cv_link,
    };

    const hide = message.loading('Enviando tu postulación...', 0);

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        hide();
        message.success('¡Postulación enviada! Te atenderemos lo antes posible.');
        form.resetFields();
      })
      .catch((err: any) => {
        hide();
        console.error('Error al enviar:', err);
        message.error('Hubo un error al enviar. Revisa tu conexión.');
      });
  };

  return (
    <MainLayout>
      {/* HEADER AJUSTADO PARA MÓVIL */}
      <div style={{ 
        padding: '100px 20px 80px', // Reducido el padding para pantallas pequeñas
        background: 'linear-gradient(135deg, #001529 0%, #003a8c 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <Title level={1} style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(24px, 8vw, 40px)' }}>
          Sé parte del Futuro
        </Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(14px, 4vw, 18px)', maxWidth: '800px', margin: '0 auto' }}>
          En ISLACORP buscamos mentes innovadoras para nuestras divisiones de VertiClean y PLA.
        </Paragraph>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div style={{ maxWidth: '1100px', margin: '-40px auto 100px', padding: '0 15px', position: 'relative', zIndex: 10 }}>
        <Row gutter={[24, 24]}> {/* Espaciado vertical entre tarjetas en móvil */}
          
          {/* LADO IZQUIERDO: INFO (Aparece primero en móvil) */}
          <Col xs={24} lg={10}>
            <Card style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', height: '100%' }}>
              <Title level={3}>¿Por qué unirte?</Title>
              <Space direction="vertical" size="large" style={{ marginTop: '10px', width: '100%' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <RocketOutlined style={{ fontSize: '24px', color: '#1890ff', marginTop: '4px' }} />
                  <div>
                    <Text strong>Innovación constante</Text><br/>
                    <Text type="secondary">Vuela los drones más avanzados del Caribe.</Text>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <ExperimentOutlined style={{ fontSize: '24px', color: '#52c41a', marginTop: '4px' }} />
                  <div>
                    <Text strong>Seguridad y Salud</Text><br/>
                    <Text type="secondary">Expertos en sanitización industrial.</Text>
                  </div>
                </div>
              </Space>
              <Divider />
              <Title level={4}>Nuestras Áreas</Title>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <Tag color="blue">Operaciones</Tag>
                <Tag color="green">Técnicos</Tag>
                <Tag color="orange">Ingeniería</Tag>
              </div>
            </Card>
          </Col>

          {/* LADO DERECHO: FORMULARIO */}
          <Col xs={24} lg={14}>
            <Card style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Title level={3}>Aplica Aquí</Title>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                  {/* Nombre y Email ahora se apilan en móvil (xs=24) */}
                  <Col xs={24} sm={12}>
                    <Form.Item name="nombre" label="Nombre Completo" rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}>
                      <Input placeholder="Tu nombre" size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item name="email" label="Correo" rules={[{ required: true, type: 'email', message: 'Ingresa un correo válido' }]}>
                      <Input placeholder="correo@ejemplo.com" size="large" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item name="division" label="División" rules={[{ required: true, message: 'Selecciona una división' }]}>
                  <Select placeholder="Selecciona una división" size="large">
                    <Option value="VertiClean">VertiClean (Drones)</Option>
                    <Option value="PLA">PLA (Sanitización)</Option>
                  </Select>
                </Form.Item>

                <Form.Item name="experiencia" label="Resumen de Experiencia">
                  <Input.TextArea rows={4} placeholder="Cuéntanos un poco sobre tu trayectoria..." />
                </Form.Item>

                <Form.Item 
                  name="cv_link" 
                  label="Enlace a tu CV (Google Drive o LinkedIn)" 
                  rules={[{ required: true, message: 'El enlace al CV es obligatorio' }]}
                >
                  <Input prefix={<LinkOutlined />} placeholder="https://drive.google.com/..." size="large" />
                </Form.Item>

                <Button 
                  type="primary" 
                  htmlType="submit" 
                  size="large" 
                  block 
                  style={{ 
                    height: '55px', 
                    borderRadius: '12px', 
                    fontWeight: 'bold',
                    fontSize: '16px',
                    marginTop: '10px'
                  }}
                >
                  ENVIAR MI SOLICITUD
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}