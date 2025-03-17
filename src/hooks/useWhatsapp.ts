export const useWhatsapp = () => {
  const sendMessageHandle = (message: string = "Hola") => {
    const phoneNumber = "51967471827"; // Número sin "+"
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return {
    sendMessageHandle,
  };
};
