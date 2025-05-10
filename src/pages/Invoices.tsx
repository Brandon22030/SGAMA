
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Search, 
  Plus, 
  Download,
  FileText,
  Eye,
  User,
  Car
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Définition du type pour le statut des factures
type InvoiceStatus = "paid" | "pending" | "overdue";

// Interface pour les factures
interface Invoice {
  id: string;
  date: string;
  client: string;
  vehicle: string;
  amount: number;
  status: InvoiceStatus;
}

// Données factices pour les factures
const invoices: Invoice[] = [
  {
    id: "F-2025-0125",
    date: "28/04/2025",
    client: "Martin Dupont",
    vehicle: "Peugeot 308",
    amount: 145.80,
    status: "paid"
  },
  {
    id: "F-2025-0124",
    date: "27/04/2025",
    client: "Sophie Leclerc",
    vehicle: "Renault Clio",
    amount: 320.50,
    status: "pending"
  },
  {
    id: "F-2025-0123",
    date: "25/04/2025",
    client: "Jean Moreau",
    vehicle: "Citroen C3",
    amount: 78.25,
    status: "paid"
  },
  {
    id: "F-2025-0122",
    date: "22/04/2025",
    client: "Lucie Bertrand",
    vehicle: "Ford Focus",
    amount: 560.00,
    status: "overdue"
  },
  {
    id: "F-2025-0121",
    date: "20/04/2025",
    client: "Pierre Martin",
    vehicle: "Volkswagen Golf",
    amount: 210.75,
    status: "paid"
  },
];

const StatusBadge = ({ status }: { status: InvoiceStatus }) => {
  const getStatusConfig = () => {
    switch (status) {
      case "paid":
        return {
          className: "bg-green-100 text-green-600 hover:bg-green-200",
          text: "Payée"
        };
      case "pending":
        return {
          className: "bg-mecano-orange/10 text-mecano-orange hover:bg-mecano-orange/20",
          text: "En attente"
        };
      case "overdue":
        return {
          className: "bg-mecano-red/10 text-mecano-red hover:bg-mecano-red/20",
          text: "En retard"
        };
    }
  };
  
  const config = getStatusConfig();
  
  return (
    <Badge variant="outline" className={config.className}>
      {config.text}
    </Badge>
  );
};

const Invoices = () => {
  // Calculer les totaux pour les factures
  const totalPaid = invoices
    .filter(inv => inv.status === "paid")
    .reduce((sum, inv) => sum + inv.amount, 0);
    
  const totalPending = invoices
    .filter(inv => inv.status === "pending" || inv.status === "overdue")
    .reduce((sum, inv) => sum + inv.amount, 0);
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-mecano-blue">Factures</h1>
            <p className="text-muted-foreground">Gestion des factures et paiements</p>
          </div>
          
          <Button className="bg-mecano-blue hover:bg-mecano-blue/90">
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle facture
          </Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Total payé</h3>
              <p className="text-2xl font-semibold text-green-600">{totalPaid.toFixed(2)} €</p>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Total en attente</h3>
              <p className="text-2xl font-semibold text-mecano-orange">{totalPending.toFixed(2)} €</p>
            </CardHeader>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher une facture..."
                className="pl-8 bg-background"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>N° Facture</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-mecano-blue" />
                        {invoice.id}
                      </div>
                    </TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center text-sm">
                          <User className="h-3.5 w-3.5 mr-1.5 text-mecano-blue" />
                          {invoice.client}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Car className="h-3 w-3 mr-1.5" />
                          {invoice.vehicle}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{invoice.amount.toFixed(2)} €</TableCell>
                    <TableCell>
                      <StatusBadge status={invoice.status} />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
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

export default Invoices;
