import LibroReclamaciones from "@/components/LibroReclamaciones";
import { MainLayout } from "@/layouts/MainLayout";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { ClientLayout } from "@/layouts/ClientLayout";
import { ProductsPage } from "@/modules/cart/pages/ProductsPage";
import { ProductDetailPage } from "@/modules/cart/pages/ProductDetailPage";
import { CartPage } from "@/modules/cart/pages/CartPage";
import { useAuthContext } from "@/modules/auth/context/AuthContext";
import { MikroVerifyPage } from "@/modules/mikrowisp/pages/MikroVerifyPage";

export const AppRouter = () => {
  const { state } = useAuthContext();

  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route
        path="/"
        element={
          <ProtectedRoute
            redirectTo="/client/products"
            isAllowed={!state.isAuthenticated}
          />
        }
      >
        <Route element={<MainLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/libro-reclamaciones" element={<LibroReclamaciones />} />

          <Route path="client">
            <Route path="identify" element={<MikroVerifyPage />} />
          </Route>
        </Route>
      </Route>

      {/* Rutas Privadas */}
      <Route
        element={
          <ProtectedRoute
            redirectTo="/auth/login"
            isAllowed={state.isAuthenticated}
          />
        }
      >
        <Route element={<ClientLayout />}>
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          <Route path="/client/products/:id" element={<ProductDetailPage />} />
          <Route path="/client/products" element={<ProductsPage />} />
          <Route path="/client/cart" element={<CartPage />} />
        </Route>
      </Route>

      {/* Control para rutas inexistentes 404  not found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
