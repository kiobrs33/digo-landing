import LibroReclamaciones from "@/components/LibroReclamaciones";
import { MainLayout } from "@/layouts/MainLayout";
import { LoginPage } from "@/modules/auth/pages/LoginPage";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { ClientLayout } from "@/layouts/ClientLayout";
import { ProductsPage } from "@/modules/cart/pages/ProductsPage";
import { ProductDetailPage } from "@/modules/cart/pages/ProductDetailPage";
import { CartPage } from "@/modules/cart/pages/CartPage";
import { useAuthContext } from "@/modules/auth/context/AuthContext";
import { MikroLayout } from "@/layouts/MikroLayout";
import { MikroClientPage } from "@/modules/mikrowisp/pages/MikroClientPage";
import { MikroLoginPage } from "@/modules/mikrowisp/pages/MikroLoginPage";
import { PagoPasarelaPage } from "@/modules/mikrowisp/pages/PagoPasarelaPage";

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
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/login-mikro" element={<MikroLoginPage />} />
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

        <Route element={<MikroLayout />} path="mikro">
          <Route path="dashboard" element={<MikroClientPage />} />
          <Route path="pago/:id" element={<PagoPasarelaPage />} />
        </Route>
      </Route>
      {/* 
      <Route
        element={
          <ProtectedRoute
            redirectTo="/auth/login-mikro"
            isAllowed={state.isAuthenticated}
          />
        }
      >
        <Route element={<MikroLayout />} path="mikro">
          <Route index element={<MikroClientPage />} />
        </Route>
      </Route> */}

      {/* Control para rutas inexistentes 404  not found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
