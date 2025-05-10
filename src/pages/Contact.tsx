
import React from 'react';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };
  
  return (
    <ClientLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-mecano-blue">Contactez-nous</h1>
          <p className="text-muted-foreground">
            Une question ? Un problème ? N'hésitez pas à nous contacter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Formulaire de contact</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">Prénom</label>
                      <Input id="firstName" placeholder="Votre prénom" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Nom</label>
                      <Input id="lastName" placeholder="Votre nom" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                    <Input id="subject" placeholder="Sujet de votre message" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Détaillez votre demande ici..." 
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="bg-mecano-blue hover:bg-mecano-blue/90">
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Nos coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-mecano-blue/10 p-2 rounded-md">
                    <MapPin className="h-5 w-5 text-mecano-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <address className="not-italic text-sm text-muted-foreground">
                      123 Rue de l'Automobile<br />
                      75001 Paris, France
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-mecano-blue/10 p-2 rounded-md">
                    <Phone className="h-5 w-5 text-mecano-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href="tel:+33123456789" className="hover:text-mecano-blue">
                        01 23 45 67 89
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-mecano-blue/10 p-2 rounded-md">
                    <Mail className="h-5 w-5 text-mecano-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:contact@mecanosuite.fr" className="hover:text-mecano-blue">
                        contact@mecanosuite.fr
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Horaires d'ouverture</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr>
                        <td className="py-1">Lundi - Vendredi</td>
                        <td className="py-1 text-right">8h00 - 19h00</td>
                      </tr>
                      <tr>
                        <td className="py-1">Samedi</td>
                        <td className="py-1 text-right">9h00 - 17h00</td>
                      </tr>
                      <tr>
                        <td className="py-1">Dimanche</td>
                        <td className="py-1 text-right">Fermé</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <img 
                src="https://images.unsplash.com/photo-1637255548580-68d584369fee?w=800&auto=format&fit=crop&q=60" 
                alt="Notre atelier" 
                className="rounded-lg shadow-md w-full h-48 object-cover" 
              />
            </div>
          </div>
        </div>
        
        {/* Map section */}
        <Card className="mt-8">
          <CardContent className="p-0">
            <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&auto=format&fit=crop&q=60" 
                alt="Localisation" 
                className="w-full h-full object-cover" 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </ClientLayout>
  );
};

export default Contact;
