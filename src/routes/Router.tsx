import { Route, Routes } from "react-router-dom";
import Homepage from "../features/home/pages/Homepage";
import PageNotFound from "../features/404/pages/PageNotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
