
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Données factices pour les rendez-vous du jour sélectionné
const appointmentsData = {
  "2025-05-01": [
    { time: "09:00", client: "Martin Dupont", vehicle: "Peugeot 308", type: "Entretien" },
    { time: "11:30", client: "Sophie Leclerc", vehicle: "Renault Clio", type: "Réparation" },
    { time: "14:00", client: "Jean Moreau", vehicle: "Citroen C3", type: "Diagnostic" }
  ],
  "2025-05-02": [
    { time: "08:30", client: "Lucie Bertrand", vehicle: "Ford Focus", type: "Pneus" },
    { time: "10:00", client: "Pierre Martin", vehicle: "Volkswagen Golf", type: "Révision" }
  ]
};

export const AppointmentCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Extraire les rendez-vous pour la date sélectionnée
  const selectedDateStr = date ? date.toISOString().split("T")[0] : "";
  const appointments = appointmentsData[selectedDateStr as keyof typeof appointmentsData] || [];

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Calendrier des rendez-vous</CardTitle>
        <CardDescription>Consultez et gérez les rendez-vous</CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mx-auto mb-4"
        />
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">
            {date ? new Intl.DateTimeFormat('fr-FR', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }).format(date) : "Aucune date sélectionnée"}
          </h4>
          
          {appointments.length > 0 ? (
            <div className="space-y-3">
              {appointments.map((appointment, idx) => (
                <div key={idx} className="rounded-lg border p-3 text-sm">
                  <div className="font-medium">{appointment.time} - {appointment.type}</div>
                  <div className="text-muted-foreground">
                    {appointment.client} • {appointment.vehicle}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">Aucun rendez-vous pour cette date.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCalendar;
