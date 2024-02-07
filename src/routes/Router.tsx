import { Route, Routes } from "react-router-dom";
import Homepage from "../features/home/pages/Homepage";
import PageNotFound from "../features/404/pages/PageNotFound";
import LoginPage from "../features/login/pages/LoginPage";
import MainLayout from "../components/layout/MainLayout";

const Router = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default Router;
