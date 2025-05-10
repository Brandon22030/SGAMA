
import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Calendar, AlertCircle, ArrowRight, Settings, Fuel, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

// Données factices pour les véhicules
const vehicles = [
  {
    id: 1,
    brand: "Peugeot",
    model: "308",
    year: 2018,
    licensePlate: "AB-123-CD",
    mileage: 65000,
    fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=800&auto=format&fit=crop&q=60",
    nextService: "15/06/2025",
    alerts: 0
  },
  {
    id: 2,
    brand: "Renault",
    model: "Clio",
    year: 2020,
    licensePlate: "EF-456-GH",
    mileage: 32000,
    fuelType: "Essence",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=60",
    nextService: "03/05/2025",
    alerts: 1
  }
];

interface VehicleCardProps {
  vehicle: typeof vehicles[0];
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img 
          src={vehicle.image} 
          alt={`${vehicle.brand} ${vehicle.model}`} 
          className="w-full h-48 object-cover"
        />
        {vehicle.alerts > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
            <AlertCircle className="h-4 w-4" />
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{vehicle.brand} {vehicle.model}</span>
          <span className="text-sm bg-gray-100 px-2 py-1 rounded">{vehicle.year}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Immatriculation:</dt>
            <dd>{vehicle.licensePlate}</dd>
          </div>
          <div className="flex justify-between items-center">
            <dt className="flex items-center gap-1">
              <Gauge className="h-4 w-4 text-mecano-blue" />
              <span>Kilométrage:</span>
            </dt>
            <dd>{vehicle.mileage.toLocaleString()} km</dd>
          </div>
          <div className="flex justify-between items-center">
            <dt className="flex items-center gap-1">
              <Fuel className="h-4 w-4 text-mecano-blue" />
              <span>Carburant:</span>
            </dt>
            <dd>{vehicle.fuelType}</dd>
          </div>
          <div className="flex justify-between items-center">
            <dt className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-mecano-blue" />
              <span>Prochain entretien:</span>
            </dt>
            <dd>{vehicle.nextService}</dd>
          </div>
        </dl>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/mes-vehicules/${vehicle.id}`}>
            Historique
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link to={`/rendez-vous/nouveau?vehicleId=${vehicle.id}`}>
            Prendre RDV
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="rounded-full p-0 h-8 w-8" asChild>
          <Link to={`/mes-vehicules/${vehicle.id}/edit`}>
            <Settings className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ClientVehicles = () => {
  return (
    <ClientLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-mecano-blue">Mes véhicules</h1>
            <p className="text-muted-foreground">
              Gérez vos véhicules et consultez leur historique d'entretien
            </p>
          </div>
          
          <Button className="bg-mecano-blue hover:bg-mecano-blue/90">
            <Plus className="mr-2 h-4 w-4" />
            Ajouter un véhicule
          </Button>
        </div>
        
        {vehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
            
            <Card className="flex flex-col items-center justify-center p-6 border-dashed border-2">
              <Plus className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Ajouter un véhicule</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Ajoutez un nouveau véhicule pour suivre son entretien
              </p>
              <Button className="bg-mecano-blue hover:bg-mecano-blue/90">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter
              </Button>
            </Card>
          </div>
        ) : (
          <Card className="p-8 text-center">
            <div className="flex flex-col items-center max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=60" 
                alt="Aucun véhicule" 
                className="w-40 h-40 object-cover rounded-lg mb-6"
              />
              <h2 className="text-xl font-semibold mb-2">Aucun véhicule enregistré</h2>
              <p className="text-muted-foreground mb-6">
                Vous n'avez pas encore ajouté de véhicule à votre compte.
                Ajoutez votre premier véhicule pour commencer à suivre son entretien.
              </p>
              <Button className="bg-mecano-blue hover:bg-mecano-blue/90">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter mon premier véhicule
              </Button>
            </div>
          </Card>
        )}
        
        <div className="bg-mecano-lightgray rounded-lg p-6 mt-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:flex-1">
              <h2 className="text-xl font-semibold mb-2">Service d'inspection à domicile</h2>
              <p className="mb-4">
                Nous proposons désormais un service d'inspection à domicile pour vos véhicules.
                Un technicien se déplace chez vous pour effectuer un diagnostic complet.
              </p>
              <Button variant="outline" className="flex items-center">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&auto=format&fit=crop&q=60" 
                alt="Service à domicile" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ClientVehicles;
