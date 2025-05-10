
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, User, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Données factices pour les véhicules
const vehicles = [
  { 
    id: 1, 
    brand: "Peugeot", 
    model: "308", 
    year: 2019, 
    license: "AB-123-CD", 
    owner: "Martin Dupont",
    lastService: "28/04/2025",
    status: "En atelier"
  },
  { 
    id: 2, 
    brand: "Renault", 
    model: "Clio", 
    year: 2020, 
    license: "CD-456-EF", 
    owner: "Sophie Leclerc",
    lastService: "12/03/2025",
    status: "Planifié"
  },
  { 
    id: 3, 
    brand: "Citroen", 
    model: "C3", 
    year: 2018, 
    license: "EF-789-GH", 
    owner: "Jean Moreau",
    lastService: "05/02/2025",
    status: "Terminé"
  },
  { 
    id: 4, 
    brand: "Ford", 
    model: "Focus", 
    year: 2021, 
    license: "GH-012-IJ", 
    owner: "Lucie Bertrand",
    lastService: "18/01/2025",
    status: "En atelier"
  },
  { 
    id: 5, 
    brand: "Volkswagen", 
    model: "Golf", 
    year: 2017, 
    license: "IJ-345-KL", 
    owner: "Pierre Martin",
    lastService: "30/12/2024",
    status: "Terminé"
  },
];

const Vehicles = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-mecano-blue">Véhicules</h1>
            <p className="text-muted-foreground">Gestion et suivi des véhicules</p>
          </div>
          
          <Button className="bg-mecano-blue hover:bg-mecano-blue/90">
            <Plus className="mr-2 h-4 w-4" />
            Nouveau véhicule
          </Button>
        </div>
        
        <Card>
          <CardHeader className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher un véhicule..."
                className="pl-8 bg-background"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Véhicule</TableHead>
                  <TableHead>Propriétaire</TableHead>
                  <TableHead>Dernier entretien</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicles.map((vehicle) => (
                  <TableRow key={vehicle.id} className="hover:bg-muted/50 cursor-pointer">
                    <TableCell>
                      <div className="font-medium">{vehicle.brand} {vehicle.model}</div>
                      <div className="text-xs text-muted-foreground">{vehicle.license} • {vehicle.year}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <User className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
                        {vehicle.owner}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
                        {vehicle.lastService}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={
                        vehicle.status === "En atelier" ? "border-mecano-blue text-mecano-blue" :
                        vehicle.status === "Planifié" ? "border-mecano-orange text-mecano-orange" :
                        "border-green-600 text-green-600"
                      }>
                        {vehicle.status}
                      </Badge>
                    </TableCell>
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

export default Vehicles;
