
import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Clock, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ControleTechnique = () => {
  return (
    <ClientLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-mecano-blue">Contrôle Technique</h1>
          <p className="text-mecano-gray">
            Préparation et accompagnement pour votre contrôle technique
          </p>
        </section>

        {/* Hero Section */}
        <section className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1493134799591-2c9eed26201a?w=800&auto=format&fit=crop&q=60" 
            alt="Contrôle technique" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mecano-blue/80 to-transparent flex items-center">
            <div className="text-white p-8 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Passez votre contrôle technique en toute sérénité</h2>
              <p className="text-blue-100">
                Nous préparons votre véhicule pour maximiser vos chances de réussite au contrôle technique
              </p>
            </div>
          </div>
        </section>

        {/* Services de préparation au contrôle technique */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Nos services de préparation</h3>
          <p className="mb-6">
            Le contrôle technique est une obligation légale pour les véhicules de plus de 4 ans. Pour éviter les mauvaises surprises et les contre-visites, nous vous proposons un service complet de préparation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-mecano-blue">
              <CardHeader>
                <CardTitle>Pré-contrôle technique</CardTitle>
                <CardDescription>
                  Un diagnostic complet avant votre rendez-vous officiel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Nous effectuons un contrôle complet de votre véhicule en suivant les mêmes points de contrôle que les centres agréés.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Identification des points de défaillance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Vérification des 133 points de contrôle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Rapport détaillé des anomalies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Conseils personnalisés</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-mecano-blue/10 rounded flex items-center gap-3">
                  <Clock className="h-5 w-5 text-mecano-blue" />
                  <span>Durée approximative: 45 minutes</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-mecano-blue hover:bg-mecano-blue/90" asChild>
                  <Link to="/rendez-vous/nouveau">Prendre rendez-vous</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle>Réparations pré-contrôle</CardTitle>
                <CardDescription>
                  Correction des défauts identifiés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Suite au pré-contrôle, nous pouvons effectuer les réparations nécessaires pour assurer la réussite de votre contrôle technique.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Devis détaillé des réparations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Interventions priorisées selon les critères du contrôle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Réparations garanties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Second pré-contrôle offert après réparations</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Satisfaction garantie</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Points de contrôle */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Les principaux points de contrôle</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-medium">Freinage (21 points)</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc text-mecano-gray">
                  <li>Efficacité du frein de service et de stationnement</li>
                  <li>État des disques, plaquettes, tambours et mâchoires</li>
                  <li>Étanchéité du circuit de freinage</li>
                  <li>Fonctionnement de l'assistance au freinage</li>
                  <li>État des flexibles et conduites</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-medium">Direction et suspension (16 points)</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc text-mecano-gray">
                  <li>État des amortisseurs</li>
                  <li>Usure des rotules et articulations</li>
                  <li>Jeu dans la direction</li>
                  <li>État des roulements de roues</li>
                  <li>Alignement des essieux</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-medium">Visibilité (15 points)</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc text-mecano-gray">
                  <li>État du pare-brise et des vitres</li>
                  <li>Fonctionnement des essuie-glaces</li>
                  <li>État et réglage des rétroviseurs</li>
                  <li>Niveau du liquide lave-glace</li>
                  <li>Désembuage</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-medium">Éclairage et signalisation (24 points)</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc text-mecano-gray">
                  <li>Fonctionnement des feux de position, croisement et route</li>
                  <li>Fonctionnement des clignotants</li>
                  <li>Fonctionnement des feux stop et de recul</li>
                  <li>État et fixation des blocs optiques</li>
                  <li>Orientation des faisceaux lumineux</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-medium">Pollution et niveau sonore (8 points)</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc text-mecano-gray">
                  <li>Analyse des gaz d'échappement</li>
                  <li>Opacité des fumées (diesel)</li>
                  <li>Étanchéité de la ligne d'échappement</li>
                  <li>Niveau sonore de l'échappement</li>
                  <li>Fuites de liquides (huile, carburant)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* FAQ */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Questions fréquentes</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>À quelle fréquence faut-il passer le contrôle technique ?</AccordionTrigger>
              <AccordionContent>
                <p>Le premier contrôle technique doit être effectué dans les 6 mois qui précèdent le 4ème anniversaire de la date de première mise en circulation du véhicule. Ensuite, le contrôle technique est à renouveler tous les 2 ans.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger>Que faire en cas de contre-visite ?</AccordionTrigger>
              <AccordionContent>
                <p>En cas de contre-visite, vous disposez généralement de 2 mois pour effectuer les réparations nécessaires et repasser le contrôle. Nous pouvons vous accompagner pour réaliser ces réparations rapidement et vous garantir la réussite de votre contre-visite.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger>Est-ce que vous effectuez les contrôles techniques ?</AccordionTrigger>
              <AccordionContent>
                <p>Non, nous ne sommes pas un centre de contrôle technique agréé. Nous proposons des services de pré-contrôle et de préparation pour maximiser vos chances de réussite lors du passage dans un centre agréé. Nous pouvons vous recommander des centres partenaires à proximité.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4">
              <AccordionTrigger>Combien de temps avant le contrôle dois-je faire le pré-contrôle ?</AccordionTrigger>
              <AccordionContent>
                <p>Nous recommandons de faire le pré-contrôle environ 3 à 4 semaines avant la date limite de votre contrôle technique. Cela vous laisse suffisamment de temps pour effectuer les éventuelles réparations nécessaires sans être pressé par le temps.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Défauts à surveiller */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Les défauts les plus courants</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Défauts critiques",
                description: "Ces défauts entraînent une interdiction de circuler",
                items: [
                  "Pneumatiques très usés ou endommagés",
                  "Freins défaillants",
                  "Fuites importantes de liquide de frein",
                  "Direction défectueuse",
                  "Éléments de carrosserie dangereux"
                ],
                icon: <AlertTriangle className="h-6 w-6 text-red-500" />
              },
              {
                title: "Défauts majeurs",
                description: "Ces défauts nécessitent une contre-visite",
                items: [
                  "Éclairage défaillant ou mal réglé",
                  "Usure importante des plaquettes de frein",
                  "Jeu excessif dans la direction ou la suspension",
                  "Émissions polluantes trop élevées",
                  "Pare-brise fissuré dans le champ de vision"
                ],
                icon: <AlertTriangle className="h-6 w-6 text-orange-500" />
              }
            ].map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-3">
                  {category.icon}
                  <div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1">•</div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-mecano-blue/10 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-mecano-blue">Contrôle technique bientôt ?</h3>
              <p className="text-mecano-gray">Anticipez et préparez votre véhicule pour éviter les mauvaises surprises</p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-mecano-blue hover:bg-mecano-blue/90" asChild>
                <Link to="/rendez-vous/nouveau">Pré-contrôle technique</Link>
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

export default ControleTechnique;
