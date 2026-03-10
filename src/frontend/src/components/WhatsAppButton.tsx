import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/61488841883"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.primary_button"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="text-sm font-semibold">Chat Now</span>
    </a>
  );
}
