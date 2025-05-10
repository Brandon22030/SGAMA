
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { useAuth } from "@/components/auth/AuthProvider";
import Index from "./pages/Index";
import Clients from "./pages/Clients";
import Vehicles from "./pages/Vehicles";
import Appointments from "./pages/Appointments";
import Repairs from "./pages/Repairs";
import Inventory from "./pages/Inventory";
import Invoices from "./pages/Invoices";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import ClientHome from "./pages/ClientHome";
import ClientVehicles from "./pages/ClientVehicles";
import ClientAppointments from "./pages/ClientAppointments";
import ClientHistory from "./pages/ClientHistory";
import ClientProfile from "./pages/ClientProfile";
import ClientSettings from "./pages/ClientSettings";
import Contact from "./pages/Contact";
import Revision from "./pages/services/Revision";
import Reparation from "./pages/services/Reparation";
import ControleTechnique from "./pages/services/ControleTechnique";
import EntretienRapide from "./pages/services/EntretienRapide";

const queryClient = new QueryClient();

// Composant de protection des routes privées
const PrivateRoute = ({ 
  element, 
  adminOnly = false
}: { 
  element: JSX.Element, 
  adminOnly?: boolean 
}) => {
  const { user, isLoading } = useAuth();
  
  // Si l'authentification est en cours, on peut afficher un chargement
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }
  
  // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
  if (!user) {
    return <Navigate to="/auth" />;
  }

  // Si la route est réservée aux admins et que l'utilisateur n'est pas un admin, rediriger vers la home page client
  // Vous devrez implémenter la logique pour vérifier le rôle d'admin
  if (adminOnly /* && !isAdmin */) {
    return <Navigate to="/client" />;
  }
  
  // Sinon, afficher la route demandée
  return element;
};

// Composant de protection des routes d'authentification
const AuthRoute = ({ element }: { element: JSX.Element }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }
  
  // Si l'utilisateur est déjà connecté, rediriger vers la page d'accueil
  if (user) {
    // Vous pouvez adapter cette logique selon les rôles
    // Par exemple, rediriger les admins vers le dashboard et les clients vers leur page
    // Pour l'instant, on redirige tout le monde vers la page principale
    return <Navigate to="/client" />;
  }
  
  return element;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Pages publiques */}
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<AuthRoute element={<Auth />} />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Pages de services */}
            <Route path="/services/revision" element={<Revision />} />
            <Route path="/services/reparation" element={<Reparation />} />
            <Route path="/services/controle-technique" element={<ControleTechnique />} />
            <Route path="/services/entretien-rapide" element={<EntretienRapide />} />
            
            {/* Pages client */}
            <Route path="/client" element={<PrivateRoute element={<ClientHome />} />} />
            <Route path="/mes-vehicules" element={<PrivateRoute element={<ClientVehicles />} />} />
            <Route path="/rendez-vous" element={<PrivateRoute element={<ClientAppointments />} />} />
            <Route path="/historique" element={<PrivateRoute element={<ClientHistory />} />} />
            <Route path="/profil" element={<PrivateRoute element={<ClientProfile />} />} />
            <Route path="/parametres" element={<PrivateRoute element={<ClientSettings />} />} />
            
            {/* Pages admin/employé */}
            <Route path="/dashboard" element={<PrivateRoute element={<Index />} adminOnly={true} />} />
            <Route path="/clients" element={<PrivateRoute element={<Clients />} adminOnly={true} />} />
            <Route path="/vehicles" element={<PrivateRoute element={<Vehicles />} adminOnly={true} />} />
            <Route path="/appointments" element={<PrivateRoute element={<Appointments />} adminOnly={true} />} />
            <Route path="/repairs" element={<PrivateRoute element={<Repairs />} adminOnly={true} />} />
            <Route path="/inventory" element={<PrivateRoute element={<Inventory />} adminOnly={true} />} />
            <Route path="/invoices" element={<PrivateRoute element={<Invoices />} adminOnly={true} />} />
            
            {/* Gestion des routes inconnues */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
