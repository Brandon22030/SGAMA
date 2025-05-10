
import { Car, FileText, Wrench, Users } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";

export const DashboardStats = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Véhicules en atelier"
        value={12}
        description="3 en attente, 9 en cours"
        icon={<Car className="h-5 w-5" />}
        trend={{ value: 8, isPositive: true }}
      />
      
      <StatCard
        title="Rendez-vous du jour"
        value={15}
        description="4 terminés, 11 à venir"
        icon={<FileText className="h-5 w-5" />}
        trend={{ value: 5, isPositive: true }}
      />
      
      <StatCard
        title="Interventions terminées"
        value={38}
        description="Cette semaine"
        icon={<Wrench className="h-5 w-5" />}
        trend={{ value: 12, isPositive: true }}
      />
      
      <StatCard
        title="Nouveaux clients"
        value={7}
        description="Cette semaine"
        icon={<Users className="h-5 w-5" />}
        trend={{ value: 2, isPositive: false }}
      />
    </div>
  );
};

export default DashboardStats;
