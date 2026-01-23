import React from 'react';
import MainLayout from '../components/main';
import { Typography, Button, Card, Col, Row, Form, Input, Select, message, Divider, Space, Tag } from 'antd';
import { RocketOutlined, ExperimentOutlined, UserOutlined, LinkOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser'; // Asegúrate de tenerlo instalado: npm install @emailjs/browser

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

export default function UneteNosotros() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // TUS CREDENCIALES REALES
    const serviceID = 'service_5ynzidj';
    const templateID = 'template_u38jdiw';
    const publicKey = 'MjTuVknNQEIanjDZF';

    // Mapeo de datos para que coincidan con tus {{llaves}} en EmailJS
    const templateParams = {
      nombre: values.nombre,
      email: values.email,
      division: values.division,
      experiencia: values.experiencia,
      cv_link: values.cv_link, // El enlace al Drive/LinkedIn
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
      <div style={{ 
        padding: '120px 20px 60px', 
        background: 'linear-gradient(135deg, #001529 0%, #003a8c 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <Title level={1} style={{ color: 'white', fontWeight: 800 }}>Sé parte del Futuro</Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
          En ISLACORP buscamos mentes innovadoras para nuestras divisiones de VertiClean y PLA.
        </Paragraph>
      </div>

      <div style={{ maxWidth: '1100px', margin: '-50px auto 100px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} lg={10}>
            <Card style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', height: '100%' }}>
              <Title level={3}>¿Por qué unirte?</Title>
              <Space direction="vertical" size="large" style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <RocketOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                  <div>
                    <Text strong>Innovación constante</Text><br/>
                    <Text type="secondary">Vuela los drones más avanzados del Caribe.</Text>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <ExperimentOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                  <div>
                    <Text strong>Seguridad y Salud</Text><br/>
                    <Text type="secondary">Expertos en sanitización industrial.</Text>
                  </div>
                </div>
              </Space>
              <Divider />
              <Title level={4}>Nuestras Áreas</Title>
              <Tag color="blue">Operaciones</Tag>
              <Tag color="green">Técnicos</Tag>
              <Tag color="orange">Ingeniería</Tag>
            </Card>
          </Col>

          <Col xs={24} lg={14}>
            <Card style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Title level={3}>Aplica Aquí</Title>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="nombre" label="Nombre Completo" rules={[{ required: true }]}>
                      <Input placeholder="Tu nombre" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="email" label="Correo" rules={[{ required: true, type: 'email' }]}>
                      <Input placeholder="correo@ejemplo.com" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item name="division" label="División" rules={[{ required: true }]}>
                  <Select placeholder="Selecciona">
                    <Option value="VertiClean">VertiClean (Drones)</Option>
                    <Option value="PLA">PLA (Sanitización)</Option>
                  </Select>
                </Form.Item>

                <Form.Item name="experiencia" label="Experiencia">
                  <Input.TextArea rows={3} placeholder="Breve resumen..." />
                </Form.Item>

                {/* CAMBIO CLAVE: De Upload a Input de enlace para EmailJS */}
                <Form.Item 
                  name="cv_link" 
                  label="Enlace a tu CV (PDF en Drive o LinkedIn)" 
                  rules={[{ required: true, message: 'El enlace al CV es necesario' }]}
                >
                  <Input prefix={<LinkOutlined />} placeholder="https://drive.google.com/..." />
                </Form.Item>

                <Button type="primary" htmlType="submit" size="large" block style={{ height: '50px', borderRadius: '8px' }}>
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