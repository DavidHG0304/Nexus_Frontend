import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

import {
  AuthProvider
} from "./features/auth/context/AuthContext";
import { ThemeProvider } from "./shared/context/ThemeContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <AuthProvider>

    <ThemeProvider>

      <App />

    </ThemeProvider>

  </AuthProvider>

);