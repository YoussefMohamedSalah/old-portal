import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignIn from "components/Auth/SignIn";
import { AuthProvider } from "contexts/AuthContext";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PasswordReset from "components/Auth/PasswordReset";
import StepAuthentication from "components/Auth/StepAuthentication";

const AuthIndex = lazy(() => import("./screens/AuthIndex"));
const MainIndex = lazy(() => import("./screens/MainIndex"));

const queryClient = new QueryClient();

const App: React.FC = () => {
  return <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <div id="mytask-layout" className="theme-indigo">
        <Routes>
          <Route path="/dashboard/*" element={<Suspense fallback={null}>
            <MainIndex />
          </Suspense>} />
          <Route path="/" element={<SignIn />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/verify-email" element={<StepAuthentication />} />
        </Routes>
      </div>
    </AuthProvider>
  </QueryClientProvider>;
};

export default App;
