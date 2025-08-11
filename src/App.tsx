import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { ScrollToTop } from "./components/ScrollToTop";
import { AuthProvider } from "./modules/auth/context/AuthReducer";
import { CartProvider } from "./modules/cart/context/CartReducer";
import { AxiosProvider } from "./modules/axios/context/AxiosReducer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AxiosProvider>
        <CartProvider>
          <BrowserRouter>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <ScrollToTop />
              <AppRouter />
            </TooltipProvider>
          </BrowserRouter>
        </CartProvider>
      </AxiosProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
