import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronUp } from "lucide-react";
import { useWhatsapp } from "@/hooks/useWhatsapp";

const FloatingButtons = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { sendMessageHandle } = useWhatsapp();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-5 bottom-5 flex flex-col gap-3 z-50">
      <Button
        onClick={() =>
          sendMessageHandle("Hola, estoy interesado en contratar el servicio.")
        }
        size="icon"
        className="bg-green-500 hover:bg-green-600 rounded-lg h-12 w-12 shadow-lg"
        aria-label="Contact us via WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
      </Button>

      {showScrollButton && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="bg-secondary hover:bg-secondary-light rounded-lg h-12 w-12 shadow-lg animate-fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="text-white" />
        </Button>
      )}
    </div>
  );
};

export default FloatingButtons;
