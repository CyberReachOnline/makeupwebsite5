export const DEFAULT_PHONE = '919876543210'; // Indian Number format

export const generateWhatsAppLink = (phone: string, message: string) => {
    const cleanPhone = phone.replace(/[^\d]/g, '');
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};

export const createBookingMessage = (data: { name: string; date: string; service: string; notes?: string }) => {
    return `Hi, I would like to book an appointment.
  
Name: ${data.name}
Date: ${data.date}
Service: ${data.service}
${data.notes ? `Notes: ${data.notes}` : ''}

Please confirm availability.`;
};
