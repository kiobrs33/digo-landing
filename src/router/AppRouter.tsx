import LibroReclamaciones from "@/components/LibroReclamaciones";
import { MainLayout } from "@/layouts/MainLayout";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/libro-reclamaciones" element={<LibroReclamaciones />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
