
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Mail, Phone } from "lucide-react";

// Données factices pour les clients
const clients = [
  { id: 1, name: "Martin Dupont", phone: "06 12 34 56 78", email: "martin.dupont@email.com", vehicles: 2, lastVisit: "28/04/2025" },
  { id: 2, name: "Sophie Leclerc", phone: "06 23 45 67 89", email: "sophie.leclerc@email.com", vehicles: 1, lastVisit: "27/04/2025" },
  { id: 3, name: "Jean Moreau", phone: "06 34 56 78 90", email: "jean.moreau@email.com", vehicles: 3, lastVisit: "25/04/2025" },
  { id: 4, name: "Lucie Bertrand", phone: "06 45 67 89 01", email: "lucie.bertrand@email.com", vehicles: 1, lastVisit: "22/04/2025" },
  { id: 5, name: "Pierre Martin", phone: "06 56 78 90 12", email: "pierre.martin@email.com", vehicles: 2, lastVisit: "20/04/2025" },
];

const Clients = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-mecano-blue">Clients</h1>
            <p className="text-muted-foreground">Gestion et suivi de la clientèle</p>
          </div>
          
          <Button className="bg-mecano-blue hover:bg-mecano-blue/90">
            <Plus className="mr-2 h-4 w-4" />
            Nouveau client
          </Button>
        </div>
        
        <Card>
          <CardHeader className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un client..."
                className="pl-8 bg-background"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Véhicules</TableHead>
                  <TableHead>Dernière visite</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id} className="hover:bg-muted/50 cursor-pointer">
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center text-xs">
                          <Phone className="h-3 w-3 mr-1 text-mecano-blue" />
                          {client.phone}
                        </div>
                        <div className="flex items-center text-xs">
                          <Mail className="h-3 w-3 mr-1 text-mecano-blue" />
                          {client.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{client.vehicles}</TableCell>
                    <TableCell>{client.lastVisit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Clients;
