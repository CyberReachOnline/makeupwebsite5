export const DEFAULT_PHONE = '1234567890'; // Replace with actual number

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
