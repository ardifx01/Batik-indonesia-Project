import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import AOS from "aos";

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, signIn, user } = useAuth();
  const navigate = useNavigate();

  // Form states for register
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    birthDate: "",
    origin: "",
  });

  // Form states for login
  const [loginForm, setLoginForm] = useState({
    emailOrUsername: "",
    password: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerForm.fullName || !registerForm.username || !registerForm.email || !registerForm.password) {
      return;
    }

    setIsLoading(true);
    await signUp(registerForm.email, registerForm.password, registerForm.fullName, registerForm.username, registerForm.birthDate, registerForm.origin);
    setIsLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginForm.emailOrUsername || !loginForm.password) {
      return;
    }

    setIsLoading(true);
    const { error } = await signIn(loginForm.emailOrUsername, loginForm.password);
    if (!error) {
      navigate("/");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20 pb-16">
        <div className="max-w-md mx-auto px-6">
          <div className="text-center mb-8" data-aos="fade-up">
            <h1 className="text-3xl font-bold text-foreground mb-2">Selamat Datang di BatiX</h1>
            <p className="text-muted-foreground">Bergabunglah dengan komunitas pecinta batik Indonesia</p>
          </div>

          <Card data-aos="fade-up" data-aos-delay="200">
            <CardHeader>
              <CardTitle>Masuk atau Daftar</CardTitle>
              <CardDescription>Akses fitur lengkap BatiX dengan membuat akun</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Masuk</TabsTrigger>
                  <TabsTrigger value="register">Daftar</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="emailOrUsername">Email </Label>
                      <Input id="emailOrUsername" type="text" placeholder="Masukkan email" value={loginForm.emailOrUsername} onChange={(e) => setLoginForm({ ...loginForm, emailOrUsername: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loginPassword">Password</Label>
                      <Input id="loginPassword" type="password" placeholder="Masukkan password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading} variant="contact">
                      {isLoading ? "Memproses..." : "Masuk"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nama Lengkap *</Label>
                      <Input id="fullName" type="text" placeholder="Masukkan nama lengkap" value={registerForm.fullName} onChange={(e) => setRegisterForm({ ...registerForm, fullName: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username *</Label>
                      <Input id="username" type="text" placeholder="Masukkan username unik" value={registerForm.username} onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="Masukkan email" value={registerForm.email} onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password *</Label>
                      <Input id="password" type="password" placeholder="Masukkan password" value={registerForm.password} onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate">Tanggal Lahir</Label>
                      <Input id="birthDate" type="date" value={registerForm.birthDate} onChange={(e) => setRegisterForm({ ...registerForm, birthDate: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="origin">Asal</Label>
                      <Input id="origin" type="text" placeholder="Masukkan kota asal" value={registerForm.origin} onChange={(e) => setRegisterForm({ ...registerForm, origin: e.target.value })} />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading} variant="contact">
                      {isLoading ? "Memproses..." : "Daftar"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  ← Kembali ke Beranda
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
