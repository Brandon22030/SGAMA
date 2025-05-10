
import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Car, Clock, Wrench, ChevronRight, Tag, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Données factices pour l'historique
interface HistoryItem {
  id: number;
  date: string;
  type: 'repair' | 'maintenance';
  service: string;
  vehicle: string;
  mileage: number;
  cost: number;
  details: string;
  technician: string;
}

const historyItems: HistoryItem[] = [
  {
    id: 1,
    date: "15/04/2025",
    type: "repair",
    service: "Changement plaquettes de frein",
    vehicle: "Peugeot 308",
    mileage: 63500,
    cost: 210,
    details: "Remplacement des plaquettes de frein avant et arrière",
    technician: "Lucas Petit"
  },
  {
    id: 2,
    date: "02/03/2025",
    type: "maintenance",
    service: "Vidange + filtres",
    vehicle: "Peugeot 308",
    mileage: 60000,
    cost: 150,
    details: "Vidange complète, remplacement filtre à huile et filtre à air",
    technician: "Emma Dubois"
  },
  {
    id: 3,
    date: "10/11/2024",
    type: "repair",
    service: "Remplacement batterie",
    vehicle: "Peugeot 308",
    mileage: 55000,
    cost: 180,
    details: "Installation d'une nouvelle batterie avec test du système électrique",
    technician: "Lucas Petit"
  },
  {
    id: 4,
    date: "05/08/2024",
    type: "maintenance",
    service: "Contrôle technique",
    vehicle: "Peugeot 308",
    mileage: 50000,
    cost: 85,
    details: "Contrôle technique obligatoire - Aucune anomalie détectée",
    technician: "Thomas Leroux"
  }
];

interface HistoryItemCardProps {
  item: HistoryItem;
}

const HistoryItemCard = ({ item }: HistoryItemCardProps) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold">{item.service}</h3>
            <div className="flex items-center text-xs text-muted-foreground">
              <Car className="h-3 w-3 mr-1" />
              <span>{item.vehicle}</span>
              <span className="mx-1">•</span>
              <Calendar className="h-3 w-3 mr-1" />
              <span>{item.date}</span>
            </div>
          </div>
          <div className={`px-2 py-1 text-xs rounded-full ${
            item.type === 'repair' 
              ? "bg-mecano-orange/10 text-mecano-orange" 
              : "bg-mecano-blue/10 text-mecano-blue"
          }`}>
            {item.type === 'repair' ? "Réparation" : "Entretien"}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs mt-3">
          <div>
            <span className="text-muted-foreground">Kilométrage:</span> {item.mileage.toLocaleString()} km
          </div>
          <div>
            <span className="text-muted-foreground">Coût:</span> {item.cost} €
          </div>
        </div>
        
        <div className="mt-3 text-xs">
          <p className="text-muted-foreground mb-1">Détails:</p>
          <p>{item.details}</p>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            Technicien: {item.technician}
          </span>
          
          <Button variant="ghost" size="sm" className="text-mecano-blue" asChild>
            <Link to={`/historique/${item.id}`}>
              Détails
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ClientHistory = () => {
  return (
    <ClientLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-mecano-blue">Historique</h1>
          <p className="text-muted-foreground">
            Consultez l'historique des interventions sur vos véhicules
          </p>
        </div>
        
        {/* Filtres et recherche */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher une intervention..."
              className="pl-9"
            />
          </div>
          
          <div className="flex gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center">
                  <Car className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Véhicule" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les véhicules</SelectItem>
                <SelectItem value="peugeot308">Peugeot 308</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center">
                  <Wrench className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="repair">Réparation</SelectItem>
                <SelectItem value="maintenance">Entretien</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <div className="bg-mecano-blue/10 p-3 rounded-full mb-3">
                <Wrench className="h-6 w-6 text-mecano-blue" />
              </div>
              <h3 className="text-2xl font-bold">{historyItems.length}</h3>
              <p className="text-sm text-muted-foreground">Interventions</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-3">
                <Tag className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold">625 €</h3>
              <p className="text-sm text-muted-foreground">Dépenses totales</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-full mb-3">
                <Filter className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold">2</h3>
              <p className="text-sm text-muted-foreground">Types d'intervention</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <div className="bg-orange-100 p-3 rounded-full mb-3">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold">1 an</h3>
              <p className="text-sm text-muted-foreground">Historique</p>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Interventions récentes</h2>
          {historyItems.length > 0 ? (
            historyItems.map(item => (
              <HistoryItemCard key={item.id} item={item} />
            ))
          ) : (
            <Card className="p-8 text-center">
              <div className="flex flex-col items-center max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1590674899484-d5a73134b938?w=800&auto=format&fit=crop&q=60" 
                  alt="Aucun historique" 
                  className="w-40 h-40 object-cover rounded-lg mb-6"
                />
                <h2 className="text-xl font-semibold mb-2">Aucune intervention à afficher</h2>
                <p className="text-muted-foreground mb-6">
                  Vous n'avez pas encore d'historique d'interventions pour vos véhicules.
                </p>
              </div>
            </Card>
          )}
        </div>
        
        <div className="bg-mecano-lightgray rounded-lg p-6 mt-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60" 
                alt="Suivi d'entretien" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="md:flex-1">
              <h2 className="text-xl font-semibold mb-2">Carnet d'entretien numérique</h2>
              <p className="mb-4">
                Pour simplifier le suivi de vos véhicules, MécanoSuite propose un carnet d'entretien numérique
                pour chacun de vos véhicules. Téléchargez-le à tout moment pour vos démarches administratives.
              </p>
              <Button variant="outline" className="flex items-center">
                Télécharger le carnet d'entretien
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ClientHistory;
