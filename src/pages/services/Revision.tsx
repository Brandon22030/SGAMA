
import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Wrench } from 'lucide-react';

const Revision = () => {
  return (
    <ClientLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-mecano-blue">Service de Révision</h1>
          <p className="text-mecano-gray">
            Un entretien régulier pour maintenir votre véhicule en parfait état
          </p>
        </section>

        {/* Hero Section */}
        <section className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60" 
            alt="Révision automobile" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mecano-blue/80 to-transparent flex items-center">
            <div className="text-white p-8 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Gardez votre véhicule en parfaite condition</h2>
              <p className="text-blue-100">
                Nos révisions complètes respectent les préconisations constructeur pour garantir la longévité de votre véhicule
              </p>
            </div>
          </div>
        </section>

        {/* Description détaillée */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Qu'est-ce qu'une révision complète?</h3>
          <p className="mb-4">
            La révision est un entretien périodique recommandé par les constructeurs automobiles. Elle permet de vérifier les points essentiels de votre véhicule pour garantir sa fiabilité, sa sécurité et ses performances optimales.
          </p>
          <p>
            Selon l'âge et le kilométrage de votre véhicule, différents niveaux de révision sont recommandés pour maintenir votre véhicule en bon état et préserver sa valeur.
          </p>
        </section>

        {/* Ce qui est inclus */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Ce qui est inclus dans une révision</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Contrôle des fluides",
                description: "Vérification et remplacement si nécessaire de l'huile moteur, liquide de frein, liquide de refroidissement, etc.",
                icon: <CheckCircle className="h-5 w-5 text-green-500" />
              },
              {
                title: "Filtration",
                description: "Contrôle et remplacement des filtres à huile, à air, à carburant et d'habitacle",
                icon: <CheckCircle className="h-5 w-5 text-green-500" />
              },
              {
                title: "Système de freinage",
                description: "Vérification des plaquettes, disques, étriers et du liquide de frein",
                icon: <CheckCircle className="h-5 w-5 text-green-500" />
              },
              {
                title: "Pneumatiques",
                description: "Contrôle de l'usure, de la pression et permutation si nécessaire",
                icon: <CheckCircle className="h-5 w-5 text-green-500" />
              },
              {
                title: "Système électrique",
                description: "Test de la batterie, des feux et des systèmes électroniques",
                icon: <CheckCircle className="h-5 w-5 text-green-500" />
              },
              {
                title: "Direction et suspension",
                description: "Examen des amortisseurs, rotules et autres composants de suspension",
                icon: <CheckCircle className="h-5 w-5 text-green-500" />
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-mecano-blue">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-mecano-gray">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tarifs */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Nos forfaits de révision</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Révision Simple",
                description: "Idéale pour les entretiens réguliers",
                price: "À partir de 149€",
                details: ["Vidange moteur", "Remplacement filtre à huile", "Vérification 30 points de contrôle"],
                duration: "1h30 environ"
              },
              {
                title: "Révision Complète",
                description: "Recommandée tous les 15 000 km",
                price: "À partir de 249€",
                details: ["Tout le forfait simple", "Remplacement filtres à air et habitacle", "Vérification 40 points de contrôle"],
                duration: "2h environ",
                highlight: true
              },
              {
                title: "Révision Intégrale",
                description: "Pour les véhicules à kilométrage élevé",
                price: "À partir de 349€",
                details: ["Tout le forfait complet", "Remplacement filtre à carburant", "Vérification 50 points de contrôle"],
                duration: "3h environ"
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
                    {plan.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
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
                    <Link to="/rendez-vous/nouveau">Prendre rendez-vous</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-mecano-blue/10 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-mecano-blue">Besoin d'une révision ?</h3>
              <p className="text-mecano-gray">Prenez rendez-vous en ligne rapidement et simplement</p>
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

export default Revision;
