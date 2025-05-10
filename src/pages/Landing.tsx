
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ClientHeader } from '@/components/layout/ClientHeader';
import { 
  Activity, 
  Calendar, 
  Car, 
  CheckCircle, 
  Clock, 
  Shield, 
  SmartphoneCharging, 
  Wrench 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ClientHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mecano-blue to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Gérez vos entretiens auto en toute simplicité
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              MécanoSuite simplifie la relation entre vous et votre garagiste
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-mecano-blue hover:bg-blue-50" asChild>
                <Link to="/auth?register=true">S'inscrire</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800" asChild>
                <Link to="/auth">Se connecter</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&auto=format&fit=crop&q=80" 
              alt="Un mécanicien travaillant sur une voiture" 
              className="max-h-96 rounded-lg shadow-lg object-cover" 
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mecano-dark">Pourquoi choisir MécanoSuite ?</h2>
            <p className="text-lg text-mecano-gray mt-2">
              Une expérience unique pour l'entretien de votre véhicule
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-10 w-10 text-mecano-blue" />,
                title: "Rendez-vous en ligne",
                description: "Planifiez vos entretiens auto selon vos disponibilités en quelques clics seulement."
              },
              {
                icon: <Activity className="h-10 w-10 text-mecano-blue" />,
                title: "Suivi en temps réel",
                description: "Suivez l'avancement des travaux sur votre véhicule et recevez des notifications."
              },
              {
                icon: <Clock className="h-10 w-10 text-mecano-blue" />,
                title: "Historique détaillé",
                description: "Accédez à l'historique complet des interventions sur votre véhicule à tout moment."
              },
              {
                icon: <Shield className="h-10 w-10 text-mecano-blue" />,
                title: "Alertes d'entretien",
                description: "Recevez des rappels pour les entretiens périodiques et maintenez votre véhicule en parfait état."
              },
              {
                icon: <SmartphoneCharging className="h-10 w-10 text-mecano-blue" />,
                title: "Application mobile",
                description: "Accédez à vos informations depuis n'importe où grâce à notre application mobile dédiée."
              },
              {
                icon: <Wrench className="h-10 w-10 text-mecano-blue" />,
                title: "Conseils personnalisés",
                description: "Bénéficiez de conseils d'entretien adaptés à votre véhicule et à votre style de conduite."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-mecano-gray">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-mecano-orange to-mecano-red rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à simplifier l'entretien de votre véhicule ?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Rejoignez MécanoSuite dès aujourd'hui et découvrez une nouvelle façon de gérer l'entretien de votre voiture.
            </p>
            <Button size="lg" className="bg-white text-mecano-red hover:bg-blue-50" asChild>
              <Link to="/auth?register=true">Créer un compte gratuit</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mecano-dark">Ce que nos clients disent</h2>
            <p className="text-lg text-mecano-gray mt-2">
              Des milliers de clients satisfaits nous font confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sophie Martin",
                role: "Propriétaire Renault Clio",
                text: "Grâce à MécanoSuite, je peux enfin suivre l'entretien de ma voiture sans stress. Les rappels sont très utiles !"
              },
              {
                name: "Thomas Dubois",
                role: "Propriétaire BMW Série 3",
                text: "Interface intuitive et service client au top. Je recommande à tous les propriétaires de véhicules."
              },
              {
                name: "Émilie Petit",
                role: "Propriétaire Peugeot 208",
                text: "Fini les appels incessants pour savoir où en est ma voiture. Je vois tout en temps réel sur l'application !"
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-green-500 font-medium">Utilisateur vérifié</span>
                  </div>
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-mecano-gray">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mecano-dark">Nos services</h2>
            <p className="text-lg text-mecano-gray mt-2">
              Une gamme complète de services pour votre véhicule
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Car className="h-8 w-8" />,
                title: "Révision complète",
                description: "Entretien périodique selon les préconisations constructeur"
              },
              {
                icon: <Wrench className="h-8 w-8" />,
                title: "Réparation mécanique",
                description: "Diagnostic et réparation de toutes pannes mécaniques"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Services rapides",
                description: "Vidange, plaquettes, filtres, sans rendez-vous"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Contrôle technique",
                description: "Préparation et contre-visite de contrôle technique"
              }
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-mecano-blue mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-sm text-mecano-gray mt-1">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-mecano-blue" asChild>
                    <Link to="/auth">En savoir plus</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-mecano-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="MécanoSuite" 
                  className="h-8 w-8 bg-white rounded-sm" 
                />
                <span className="text-xl font-bold">MécanoSuite</span>
              </div>
              <p className="text-gray-400">
                La solution complète pour la gestion d'atelier automobile et le suivi des entretiens véhicules.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
                <li><Link to="/auth" className="text-gray-400 hover:text-white transition-colors">Se connecter</Link></li>
                <li><Link to="/auth?register=true" className="text-gray-400 hover:text-white transition-colors">S'inscrire</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Révision</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Réparation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contrôle technique</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Entretien rapide</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Nous contacter</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@mecanosuite.fr</li>
                <li>01 23 45 67 89</li>
                <li>123 Rue de l'Automobile<br/>75001 Paris, France</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 MécanoSuite - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
