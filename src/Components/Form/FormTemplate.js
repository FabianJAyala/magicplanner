import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com"
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import "../../Components/Styles/FormTemplate.css";
import * as formik from 'formik';
import * as yup from 'yup';

function FormTemplate() {
  const form = useRef();

  const { Formik } = formik;

  const [isSuccessAlertShown, setIsSuccessAlertShown] = useState(false);
  const [isErrorAlertShown, setIsErrorAlertShown] = useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required("El nombre es un espacio requerido."),
    lastName: yup.string().required("El apellido es un espacio requerido."),
    email: yup.string().email("Porfavor ingrese un email valido.").required("El email es un espacio requerido."),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, {message: "Porfavor ingrese un teléfono valido.", excludeEmptyString: false}),
    travelDate: yup.date(),
    travelDestination: yup.string(),
    message: yup.string(),
    subscription: yup.bool(),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        travelDate: '',
        travelDestination: '',
        message: '',
        subscription: true,
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        emailjs.sendForm('service_81ropxn', 'template_d67ye0w', form.current, '-9O7KV2iJPn-faFHq')
        .then((result) => {
          setIsSuccessAlertShown(true);
          setIsErrorAlertShown(false);
          resetForm();
          setSubmitting(false);
        })
        .catch((error) => {
          setIsSuccessAlertShown(false);
          setIsErrorAlertShown(true);
          setSubmitting(false);
        });
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form ref={form} onSubmit={handleSubmit}>
          {isSuccessAlertShown && (
            <Alert variant="success">
              Su mensaje fue enviado exitosamente!
              La cotización será enviada directamente a su correo.
            </Alert>
          )}
          {isErrorAlertShown && (
            <Alert variant="warning">
              Hubo un problema al enviar la cotización.
              Intente nuevamente en unos minutos.
            </Alert>
          )}
          <Row className="mb-3">
          <Form.Group className="phone-space" as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Nombre *</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={touched.firstName && !!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02">
              <Form.Label>Apellido *</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={touched.lastName && !!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group className="phone-space" as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group className="phone-space" as={Col} md="6" controlId="validationFormik05">
              <Form.Label>Fecha estimada de viaje</Form.Label>
              <Form.Control
                type="date"
                name="travelDate"
                value={values.travelDate}
                onChange={handleChange}
                isInvalid={!!errors.travelDate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.travelDate}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik06">
              <Form.Label>Destino de viaje</Form.Label>
              <Form.Control
                type="text"
                name="travelDestination"
                value={values.travelDestination}
                onChange={handleChange}
                isInvalid={!!errors.travelDestination}
              />
              <Form.Control.Feedback type="invalid">
                {errors.travelDestination}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
          <Form.Group as={Col} md="12" controlId="validationFormik07">
              <Form.Label>Deja tu mensaje aquí</Form.Label>
              <Form.Control
                type="text"
                name="message"
                value={values.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormikCheckbox">
              <Form.Label>
                <input
                  type="checkbox"
                  name="subscription"
                  checked={values.subscription}
                  onChange={handleChange}
                />
                {' '}
                Quiero recibir información de ofertas y noticias de Adri Magic Planner.
              </Form.Label>
            </Form.Group>
          </Row>
          <Button className="custom-btn" variant="dark" type="submit">Enviar Formulario</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormTemplate;