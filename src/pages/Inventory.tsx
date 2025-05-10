
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// Données factices pour les pièces
const parts = [
  { 
    id: 1, 
    reference: "FIL-001", 
    name: "Filtre à huile", 
    brand: "Bosch",
    category: "Filtration",
    quantity: 15,
    minStock: 5,
    price: 12.50,
    location: "A1-B3"
  },
  { 
    id: 2, 
    reference: "PLQ-002", 
    name: "Plaquettes de frein avant", 
    brand: "TRW",
    category: "Freinage",
    quantity: 4,
    minStock: 6,
    price: 45.80,
    location: "A2-C1"
  },
  { 
    id: 3, 
    reference: "BAT-003", 
    name: "Batterie 60Ah", 
    brand: "Varta",
    category: "Électrique",
    quantity: 8,
    minStock: 3,
    price: 89.90,
    location: "B1-D2"
  },
  { 
    id: 4, 
    reference: "HUI-004", 
    name: "Huile moteur 5W30 (1L)", 
    brand: "Total",
    category: "Lubrifiants",
    quantity: 32,
    minStock: 10,
    price: 9.95,
    location: "C3-A2"
  },
  { 
    id: 5, 
    reference: "ESS-005", 
    name: "Essuie-glace 60cm", 
    brand: "Valeo",
    category: "Visibilité",
    quantity: 2,
    minStock: 4,
    price: 18.75,
    location: "D2-B1"
  },
];

const InventoryStatCard = ({ title, value, icon }: { title: string; value: string | number; icon?: React.ReactNode }) => {
  return (
    <Card>
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        {icon && <div className="text-mecano-blue">{icon}</div>}
      </CardContent>
    </Card>
  );
};

const StockIndicator = ({ current, min }: { current: number; min: number }) => {
  const percentage = Math.min((current / min) * 100, 200);
  const status = current < min ? "low" : current < min * 1.5 ? "medium" : "good";
  
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-xs">
        <span>Stock: {current}</span>
        <span>Min: {min}</span>
      </div>
      <Progress 
        value={percentage} 
        className={cn(
          "h-2",
          status === "low" ? "bg-red-200" : 
          status === "medium" ? "bg-orange-200" : 
          "bg-green-200"
        )} 
      />
      <div 
        className={cn(
          "h-full rounded-full", 
          status === "low" ? "bg-mecano-red" : 
          status === "medium" ? "bg-mecano-orange" : 
          "bg-green-500"
        )} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const Inventory = () => {
  const lowStockCount = parts.filter(part => part.quantity < part.minStock).length;
  const totalParts = parts.reduce((sum, part) => sum + part.quantity, 0);
  const totalValue = parts.reduce((sum, part) => sum + (part.quantity * part.price), 0).toFixed(2);
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-mecano-blue">Inventaire</h1>
            <p className="text-muted-foreground">Gestion du stock de pièces détachées</p>
          </div>
          
          <Button className="bg-mecano-blue hover:bg-mecano-blue/90">
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle pièce
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <InventoryStatCard title="Pièces en stock" value={totalParts} />
          <InventoryStatCard title="Valeur totale" value={`${totalValue} €`} />
          <InventoryStatCard 
            title="Pièces en rupture" 
            value={lowStockCount} 
            icon={lowStockCount > 0 ? <AlertTriangle className="h-8 w-8 text-mecano-red" /> : undefined} 
          />
        </div>
        
        <Card>
          <CardHeader className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher une pièce..."
                className="pl-8 bg-background"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Référence</TableHead>
                  <TableHead>Désignation</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead>Emplacement</TableHead>
                  <TableHead>Stock</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {parts.map((part) => (
                  <TableRow key={part.id} className="hover:bg-muted/50 cursor-pointer">
                    <TableCell className="font-medium">{part.reference}</TableCell>
                    <TableCell>
                      <div>{part.name}</div>
                      <div className="text-xs text-muted-foreground">{part.brand}</div>
                    </TableCell>
                    <TableCell>{part.category}</TableCell>
                    <TableCell>{part.price.toFixed(2)} €</TableCell>
                    <TableCell>{part.location}</TableCell>
                    <TableCell className="w-[140px]">
                      <StockIndicator current={part.quantity} min={part.minStock} />
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

export default Inventory;
