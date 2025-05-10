
import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Phone, Shield, KeyRound, Bell, Tag, Car } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/auth/AuthProvider';
import { useToast } from '@/hooks/use-toast';

const ClientProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Profil mis à jour",
      description: "Vos informations personnelles ont été mises à jour avec succès.",
    });
  };
  
  const handleChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mot de passe changé",
      description: "Votre mot de passe a été modifié avec succès.",
    });
  };
  
  return (
    <ClientLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-mecano-blue">Mon profil</h1>
          <p className="text-muted-foreground">
            Gérez vos informations personnelles et vos préférences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section gauche: Avatar et information de base */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Informations</CardTitle>
              <CardDescription>Votre photo et informations générales</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Avatar className="h-32 w-32">
                <AvatarImage src={
                  user?.user_metadata?.avatar_url || 
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60"
                } />
                <AvatarFallback className="text-2xl">
                  {user?.user_metadata?.first_name?.charAt(0) || user?.email?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              
              <div className="text-center">
                <h2 className="text-xl font-semibold">
                  {user?.user_metadata?.first_name 
                    ? `${user.user_metadata.first_name} ${user.user_metadata.last_name || ""}`
                    : "Utilisateur"
                  }
                </h2>
                <p className="text-sm text-muted-foreground mt-1">{user?.email}</p>
              </div>
              
              <Button variant="outline" className="w-full">
                Changer la photo
              </Button>
              
              <Separator />
              
              <div className="w-full space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 text-mecano-blue mr-2" />
                    <span className="text-sm">Client depuis</span>
                  </div>
                  <span className="text-sm font-medium">Avril 2025</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Car className="h-4 w-4 text-mecano-blue mr-2" />
                    <span className="text-sm">Véhicules</span>
                  </div>
                  <span className="text-sm font-medium">2</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-mecano-blue mr-2" />
                    <span className="text-sm">Statut</span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-mecano-blue/10 text-mecano-blue rounded-full font-medium">Client</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Section droite: Onglets profil */}
          <div className="md:col-span-2">
            <Tabs defaultValue="general">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="general">Général</TabsTrigger>
                <TabsTrigger value="security">Sécurité</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations personnelles</CardTitle>
                    <CardDescription>Mettez à jour vos informations personnelles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            <User className="h-4 w-4 inline mr-1" />
                            Prénom
                          </label>
                          <Input 
                            id="firstName" 
                            placeholder="Votre prénom" 
                            defaultValue={user?.user_metadata?.first_name || ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            <User className="h-4 w-4 inline mr-1" />
                            Nom
                          </label>
                          <Input 
                            id="lastName" 
                            placeholder="Votre nom" 
                            defaultValue={user?.user_metadata?.last_name || ""}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          <Mail className="h-4 w-4 inline mr-1" />
                          Email
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="votre.email@exemple.com" 
                          defaultValue={user?.email || ""}
                          readOnly
                          disabled
                        />
                        <p className="text-xs text-muted-foreground">
                          L'email ne peut pas être modifié directement. Contactez le support pour changer votre email.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          <Phone className="h-4 w-4 inline mr-1" />
                          Téléphone
                        </label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="06 12 34 56 78" 
                          defaultValue={user?.user_metadata?.phone || ""}
                        />
                      </div>
                      
                      <Button type="submit" className="bg-mecano-blue hover:bg-mecano-blue/90">
                        Enregistrer les modifications
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Sécurité du compte</CardTitle>
                    <CardDescription>Gérez votre mot de passe et la sécurité du compte</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={handleChangePassword} className="space-y-4">
                      <h3 className="text-base font-medium flex items-center">
                        <KeyRound className="h-4 w-4 mr-2" />
                        Modifier le mot de passe
                      </h3>
                      
                      <div className="space-y-2">
                        <label htmlFor="currentPassword" className="text-sm font-medium">
                          Mot de passe actuel
                        </label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="newPassword" className="text-sm font-medium">
                          Nouveau mot de passe
                        </label>
                        <Input id="newPassword" type="password" />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="text-sm font-medium">
                          Confirmer le nouveau mot de passe
                        </label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      
                      <Button type="submit" className="bg-mecano-blue hover:bg-mecano-blue/90">
                        Changer le mot de passe
                      </Button>
                    </form>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="text-base font-medium flex items-center">
                        <Shield className="h-4 w-4 mr-2" />
                        Options de sécurité
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium">Authentification à deux facteurs</h4>
                          <p className="text-xs text-muted-foreground">
                            Protégez votre compte avec une vérification supplémentaire
                          </p>
                        </div>
                        <Button variant="outline">Configurer</Button>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium">Appareils connectés</h4>
                          <p className="text-xs text-muted-foreground">
                            Gérez les appareils connectés à votre compte
                          </p>
                        </div>
                        <Button variant="outline">Voir</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Préférences de notification</CardTitle>
                    <CardDescription>Gérez comment et quand vous souhaitez être notifié</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h3 className="text-base font-medium flex items-center">
                        <Bell className="h-4 w-4 mr-2" />
                        Notifications par email
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium">Rendez-vous</h4>
                            <p className="text-xs text-muted-foreground">
                              Rappels de rendez-vous à venir
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="appointment-notifications" defaultChecked />
                            <Label htmlFor="appointment-notifications">Activé</Label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium">Statut des interventions</h4>
                            <p className="text-xs text-muted-foreground">
                              Mises à jour sur l'avancement des travaux
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="repair-status-notifications" defaultChecked />
                            <Label htmlFor="repair-status-notifications">Activé</Label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium">Rappels d'entretien</h4>
                            <p className="text-xs text-muted-foreground">
                              Notifications pour les entretiens périodiques
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="maintenance-notifications" defaultChecked />
                            <Label htmlFor="maintenance-notifications">Activé</Label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium">Offres spéciales</h4>
                            <p className="text-xs text-muted-foreground">
                              Promotions et offres exclusives
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="promo-notifications" />
                            <Label htmlFor="promo-notifications">Désactivé</Label>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <h3 className="text-base font-medium">Préférences générales</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium">Notifications push</h4>
                            <p className="text-xs text-muted-foreground">
                              Notifications sur l'application mobile
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="push-notifications" defaultChecked />
                            <Label htmlFor="push-notifications">Activé</Label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium">SMS</h4>
                            <p className="text-xs text-muted-foreground">
                              Notifications par SMS
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="sms-notifications" />
                            <Label htmlFor="sms-notifications">Désactivé</Label>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="bg-mecano-blue hover:bg-mecano-blue/90 mt-4">
                        Enregistrer les préférences
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ClientProfile;
