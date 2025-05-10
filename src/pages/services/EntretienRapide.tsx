
import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Tag, Wrench } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const EntretienRapide = () => {
  return (
    <ClientLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-mecano-blue">Entretien Rapide</h1>
          <p className="text-mecano-gray">
            Des prestations essentielles réalisées rapidement et sans rendez-vous
          </p>
        </section>

        {/* Hero Section */}
        <section className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&auto=format&fit=crop&q=60" 
            alt="Entretien rapide automobile" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mecano-blue/80 to-transparent flex items-center">
            <div className="text-white p-8 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Services express sans rendez-vous</h2>
              <p className="text-blue-100">
                Des interventions rapides et efficaces pour maintenir votre véhicule en bon état sans perturber votre emploi du temps
              </p>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Sans rendez-vous",
              description: "Venez quand vous le souhaitez pendant nos heures d'ouverture",
              icon: <Clock className="h-10 w-10 text-mecano-blue" />
            },
            {
              title: "Interventions rapides",
              description: "La plupart de nos prestations sont réalisées en moins d'une heure",
              icon: <Wrench className="h-10 w-10 text-mecano-blue" />
            },
            {
              title: "Prix transparents",
              description: "Tarifs fixes et affichés pour toutes nos prestations d'entretien rapide",
              icon: <Tag className="h-10 w-10 text-mecano-blue" />
            }
          ].map((advantage, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-mecano-gray">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Nos prestations */}
        <section>
          <h3 className="text-xl font-semibold mb-6">Nos prestations d'entretien rapide</h3>
          
          <div className="rounded-lg overflow-hidden border">
            <Table>
              <TableHeader>
                <TableRow className="bg-mecano-blue/10">
                  <TableHead className="w-[300px]">Prestation</TableHead>
                  <TableHead>Délai</TableHead>
                  <TableHead>Prix indicatif</TableHead>
                  <TableHead className="text-right">Disponibilité</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    name: "Vidange et filtre à huile",
                    duration: "30-45 min",
                    price: "À partir de 89€",
                    available: true
                  },
                  {
                    name: "Remplacement filtre à air",
                    duration: "15-20 min",
                    price: "À partir de 35€",
                    available: true
                  },
                  {
                    name: "Remplacement filtre d'habitacle",
                    duration: "20-30 min",
                    price: "À partir de 45€",
                    available: true
                  },
                  {
                    name: "Plaquettes de frein avant",
                    duration: "45-60 min",
                    price: "À partir de 99€",
                    available: true
                  },
                  {
                    name: "Plaquettes de frein arrière",
                    duration: "45-60 min",
                    price: "À partir de 89€",
                    available: true
                  },
                  {
                    name: "Liquide de frein",
                    duration: "30 min",
                    price: "À partir de 59€",
                    available: true
                  },
                  {
                    name: "Batterie",
                    duration: "20-30 min",
                    price: "À partir de 129€",
                    available: true
                  },
                  {
                    name: "Balais d'essuie-glace",
                    duration: "10 min",
                    price: "À partir de 39€",
                    available: true
                  },
                  {
                    name: "Ampoules",
                    duration: "15-30 min",
                    price: "À partir de 25€",
                    available: true
                  },
                  {
                    name: "Diagnostic électronique",
                    duration: "30 min",
                    price: "49€",
                    available: true
                  }
                ].map((service, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-mecano-gray" />
                      <span>{service.duration}</span>
                    </TableCell>
                    <TableCell>{service.price}</TableCell>
                    <TableCell className="text-right">
                      {service.available ? (
                        <Badge className="bg-green-500 hover:bg-green-600">Disponible</Badge>
                      ) : (
                        <Badge variant="secondary">Sur rendez-vous</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4 text-sm text-mecano-gray">
            <p>* Les prix peuvent varier en fonction du modèle et de la marque de votre véhicule</p>
            <p>* Pièces et main d'œuvre comprises dans les tarifs indiqués</p>
          </div>
        </section>

        {/* Forfaits */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Nos forfaits combinés</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Forfait Vidange",
                description: "L'entretien de base indispensable",
                price: "À partir de 89€",
                items: [
                  "Vidange moteur",
                  "Filtre à huile",
                  "Points de contrôle sécurité",
                  "Remise à zéro témoins"
                ],
                duration: "45 minutes",
                highlight: false
              },
              {
                title: "Forfait Entretien Essentiel",
                description: "Le plus populaire",
                price: "À partir de 169€",
                items: [
                  "Vidange moteur",
                  "Filtre à huile",
                  "Filtre à air",
                  "Filtre d'habitacle",
                  "30 points de contrôle"
                ],
                duration: "1h15",
                highlight: true
              },
              {
                title: "Forfait Sécurité",
                description: "Pour rouler en toute sécurité",
                price: "À partir de 199€",
                items: [
                  "Plaquettes avant",
                  "Liquide de frein",
                  "Contrôle système de freinage",
                  "Test des amortisseurs"
                ],
                duration: "1h30",
                highlight: false
              }
            ].map((plan, index) => (
              <Card key={index} className={plan.highlight ? "border-mecano-blue shadow-md" : ""}>
                <CardHeader className={plan.highlight ? "bg-mecano-blue text-white" : ""}>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription className={plan.highlight ? "text-blue-100" : ""}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-2xl font-bold mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 mt-4 text-sm text-mecano-gray">
                    <Clock className="h-4 w-4" />
                    <span>{plan.duration}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.highlight ? "default" : "outline"} 
                    className={`w-full ${plan.highlight ? "bg-mecano-blue hover:bg-mecano-blue/90" : ""}`}
                    asChild
                  >
                    <Link to="/rendez-vous/nouveau">Réserver</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Comment ça fonctionne</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "1. Arrivez sans rendez-vous",
                description: "Présentez-vous à l'atelier aux heures d'ouverture"
              },
              {
                title: "2. Diagnostic rapide",
                description: "Un technicien évalue votre besoin et vérifie la disponibilité"
              },
              {
                title: "3. Devis immédiat",
                description: "Nous vous proposons un prix fixe avant intervention"
              },
              {
                title: "4. Intervention rapide",
                description: "Votre véhicule est pris en charge immédiatement"
              }
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mecano-gray">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
            <div className="mt-1">
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="font-medium text-yellow-800">Conseil</p>
              <p className="text-yellow-700">Pour minimiser votre temps d'attente, nous vous recommandons d'éviter les heures de pointe (12h-14h et après 17h). Les matinées sont généralement plus calmes.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-mecano-blue/10 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-mecano-blue">Besoin d'un entretien rapide ?</h3>
              <p className="text-mecano-gray">Passez nous voir ou réservez un créneau pour être prioritaire</p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-mecano-blue hover:bg-mecano-blue/90" asChild>
                <Link to="/rendez-vous/nouveau">Réserver un créneau</Link>
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

export default EntretienRapide;
