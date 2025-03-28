
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Layout from "./components/layout/Layout";
import AdminLayout from "./components/admin/AdminLayout";

// Main Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth Pages
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

// Module Pages
import Matrimonial from "./pages/modules/Matrimonial";
import Directory from "./pages/modules/Directory";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import UsersList from "./pages/admin/UsersList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            
            {/* Module Routes */}
            <Route path="modules/matrimonial" element={<Matrimonial />} />
            <Route path="modules/directory" element={<Directory />} />
            <Route path="modules/commercial" element={<Index />} />
            <Route path="modules/academy" element={<Index />} />
            <Route path="modules/news" element={<Index />} />
            <Route path="modules/jobs" element={<Index />} />
            
            {/* About Routes */}
            <Route path="about/manifesto" element={<Index />} />
            <Route path="about/directors" element={<Index />} />
            <Route path="about/membership" element={<Index />} />
            <Route path="about/activities" element={<Index />} />
            
            <Route path="contact" element={<Index />} />
          </Route>
          
          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UsersList />} />
            <Route path="matrimonial" element={<Dashboard />} />
            <Route path="directory" element={<Dashboard />} />
            <Route path="commercial" element={<Dashboard />} />
            <Route path="academy" element={<Dashboard />} />
            <Route path="news" element={<Dashboard />} />
            <Route path="jobs" element={<Dashboard />} />
            <Route path="content" element={<Dashboard />} />
            <Route path="settings" element={<Dashboard />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
