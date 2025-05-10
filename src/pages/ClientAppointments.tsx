
import React, { useState } from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Plus, ChevronRight, Clock, Car, MapPin } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

// Données factices pour les rendez-vous
const appointments = [
  {
    id: 1,
    date: "28/05/2025",
    time: "10:00",
    service: "Révision complète",
    vehicle: "Peugeot 308",
    location: "Atelier principal",
    status: "upcoming" as const,
    notes: "Apporter le carnet d'entretien"
  },
  {
    id: 2,
    date: "15/04/2025",
    time: "14:30",
    service: "Changement plaquettes de frein",
    vehicle: "Peugeot 308",
    location: "Atelier principal",
    status: "completed" as const,
    notes: ""
  },
  {
    id: 3,
    date: "02/03/2025",
    time: "09:15",
    service: "Vidange + filtres",
    vehicle: "Peugeot 308",
    location: "Atelier principal",
    status: "completed" as const,
    notes: ""
  }
];

interface AppointmentCardProps {
  appointment: typeof appointments[0];
  showActions?: boolean;
}

const AppointmentCard = ({ appointment, showActions = true }: AppointmentCardProps) => {
  const isUpcoming = appointment.status === "upcoming";
  
  return (
    <Card className={isUpcoming ? "border-mecano-blue" : ""}>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-base">{appointment.service}</CardTitle>
          <div className={`px-2 py-1 text-xs rounded-full ${
            isUpcoming 
              ? "bg-mecano-blue/10 text-mecano-blue" 
              : "bg-green-100 text-green-600"
          }`}>
            {isUpcoming ? "À venir" : "Terminé"}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
            <span>{appointment.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
            <span>{appointment.time}</span>
          </div>
          <div className="flex items-center">
            <Car className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
            <span>{appointment.vehicle}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
            <span>{appointment.location}</span>
          </div>
        </div>
        
        {appointment.notes && (
          <div className="mt-2 text-xs text-muted-foreground">
            <p><span className="font-medium">Notes:</span> {appointment.notes}</p>
          </div>
        )}
      </CardContent>
      
      {showActions && (
        <CardFooter className="pt-2">
          <div className="w-full flex justify-between">
            {isUpcoming ? (
              <>
                <Button variant="outline" size="sm">
                  Modifier
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                  Annuler
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" className="ml-auto" asChild>
                <Link to={`/historique/${appointment.id}`}>
                  Détails
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

const ClientAppointments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const upcomingAppointments = appointments.filter(app => app.status === "upcoming");
  const pastAppointments = appointments.filter(app => app.status === "completed");
  
  return (
    <ClientLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-mecano-blue">Rendez-vous</h1>
            <p className="text-muted-foreground">
              Gérez vos rendez-vous avec notre atelier
            </p>
          </div>
          
          <Button className="bg-mecano-blue hover:bg-mecano-blue/90" asChild>
            <Link to="/rendez-vous/nouveau">
              <Plus className="mr-2 h-4 w-4" />
              Prendre rendez-vous
            </Link>
          </Button>
        </div>
        
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un rendez-vous..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="upcoming" className="flex-1">
              À venir ({upcomingAppointments.length})
            </TabsTrigger>
            <TabsTrigger value="past" className="flex-1">
              Passés ({pastAppointments.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-4 space-y-4">
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map(appointment => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <Card className="p-8 text-center">
                <div className="flex flex-col items-center max-w-md mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&auto=format&fit=crop&q=60" 
                    alt="Aucun rendez-vous" 
                    className="w-40 h-40 object-cover rounded-lg mb-6"
                  />
                  <h2 className="text-xl font-semibold mb-2">Aucun rendez-vous à venir</h2>
                  <p className="text-muted-foreground mb-6">
                    Vous n'avez pas de rendez-vous programmé. Planifiez votre prochain entretien dès maintenant.
                  </p>
                  <Button className="bg-mecano-blue hover:bg-mecano-blue/90" asChild>
                    <Link to="/rendez-vous/nouveau">
                      <Plus className="mr-2 h-4 w-4" />
                      Prendre rendez-vous
                    </Link>
                  </Button>
                </div>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="mt-4 space-y-4">
            {pastAppointments.length > 0 ? (
              pastAppointments.map(appointment => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <Card className="p-8 text-center">
                <div className="flex flex-col items-center max-w-md mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1590674899484-d5a73134b938?w=800&auto=format&fit=crop&q=60" 
                    alt="Aucun historique" 
                    className="w-40 h-40 object-cover rounded-lg mb-6"
                  />
                  <h2 className="text-xl font-semibold mb-2">Aucun rendez-vous passé</h2>
                  <p className="text-muted-foreground mb-6">
                    Vous n'avez pas encore d'historique de rendez-vous avec notre atelier.
                  </p>
                </div>
              </Card>
            )}
          </TabsContent>
        </Tabs>
        
        {/* Prochain rendez-vous */}
        {upcomingAppointments.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Votre prochain rendez-vous</h2>
            <Card className="bg-mecano-lightgray">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&auto=format&fit=crop&q=60" 
                      alt="Atelier" 
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{upcomingAppointments[0].service}</h3>
                      <div className="bg-mecano-blue/10 text-mecano-blue px-2 py-1 text-xs rounded-full">
                        À venir
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Date et heure</p>
                        <p className="text-sm flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
                          {upcomingAppointments[0].date} à {upcomingAppointments[0].time}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Véhicule</p>
                        <p className="text-sm flex items-center">
                          <Car className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
                          {upcomingAppointments[0].vehicle}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Lieu</p>
                        <p className="text-sm flex items-center">
                          <MapPin className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
                          {upcomingAppointments[0].location}
                        </p>
                      </div>
                    </div>
                    
                    {upcomingAppointments[0].notes && (
                      <div>
                        <p className="text-sm font-medium">Notes</p>
                        <p className="text-sm text-muted-foreground">{upcomingAppointments[0].notes}</p>
                      </div>
                    )}
                    
                    <div className="pt-4 flex gap-4">
                      <Button variant="outline">Modifier</Button>
                      <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        Annuler
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </ClientLayout>
  );
};

export default ClientAppointments;
