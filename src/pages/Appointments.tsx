
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Clock, User, Car, Calendar } from "lucide-react";

// Données factices pour les rendez-vous
const appointments = {
  today: [
    { 
      id: 1, 
      time: "09:00", 
      client: "Martin Dupont", 
      vehicle: "Peugeot 308", 
      type: "Entretien", 
      duration: "1h30",
      technician: "Lucas Petit"
    },
    { 
      id: 2, 
      time: "11:30", 
      client: "Sophie Leclerc", 
      vehicle: "Renault Clio", 
      type: "Réparation", 
      duration: "2h",
      technician: "Emma Dubois"
    },
    { 
      id: 3, 
      time: "14:00", 
      client: "Jean Moreau", 
      vehicle: "Citroen C3", 
      type: "Diagnostic", 
      duration: "1h",
      technician: "Thomas Leroux"
    },
  ],
  upcoming: [
    { 
      id: 4, 
      date: "01/05/2025", 
      time: "08:30", 
      client: "Lucie Bertrand", 
      vehicle: "Ford Focus", 
      type: "Pneus", 
      duration: "1h",
      technician: "Lucas Petit"
    },
    { 
      id: 5, 
      date: "01/05/2025", 
      time: "10:00", 
      client: "Pierre Martin", 
      vehicle: "Volkswagen Golf", 
      type: "Révision", 
      duration: "3h",
      technician: "Emma Dubois"
    },
    { 
      id: 6, 
      date: "02/05/2025", 
      time: "09:30", 
      client: "Julien Bernard", 
      vehicle: "Audi A3", 
      type: "Entretien", 
      duration: "2h",
      technician: "Thomas Leroux"
    },
  ]
};

const AppointmentCard = ({ 
  appointment, 
  showDate = false 
}: { 
  appointment: any, 
  showDate?: boolean 
}) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold">{appointment.type}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              {showDate ? `${appointment.date} à ` : ""}{appointment.time} • {appointment.duration}
            </div>
          </div>
          <Badge status={
            appointment.time.split(':')[0] < 12 ? "upcoming" : 
            appointment.time.split(':')[0] < 14 ? "inProgress" : 
            "completed"
          } />
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center">
            <User className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
            <span>{appointment.client}</span>
          </div>
          
          <div className="flex items-center">
            <Car className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
            <span>{appointment.vehicle}</span>
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xs text-muted-foreground">
            Technicien: {appointment.technician}
          </span>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Modifier</Button>
            <Button variant="ghost" size="sm" className="text-mecano-red hover:text-mecano-red/90 hover:bg-mecano-red/10">
              Annuler
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Badge = ({ status }: { status: "upcoming" | "inProgress" | "completed" }) => {
  const getStatusConfig = () => {
    switch (status) {
      case "upcoming":
        return {
          className: "bg-mecano-orange/10 text-mecano-orange",
          text: "À venir"
        };
      case "inProgress":
        return {
          className: "bg-mecano-blue/10 text-mecano-blue",
          text: "En cours"
        };
      case "completed":
        return {
          className: "bg-green-100 text-green-600",
          text: "Terminé"
        };
    }
  };
  
  const config = getStatusConfig();
  
  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${config.className}`}>
      {config.text}
    </span>
  );
};

const Appointments = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-mecano-blue">Rendez-vous</h1>
            <p className="text-muted-foreground">Gestion du planning et des rendez-vous</p>
          </div>
          
          <Button className="bg-mecano-blue hover:bg-mecano-blue/90">
            <Plus className="mr-2 h-4 w-4" />
            Nouveau rendez-vous
          </Button>
        </div>
        
        <Tabs defaultValue="today">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="today">
              <Clock className="h-4 w-4 mr-2" />
              Aujourd'hui
            </TabsTrigger>
            <TabsTrigger value="upcoming">
              <Calendar className="h-4 w-4 mr-2" />
              À venir
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="today" className="space-y-4">
            <h2 className="text-xl font-semibold">Rendez-vous du jour</h2>
            {appointments.today.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </TabsContent>
          
          <TabsContent value="upcoming" className="space-y-4">
            <h2 className="text-xl font-semibold">Prochains rendez-vous</h2>
            {appointments.upcoming.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} showDate />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Appointments;
