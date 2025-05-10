
import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Menu, User, Settings, Car, Calendar, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/components/auth/AuthProvider';
import { cn } from '@/lib/utils';

type ClientHeaderProps = {
  toggleMobileMenu?: () => void;
  showMobileMenuButton?: boolean;
};

export const ClientHeader = ({ 
  toggleMobileMenu, 
  showMobileMenuButton = false 
}: ClientHeaderProps) => {
  const { user, signOut } = useAuth();
  
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo et Navigation */}
          <div className="flex items-center gap-8">
            {showMobileMenuButton && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleMobileMenu}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            
            <div className="flex items-center gap-2">
              <img 
                src="/placeholder.svg" 
                alt="MécanoSuite" 
                className="h-8 w-8" 
              />
              <span className="text-xl font-bold text-mecano-blue">MécanoSuite</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/mes-vehicules">Mes véhicules</NavLink>
              <NavLink to="/rendez-vous">Rendez-vous</NavLink>
              <NavLink to="/historique">Historique</NavLink>
            </nav>
          </div>
          
          {/* Actions utilisateur */}
          <div className="flex items-center gap-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">Mon compte</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.email}</p>
                    <p className="text-xs text-muted-foreground">Client</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profil" className="flex items-center gap-2 cursor-pointer">
                      <User className="h-4 w-4" />
                      <span>Mon profil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/mes-vehicules" className="flex items-center gap-2 cursor-pointer">
                      <Car className="h-4 w-4" />
                      <span>Mes véhicules</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/rendez-vous" className="flex items-center gap-2 cursor-pointer">
                      <Calendar className="h-4 w-4" />
                      <span>Mes rendez-vous</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/parametres" className="flex items-center gap-2 cursor-pointer">
                      <Settings className="h-4 w-4" />
                      <span>Paramètres</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => signOut()}
                    className="text-red-500 focus:text-red-500 flex items-center gap-2 cursor-pointer"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Déconnexion</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3">
                <Button variant="outline" asChild>
                  <Link to="/auth">Connexion</Link>
                </Button>
                <Button className="bg-mecano-blue hover:bg-mecano-blue/90 flex items-center gap-2" asChild>
                  <Link to="/auth?register=true">
                    <UserPlus className="h-4 w-4" />
                    <span>S'inscrire</span>
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ to, children, className }: NavLinkProps) => (
  <Link 
    to={to}
    className={cn(
      "text-mecano-dark hover:text-mecano-blue transition-colors font-medium",
      className
    )}
  >
    {children}
  </Link>
);
