
import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Moon, Sun, PaintBucket, LogOut, Trash2, UserCog, AlertTriangle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/components/auth/AuthProvider';
import { useToast } from '@/hooks/use-toast';

const ClientSettings = () => {
  const { signOut } = useAuth();
  const { toast } = useToast();
  
  const handleSaveGeneral = () => {
    toast({
      title: "Paramètres mis à jour",
      description: "Vos paramètres généraux ont été enregistrés avec succès.",
    });
  };
  
  const handleDeleteAccount = () => {
    toast({
      title: "Cette fonctionnalité n'est pas disponible",
      description: "La suppression du compte n'est pas implémentée dans cette version de démonstration.",
      variant: "destructive"
    });
  };
  
  return (
    <ClientLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-mecano-blue">Paramètres</h1>
          <p className="text-muted-foreground">
            Configurez les paramètres de votre compte
          </p>
        </div>
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="general">Général</TabsTrigger>
            <TabsTrigger value="appearance">Apparence</TabsTrigger>
            <TabsTrigger value="account">Compte</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres généraux</CardTitle>
                <CardDescription>Configurez les options générales de votre compte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-base font-medium flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    Langue et région
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Langue</Label>
                    <Select defaultValue="fr">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Sélectionnez une langue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="region">Région</Label>
                    <Select defaultValue="fr">
                      <SelectTrigger id="region">
                        <SelectValue placeholder="Sélectionnez une région" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="be">Belgique</SelectItem>
                        <SelectItem value="ch">Suisse</SelectItem>
                        <SelectItem value="lu">Luxembourg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Format de date</Label>
                    <Select defaultValue="dd-mm-yyyy">
                      <SelectTrigger id="dateFormat">
                        <SelectValue placeholder="Sélectionnez un format de date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd-mm-yyyy">JJ/MM/AAAA</SelectItem>
                        <SelectItem value="mm-dd-yyyy">MM/JJ/AAAA</SelectItem>
                        <SelectItem value="yyyy-mm-dd">AAAA/MM/JJ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-base font-medium">Accessibilité</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Contraste élevé</h4>
                      <p className="text-xs text-muted-foreground">
                        Augmente le contraste pour une meilleure lisibilité
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="high-contrast" />
                      <Label htmlFor="high-contrast">Désactivé</Label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Taille de texte</h4>
                      <p className="text-xs text-muted-foreground">
                        Ajustez la taille du texte pour une meilleure lisibilité
                      </p>
                    </div>
                    <div>
                      <Select defaultValue="medium">
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Taille" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Petit</SelectItem>
                          <SelectItem value="medium">Moyen</SelectItem>
                          <SelectItem value="large">Grand</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Réduire les animations</h4>
                      <p className="text-xs text-muted-foreground">
                        Réduit les animations pour limiter la fatigue visuelle
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="reduce-motion" />
                      <Label htmlFor="reduce-motion">Désactivé</Label>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-mecano-blue hover:bg-mecano-blue/90" onClick={handleSaveGeneral}>
                  Enregistrer les paramètres
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Apparence</CardTitle>
                <CardDescription>Personnalisez l'apparence de l'application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-base font-medium flex items-center">
                    <Sun className="h-4 w-4 mr-2" />
                    Thème
                  </h3>
                  
                  <RadioGroup defaultValue="light" className="grid grid-cols-3 gap-4">
                    <Label
                      htmlFor="theme-light"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-mecano-blue [&:has([data-state=checked])]:border-mecano-blue"
                    >
                      <RadioGroupItem value="light" id="theme-light" className="sr-only" />
                      <Sun className="h-5 w-5 mb-2" />
                      <span>Clair</span>
                    </Label>
                    <Label
                      htmlFor="theme-dark"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-mecano-blue [&:has([data-state=checked])]:border-mecano-blue"
                    >
                      <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
                      <Moon className="h-5 w-5 mb-2" />
                      <span>Sombre</span>
                    </Label>
                    <Label
                      htmlFor="theme-system"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-mecano-blue [&:has([data-state=checked])]:border-mecano-blue"
                    >
                      <RadioGroupItem value="system" id="theme-system" className="sr-only" />
                      <div className="flex items-center h-5 mb-2">
                        <Sun className="h-5 w-5" />
                        <span className="mx-1">/</span>
                        <Moon className="h-5 w-5" />
                      </div>
                      <span>Système</span>
                    </Label>
                  </RadioGroup>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-base font-medium flex items-center">
                    <PaintBucket className="h-4 w-4 mr-2" />
                    Couleurs
                  </h3>
                  
                  <div>
                    <Label htmlFor="primary-color">Couleur principale</Label>
                    <RadioGroup defaultValue="blue" className="grid grid-cols-5 gap-2 mt-2">
                      {[
                        { value: "blue", color: "bg-blue-600" },
                        { value: "green", color: "bg-green-600" },
                        { value: "red", color: "bg-red-600" },
                        { value: "purple", color: "bg-purple-600" },
                        { value: "orange", color: "bg-orange-600" },
                      ].map((item) => (
                        <div key={item.value} className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={item.value}
                            id={`color-${item.value}`}
                            className="sr-only"
                          />
                          <Label
                            htmlFor={`color-${item.value}`}
                            className={`h-8 w-8 rounded-full cursor-pointer transition-all ${item.color} border-2 border-transparent peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-offset-2 [&:has([data-state=checked])]:ring-2 [&:has([data-state=checked])]:ring-offset-2 [&:has([data-state=checked])]:ring-black ring-offset-white`}
                          />
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-base font-medium">Options d'affichage</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Mode compact</h4>
                      <p className="text-xs text-muted-foreground">
                        Réduit l'espacement pour afficher plus de contenu
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="compact-mode" />
                      <Label htmlFor="compact-mode">Désactivé</Label>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-mecano-blue hover:bg-mecano-blue/90">
                  Appliquer les changements
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Gestion du compte</CardTitle>
                <CardDescription>Gérez votre compte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-base font-medium flex items-center">
                    <UserCog className="h-4 w-4 mr-2" />
                    Options du compte
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Exportation des données</h4>
                      <p className="text-xs text-muted-foreground">
                        Téléchargez une copie de vos données
                      </p>
                    </div>
                    <Button variant="outline">Exporter</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Se déconnecter</h4>
                      <p className="text-xs text-muted-foreground">
                        Déconnectez-vous de votre compte
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 flex items-center"
                      onClick={signOut}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Déconnexion
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-base font-medium flex items-center text-red-500">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Zone dangereuse
                  </h3>
                  
                  <div className="border border-red-200 rounded-md p-4 bg-red-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-red-700">Supprimer mon compte</h4>
                        <p className="text-xs text-red-600">
                          Attention: cette action est irréversible et supprimera toutes vos données
                        </p>
                      </div>
                      <Button
                        variant="destructive"
                        className="flex items-center"
                        onClick={handleDeleteAccount}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ClientLayout>
  );
};

export default ClientSettings;
