
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Plus, 
  Search, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Car,
  User,
  Calendar,
  ChevronRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Types pour les interventions
type RepairStatus = "waiting" | "inProgress" | "completed";
type Priority = "normal" | "high" | "urgent";

// Interface pour les réparations
interface Repair {
  id: number;
  vehicle: string;
  client: string;
  startDate: string;
  estimatedEndDate: string;
  type: string;
  status: RepairStatus;
  priority: Priority;
  technician: string;
  progress: number;
}

// Données factices pour les interventions
const repairs: Repair[] = [
  {
    id: 1,
    vehicle: "Peugeot 308",
    client: "Martin Dupont",
    startDate: "28/04/2025",
    estimatedEndDate: "29/04/2025",
    type: "Changement d'huile",
    status: "inProgress",
    priority: "normal",
    technician: "Lucas Petit",
    progress: 75
  },
  {
    id: 2,
    vehicle: "Renault Clio",
    client: "Sophie Leclerc",
    startDate: "28/04/2025",
    estimatedEndDate: "30/04/2025",
    type: "Remplacement plaquettes freins",
    status: "inProgress",
    priority: "high",
    technician: "Emma Dubois",
    progress: 30
  },
  {
    id: 3,
    vehicle: "Citroen C3",
    client: "Jean Moreau",
    startDate: "27/04/2025",
    estimatedEndDate: "29/04/2025",
    type: "Diagnostic panne moteur",
    status: "waiting",
    priority: "urgent",
    technician: "Thomas Leroux",
    progress: 0
  },
  {
    id: 4,
    vehicle: "Ford Focus",
    client: "Lucie Bertrand",
    startDate: "26/04/2025",
    estimatedEndDate: "28/04/2025",
    type: "Vidange complète",
    status: "completed",
    priority: "normal",
    technician: "Lucas Petit",
    progress: 100
  },
  {
    id: 5,
    vehicle: "Volkswagen Golf",
    client: "Pierre Martin",
    startDate: "25/04/2025",
    estimatedEndDate: "27/04/2025",
    type: "Remplacement courroie",
    status: "completed",
    priority: "high",
    technician: "Emma Dubois",
    progress: 100
  }
];

// Removed duplicate type declarations

interface RepairProps {
  repair: Repair;
}

const StatusBadge = ({ status }: { status: RepairStatus }) => {
  const getStatusConfig = () => {
    switch (status) {
      case "waiting":
        return {
          className: "bg-mecano-orange/10 text-mecano-orange",
          text: "En attente",
          icon: Clock
        };
      case "inProgress":
        return {
          className: "bg-mecano-blue/10 text-mecano-blue",
          text: "En cours",
          icon: Clock
        };
      case "completed":
        return {
          className: "bg-green-100 text-green-600",
          text: "Terminé",
          icon: CheckCircle
        };
    }
  };
  
  const config = getStatusConfig();
  const Icon = config.icon;
  
  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium flex items-center ${config.className}`}>
      <Icon className="h-3 w-3 mr-1" />
      {config.text}
    </span>
  );
};

const PriorityIndicator = ({ priority }: { priority: Priority }) => {
  return (
    <div className="flex items-center">
      <span className={cn(
        "h-2 w-2 rounded-full mr-1.5", 
        priority === "normal" ? "bg-green-500" : 
        priority === "high" ? "bg-mecano-orange" :
        "bg-mecano-red"
      )}></span>
      <span className="text-xs capitalize">
        {priority === "normal" ? "Normale" : 
         priority === "high" ? "Élevée" : "Urgente"}
      </span>
    </div>
  );
};

const RepairCard = ({ repair }: RepairProps) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold">{repair.type}</h3>
            <p className="text-sm text-muted-foreground">{repair.vehicle}</p>
          </div>
          <StatusBadge status={repair.status} />
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mt-3">
          <div className="flex items-center">
            <User className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
            <span>{repair.client}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
            <span>{repair.startDate}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between mb-1.5">
            <span className="text-xs">Progression: {repair.progress}%</span>
            <PriorityIndicator priority={repair.priority} />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className={cn(
                "h-1.5 rounded-full",
                repair.priority === "normal" ? "bg-green-500" : 
                repair.priority === "high" ? "bg-mecano-orange" :
                "bg-mecano-red"
              )} 
              style={{ width: `${repair.progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            Technicien: {repair.technician}
          </span>
          
          <Button variant="ghost" size="sm" className="text-mecano-blue">
            Détails
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Repairs = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-mecano-blue">Interventions</h1>
            <p className="text-muted-foreground">Suivi et gestion des interventions</p>
          </div>
          
          <Button className="bg-mecano-blue hover:bg-mecano-blue/90">
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle intervention
          </Button>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher une intervention..."
            className="pl-9"
          />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Interventions en cours</h2>
          {repairs
            .filter(repair => repair.status === "inProgress" || repair.status === "waiting")
            .map(repair => (
              <RepairCard key={repair.id} repair={repair} />
            ))
          }
          
          <h2 className="text-xl font-semibold mb-4 mt-8">Interventions terminées</h2>
          {repairs
            .filter(repair => repair.status === "completed")
            .map(repair => (
              <RepairCard key={repair.id} repair={repair} />
            ))
          }
        </div>
      </div>
    </MainLayout>
  );
};

export default Repairs;
