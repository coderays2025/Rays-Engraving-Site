import emailjs from 'emailjs-com';

export const sendQuoteEmail = (formData) => {
  const SERVICE_ID = "service_vmxrmxt";
  const TEMPLATE_ID = "template_51zifww";
  const PUBLIC_KEY = "xhIFHXMsUjoXtt8l5";

  const templateParams = {
    to_email: 'rayslasermarking@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone || 'Not provided',
    engraving_details: formData.message,
    to_name: 'Rays Laser Team',
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};
