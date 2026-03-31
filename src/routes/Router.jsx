import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import MyInstallation from "../Pages/MyInstallation";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="apps" element={<AllApps />} />
          <Route path="apps/:id" element={<AppDetails />} />
          <Route path="installations" element={<MyInstallation />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;