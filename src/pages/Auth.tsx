
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { supabase } from '@/integrations/supabase/client';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const isRegister = searchParams.get('register') === 'true';
  const [formType, setFormType] = useState<'login' | 'register'>(isRegister ? 'register' : 'login');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/');
      }
    };
    
    checkSession();
  }, [navigate]);
  
  useEffect(() => {
    setFormType(isRegister ? 'register' : 'login');
  }, [isRegister]);
  
  const toggleForm = () => {
    const newFormType = formType === 'login' ? 'register' : 'login';
    setFormType(newFormType);
    navigate(`/auth${newFormType === 'register' ? '?register=true' : ''}`, { replace: true });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-mecano-lightgray flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/placeholder.svg" 
              alt="MécanoSuite" 
              className="h-8 w-8" 
            />
            <span className="text-xl font-bold text-mecano-blue">MécanoSuite</span>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <AuthForm type={formType} onToggleForm={toggleForm} />
          </div>
          
          {/* Right: Features */}
          <div className="hidden md:block space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-mecano-dark">Bienvenue sur MécanoSuite</h2>
              <p className="mt-2 text-lg text-mecano-gray">
                La plateforme qui simplifie l'entretien de votre véhicule
              </p>
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=60" 
                alt="Entretien automobile" 
                className="mt-4 rounded-lg shadow-md w-full h-48 object-cover" 
              />
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Suivi en temps réel",
                  description: "Suivez l'avancement des réparations de votre véhicule en temps réel",
                  image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60"
                },
                {
                  title: "Prise de rendez-vous simplifiée",
                  description: "Réservez un créneau en quelques clics selon vos disponibilités",
                  image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&auto=format&fit=crop&q=60"
                },
                {
                  title: "Historique complet",
                  description: "Accédez à l'historique détaillé des interventions sur votre véhicule",
                  image: "https://images.unsplash.com/photo-1590674899484-d5a73134b938?w=800&auto=format&fit=crop&q=60"
                },
                {
                  title: "Communication facilitée",
                  description: "Communiquez directement avec l'équipe de mécaniciens",
                  image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=800&auto=format&fit=crop&q=60"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-mecano-lightgray p-4 rounded-lg flex items-center gap-4">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-mecano-blue">{feature.title}</h3>
                    <p className="text-sm text-mecano-dark mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-mecano-gray">
          <p>&copy; 2025 MécanoSuite - La solution complète pour la gestion d'atelier automobile</p>
        </div>
      </footer>
    </div>
  );
};

export default Auth;
