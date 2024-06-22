import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "@/app/pages/IndexPage";
import About from "@/app/pages/AboutPage";

export function App() {
  return (
    <StrictMode>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
