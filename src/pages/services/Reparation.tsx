
import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, Wrench } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Reparation = () => {
  return (
    <ClientLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-mecano-blue">Service de Réparation</h1>
          <p className="text-mecano-gray">
            Expertise et réactivité pour tous vos besoins de réparation automobile
          </p>
        </section>

        {/* Hero Section */}
        <section className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560963689-b5682b6440f8?w=800&auto=format&fit=crop&q=60" 
            alt="Réparation automobile" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mecano-blue/80 to-transparent flex items-center">
            <div className="text-white p-8 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Solutions pour tous vos problèmes mécaniques</h2>
              <p className="text-blue-100">
                Des techniciens qualifiés et des équipements de pointe pour diagnostiquer et réparer efficacement votre véhicule
              </p>
            </div>
          </div>
        </section>

        {/* Nos services de réparation */}
        <section>
          <Tabs defaultValue="mechanical" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-6">
              <TabsTrigger value="mechanical">Mécanique</TabsTrigger>
              <TabsTrigger value="electrical">Électricité/Électronique</TabsTrigger>
              <TabsTrigger value="braking">Freinage</TabsTrigger>
              <TabsTrigger value="climate">Climatisation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mechanical" className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="h-6 w-6 text-mecano-blue" />
                  <h3 className="text-xl font-semibold">Réparations mécaniques</h3>
                </div>
                <p className="mb-4">
                  Nos techniciens sont formés pour intervenir sur tous types de problèmes mécaniques, des plus simples aux plus complexes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Moteur et transmission</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Distribution</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Embrayage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Pompe à eau</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Joint de culasse</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Boîte de vitesses</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Suspension et direction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Amortisseurs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Rotules de direction</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Biellettes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Triangles de suspension</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Barre stabilisatrice</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="electrical" className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="h-6 w-6 text-mecano-blue" />
                  <h3 className="text-xl font-semibold">Électricité et électronique</h3>
                </div>
                <p className="mb-4">
                  Nos spécialistes utilisent des équipements de diagnostic avancés pour résoudre tous les problèmes électriques et électroniques.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Systèmes électriques</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Batterie et alternateur</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Démarreur</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Éclairage et signalisation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Systèmes d'essuie-glaces</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Électronique embarquée</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Calculateurs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Capteurs et actionneurs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Systèmes multimédia</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Diagnostic électronique</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Reprogrammation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="braking" className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-mecano-red" />
                  <h3 className="text-xl font-semibold">Système de freinage</h3>
                </div>
                <p className="mb-4">
                  Votre sécurité est notre priorité. Nous réparons et entretenons tous les composants de votre système de freinage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Réparations de freinage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Plaquettes et disques</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Étriers</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Tambours et mâchoires</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Remplacement du liquide</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Purge des freins</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Systèmes d'assistance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>ABS</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>ESP</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Assistance au freinage d'urgence</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Frein de stationnement électrique</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="climate" className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="h-6 w-6 text-mecano-blue" />
                  <h3 className="text-xl font-semibold">Climatisation</h3>
                </div>
                <p className="mb-4">
                  Nous diagnostiquons et réparons votre système de climatisation pour un confort optimal en toutes saisons.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Services climatisation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Recharge de gaz climatisation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Remplacement du compresseur</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Remplacement du condenseur</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Détection de fuites</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Nettoyage du circuit</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Chauffage et ventilation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Radiateur de chauffage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Ventilateur d'habitacle</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Volets de distribution d'air</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Commandes de climatisation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Filtre d'habitacle</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Pourquoi nous choisir */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Pourquoi choisir notre service de réparation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Expertise technique",
                description: "Nos techniciens sont formés et certifiés sur les dernières technologies automobiles",
                image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&auto=format&fit=crop&q=60"
              },
              {
                title: "Diagnostic précis",
                description: "Équipements de pointe pour identifier rapidement et avec précision les pannes",
                image: "https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?w=800&auto=format&fit=crop&q=60"
              },
              {
                title: "Transparence",
                description: "Devis détaillé avant intervention et explication claire des travaux à réaliser",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60"
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <h4 className="font-medium text-lg mb-2">{item.title}</h4>
                  <p className="text-mecano-gray text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-mecano-blue/10 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-mecano-blue">Un problème avec votre véhicule ?</h3>
              <p className="text-mecano-gray">Contactez-nous ou prenez rendez-vous pour un diagnostic</p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-mecano-blue hover:bg-mecano-blue/90" asChild>
                <Link to="/rendez-vous/nouveau">Prendre rendez-vous</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
};

export default Reparation;
