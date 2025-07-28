import { Button } from "./button";
import { MessageCircle, Phone } from "lucide-react";
import React from "react";

interface WhatsAppCallButtonsProps {
  whatsappNumber: string; // e.g. '917733994827'
  callNumber: string; // e.g. '+917733994827'
  whatsappText: string;
  callText: string;
  message?: string; // optional prefilled message for WhatsApp
  className?: string;
}

export const WhatsAppCallButtons: React.FC<WhatsAppCallButtonsProps> = ({
  whatsappNumber,
  callNumber,
  whatsappText,
  callText,
  message,
  className = "",
}) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message || "")}`;
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button
        asChild
        className="bg-green-600 hover:bg-green-700 py-2 sm:py-3 text-base flex-1 w-full sm:w-auto"
        size="default"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="mr-2 h-5 w-5" /> {whatsappText}
        </a>
      </Button>
      <Button
        asChild
        className="bg-orange-600 hover:bg-orange-700 py-2 sm:py-3 text-base flex-1 w-full sm:w-auto"
        size="default"
      >
        <a href={`tel:${callNumber}`}>
          <Phone className="mr-2 h-5 w-5" /> {callText}
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppCallButtons; 