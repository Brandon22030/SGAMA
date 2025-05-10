
import { NavLink } from "react-router-dom";
import { 
  Calendar, 
  Car, 
  ChevronLeft, 
  FileText, 
  Home, 
  Package, 
  Settings, 
  User, 
  Wrench 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const navigation = [
    { name: "Tableau de bord", path: "/", icon: Home },
    { name: "Clients", path: "/clients", icon: User },
    { name: "Véhicules", path: "/vehicles", icon: Car },
    { name: "Rendez-vous", path: "/appointments", icon: Calendar },
    { name: "Interventions", path: "/repairs", icon: Wrench },
    { name: "Stock", path: "/inventory", icon: Package },
    { name: "Factures", path: "/invoices", icon: FileText },
    { name: "Administration", path: "/admin", icon: Settings },
  ];

  return (
    <aside
      className={cn(
        "bg-sidebar h-screen transition-all duration-300 overflow-hidden fixed md:relative z-30",
        open ? "w-64" : "w-0 md:w-20"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
          <div className={cn("flex items-center gap-2", !open && "md:hidden")}>
            <div className="h-8 w-8 rounded-md bg-sidebar-accent flex items-center justify-center">
              <span className="text-white font-bold">MS</span>
            </div>
            <span className="font-semibold text-white">MécanoSuite</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setOpen(!open)}
            className="text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent hidden md:flex"
          >
            <ChevronLeft className={cn("h-5 w-5 transition-transform", !open && "rotate-180")} />
          </Button>
        </div>

        <nav className="flex-1 overflow-auto py-4 px-2">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name} className="animate-slide-in">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    cn("sidebar-item", isActive && "active", !open && "md:justify-center")
                  }
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {open && <span>{item.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <div className={cn("flex items-center gap-3", !open && "md:justify-center")}>
            <div className="h-8 w-8 rounded-full bg-sidebar-accent/20"></div>
            {open && (
              <div>
                <p className="text-sm font-medium text-sidebar-foreground">Utilisateur</p>
                <p className="text-xs text-sidebar-foreground/70">Technicien</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
