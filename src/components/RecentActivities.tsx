
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Car, Clock, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

// Types pour les activités
type ActivityType = "repair" | "appointment";
type ActivityStatus = "completed" | "upcoming" | "inProgress" | "cancelled";

interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  vehicle: string;
  client: string;
  time: string;
  status: ActivityStatus;
}

// Données factices pour les activités récentes
const activities: Activity[] = [
  {
    id: 1,
    type: "repair",
    title: "Changement d'huile terminé",
    vehicle: "Peugeot 308",
    client: "Martin Dupont",
    time: "Il y a 25 min",
    status: "completed"
  },
  {
    id: 2,
    type: "appointment",
    title: "Nouveau rendez-vous",
    vehicle: "Renault Clio",
    client: "Sophie Leclerc",
    time: "Il y a 1h",
    status: "upcoming"
  },
  {
    id: 3,
    type: "repair",
    title: "Remplacement plaquettes freins",
    vehicle: "Citroen C3",
    client: "Jean Moreau",
    time: "Il y a 2h",
    status: "inProgress"
  },
  {
    id: 4,
    type: "repair",
    title: "Diagnostic panne moteur",
    vehicle: "Ford Focus",
    client: "Lucie Bertrand",
    time: "Il y a 3h",
    status: "inProgress"
  },
  {
    id: 5,
    type: "appointment",
    title: "Annulation rendez-vous",
    vehicle: "Volkswagen Golf",
    client: "Pierre Martin",
    time: "Il y a 4h",
    status: "cancelled"
  }
];

const ActivityIcon = ({ type, status }: { type: ActivityType, status: ActivityStatus }) => {
  if (type === "repair") {
    return (
      <div className={cn(
        "rounded-full p-2",
        status === "completed" ? "bg-green-100 text-green-600" :
        status === "inProgress" ? "bg-blue-100 text-blue-600" :
        "bg-gray-100 text-gray-600"
      )}>
        <Wrench className="h-4 w-4" />
      </div>
    );
  }
  
  return (
    <div className={cn(
      "rounded-full p-2",
      status === "upcoming" ? "bg-orange-100 text-orange-600" :
      status === "cancelled" ? "bg-red-100 text-red-600" :
      "bg-gray-100 text-gray-600"
    )}>
      <Clock className="h-4 w-4" />
    </div>
  );
};

export const RecentActivities = () => {
  return (
    <Card className="col-span-1 overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle>Activités récentes</CardTitle>
        <CardDescription>Dernières interventions et rendez-vous</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start px-6 animate-fade-in">
              <ActivityIcon type={activity.type} status={activity.status} />
              
              <div className="ml-4 flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                
                <div className="flex items-center text-xs text-muted-foreground">
                  <Car className="mr-1 h-3 w-3" />
                  <span>{activity.vehicle}</span>
                  <span className="mx-1">•</span>
                  <span>{activity.client}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
