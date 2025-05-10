
import MainLayout from "@/components/layout/MainLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentActivities from "@/components/dashboard/RecentActivities";
import AppointmentCalendar from "@/components/dashboard/AppointmentCalendar";

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-mecano-blue">Tableau de bord</h1>
          <p className="text-muted-foreground">Bienvenue dans votre espace MécanoSuite</p>
        </div>
        
        <DashboardStats />
        
        <div className="grid gap-6 md:grid-cols-2">
          <RecentActivities />
          <AppointmentCalendar />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
