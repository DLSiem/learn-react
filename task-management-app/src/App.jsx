// src/App.jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { loader, action } from "./data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: loader,
    action: action,
  },
]);

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      <RouterProvider router={router} />
    </main>
    <Footer />
  </div>
);

export default App;
