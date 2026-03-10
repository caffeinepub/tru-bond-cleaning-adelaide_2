import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import WhatsAppButton from "./components/WhatsAppButton";
import { routeTree } from "./routeTree";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <WhatsAppButton />
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
