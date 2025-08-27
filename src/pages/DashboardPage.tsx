import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Users, GraduationCap, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import AOS from "aos";

interface UserProfile {
  full_name: string;
  username: string;
  origin?: string;
}

const DashboardPage = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, username, origin")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      setProfile(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };


  const features = [
    {
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
      title: "Beli Batik Asli",
      description: "Jelajahi koleksi batik asli dari berbagai daerah di Indonesia dengan kualitas terjamin.",
      cta: "Mulai Belanja",
      href: "/shop",
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Komunitas Batik",
      description: "Bergabung dengan komunitas pecinta batik, berbagi pengalaman, dan belajar bersama.",
      cta: "Gabung Komunitas",
      href: "/communities",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-accent" />,
      title: "Belajar Tentang Batik",
      description: "Pelajari sejarah, filosofi, dan teknik membatik melalui materi pembelajaran yang lengkap.",
      cta: "Mulai Belajar",
      href: "/learn",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Dashboard BatiX
              </h1>
              {profile && (
                <p className="text-muted-foreground">
                  Selamat datang, {profile.full_name}
                  {profile.origin && ` dari ${profile.origin}`}
                </p>
              )}
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Keluar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Fitur Utama
          </h2>
          <p className="text-lg text-muted-foreground">
            Nikmati berbagai fitur yang tersedia untuk memperkaya pengalaman Anda dengan batik Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6 text-base">
                  {feature.description}
                </CardDescription>
                <Button variant="contact" className="w-full">
                  {feature.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16" data-aos="fade-up">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Akun</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
                {profile?.username && (
                  <div>
                    <p className="font-medium">Username:</p>
                    <p className="text-muted-foreground">@{profile.username}</p>
                  </div>
                )}
                <div>
                  <p className="font-medium">Member sejak:</p>
                  <p className="text-muted-foreground">
                    {new Date(user.created_at).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                {profile?.origin && (
                  <div>
                    <p className="font-medium">Asal:</p>
                    <p className="text-muted-foreground">{profile.origin}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;