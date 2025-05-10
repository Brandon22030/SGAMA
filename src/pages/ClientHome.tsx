
import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Car, Clock, MessageSquare, ShieldAlert, Tag, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/components/auth/AuthProvider';

const ClientHome = () => {
  const { user } = useAuth();
  
  return (
    <ClientLayout>
      <div className="space-y-6">
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-mecano-blue">
              Bienvenue {user?.user_metadata?.first_name || 'sur MécanoSuite'}
            </h1>
            <p className="text-mecano-gray mt-1">
              Gérez vos véhicules et rendez-vous en toute simplicité
            </p>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&auto=format&fit=crop&q=60" 
            alt="Garage automobile" 
            className="rounded-lg w-full md:w-72 h-40 object-cover shadow-md" 
          />
        </section>
        
        {/* Boutons d'action rapide */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-mecano-blue to-blue-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Nouveau rendez-vous
              </CardTitle>
              <CardDescription className="text-blue-100">
                Planifiez votre prochain entretien
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <img 
                src="https://images.unsplash.com/photo-1606611013707-3284193bce3f?w=800&auto=format&fit=crop&q=60" 
                alt="Calendrier d'entretien" 
                className="rounded-md w-full h-32 object-cover" 
              />
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full" asChild>
                <Link to="/rendez-vous/nouveau">Prendre rendez-vous</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Ajouter un véhicule
              </CardTitle>
              <CardDescription>
                Enregistrez un nouveau véhicule
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=60" 
                alt="Automobile" 
                className="rounded-md w-full h-32 object-cover" 
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/mes-vehicules/ajouter">Ajouter</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Contacter l'atelier
              </CardTitle>
              <CardDescription>
                Une question ? Besoin d'aide ?
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
              <img 
                src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&auto=format&fit=crop&q=60" 
                alt="Contact support" 
                className="rounded-md w-full h-32 object-cover" 
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Contacter</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
        
        {/* Rappels et alertes */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-mecano-red" />
            Alertes et rappels
          </h2>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <p className="text-center text-mecano-gray italic flex items-center justify-center gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60" 
                  alt="Aucune alerte" 
                  className="rounded-full w-10 h-10 object-cover"
                />
                Aucune alerte actuellement
              </p>
            </div>
          </div>
        </section>
        
        {/* Prochains rendez-vous */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-mecano-blue" />
            Prochains rendez-vous
          </h2>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&auto=format&fit=crop&q=60" 
                  alt="Aucun rendez-vous" 
                  className="rounded-md w-24 h-16 object-cover"
                />
                <p className="text-center text-mecano-gray italic">
                  Aucun rendez-vous à venir
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services proposés */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Services proposés</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                icon: <Wrench />, 
                title: "Révision générale", 
                description: "Entretien complet de votre véhicule", 
                image: "https://images.unsplash.com/photo-1630578492228-823a8fe1f7e9?w=800&auto=format&fit=crop&q=60",
                link: "/services/revision"
              },
              { 
                icon: <Wrench />, 
                title: "Réparation", 
                description: "Diagnostic et réparation de pannes", 
                image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=60",
                link: "/services/reparation"
              },
              { 
                icon: <Tag />, 
                title: "Contrôle technique", 
                description: "Préparation au contrôle technique", 
                image: "https://images.unsplash.com/photo-1599256871679-6a3e7c06adbd?w=800&auto=format&fit=crop&q=60",
                link: "/services/controle-technique"
              },
              { 
                icon: <Clock />, 
                title: "Entretien rapide", 
                description: "Vidange, filtres, freins, etc.", 
                image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=60",
                link: "/services/entretien-rapide"
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <Link to={service.link}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="rounded-md w-full h-32 object-cover mb-4"
                      />
                      <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-mecano-blue mb-4">
                        {service.icon}
                      </div>
                      <h3 className="font-medium">{service.title}</h3>
                      <p className="text-sm text-mecano-gray mt-1">{service.description}</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </ClientLayout>
  );
};

export default ClientHome;
