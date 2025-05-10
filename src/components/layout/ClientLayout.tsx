
import React, { useState } from 'react';
import { ClientHeader } from './ClientHeader';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import { Car, Calendar, Clock, Home, User, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ClientHeader 
        toggleMobileMenu={toggleMobileMenu}
        showMobileMenuButton={true}
      />
      
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="p-0">
          <div className="py-6 px-4 border-b">
            <div className="flex items-center gap-2">
              <img 
                src="/placeholder.svg" 
                alt="MécanoSuite" 
                className="h-8 w-8" 
              />
              <span className="text-xl font-bold text-mecano-blue">MécanoSuite</span>
            </div>
          </div>
          <nav className="p-4 space-y-2">
            <MobileNavLink to="/" icon={<Home size={20} />} onClick={() => setMobileMenuOpen(false)}>
              Accueil
            </MobileNavLink>
            <MobileNavLink to="/mes-vehicules" icon={<Car size={20} />} onClick={() => setMobileMenuOpen(false)}>
              Mes véhicules
            </MobileNavLink>
            <MobileNavLink to="/rendez-vous" icon={<Calendar size={20} />} onClick={() => setMobileMenuOpen(false)}>
              Rendez-vous
            </MobileNavLink>
            <MobileNavLink to="/historique" icon={<Clock size={20} />} onClick={() => setMobileMenuOpen(false)}>
              Historique
            </MobileNavLink>
            <MobileNavLink to="/profil" icon={<User size={20} />} onClick={() => setMobileMenuOpen(false)}>
              Mon profil
            </MobileNavLink>
            <MobileNavLink to="/parametres" icon={<Settings size={20} />} onClick={() => setMobileMenuOpen(false)}>
              Paramètres
            </MobileNavLink>
          </nav>
        </SheetContent>
      </Sheet>
      
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
      
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-mecano-gray">
          <p>&copy; 2025 MécanoSuite - La solution complète pour la gestion d'atelier automobile</p>
        </div>
      </footer>
    </div>
  );
};

type MobileNavLinkProps = {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
};

const MobileNavLink = ({ to, icon, children, onClick }: MobileNavLinkProps) => (
  <Link 
    to={to}
    className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-md text-mecano-dark hover:bg-gray-100 transition-colors"
    )}
    onClick={onClick}
  >
    {icon}
    <span>{children}</span>
  </Link>
);

export default ClientLayout;
