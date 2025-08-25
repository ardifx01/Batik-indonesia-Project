-- Create profiles table for additional user information
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  birth_date DATE,
  origin TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create products table for batik products
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  origin TEXT NOT NULL,
  image_url TEXT,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  category TEXT NOT NULL DEFAULT 'batik',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create communities table
CREATE TABLE public.communities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  location TEXT,
  member_count INTEGER NOT NULL DEFAULT 0,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create materials table for learning content
CREATE TABLE public.materials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  type TEXT NOT NULL DEFAULT 'article', -- article, video, tutorial
  difficulty_level TEXT NOT NULL DEFAULT 'beginner', -- beginner, intermediate, advanced
  duration_minutes INTEGER,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.communities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.materials ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (true);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create policies for products (public read access)
CREATE POLICY "Anyone can view products" 
ON public.products 
FOR SELECT 
USING (true);

-- Create policies for communities (public read access)
CREATE POLICY "Anyone can view communities" 
ON public.communities 
FOR SELECT 
USING (true);

-- Create policies for materials (public read access)
CREATE POLICY "Anyone can view materials" 
ON public.materials 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_communities_updated_at
  BEFORE UPDATE ON public.communities
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_materials_updated_at
  BEFORE UPDATE ON public.materials
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data for products
INSERT INTO public.products (name, description, price, origin, stock_quantity) VALUES
('Batik Parang Klasik', 'Motif parang tradisional dari Yogyakarta dengan filosofi tidak pernah putus asa', 450000, 'Yogyakarta', 15),
('Batik Megamendung Cirebon', 'Motif awan yang melambangkan ketenangan dan kesabaran', 380000, 'Cirebon', 20),
('Batik Kawung Solo', 'Motif kawung yang melambangkan kesucian dan pengendalian diri', 520000, 'Solo', 12),
('Batik Tujuh Rupa Pekalongan', 'Batik pesisir dengan warna-warna cerah khas Pekalongan', 350000, 'Pekalongan', 18);

-- Insert sample data for communities
INSERT INTO public.communities (name, description, location, member_count) VALUES
('Komunitas Batik Nusantara', 'Komunitas pecinta batik dari seluruh Indonesia', 'Jakarta', 1500),
('Sanggar Batik Tradisional', 'Tempat belajar dan berkreasi membuat batik tradisional', 'Yogyakarta', 450),
('Paguyuban Batik Modern', 'Komunitas pengembang batik dengan sentuhan modern', 'Bandung', 720),
('Kelompok Batik Ramah Lingkungan', 'Fokus pada batik dengan bahan dan proses yang eco-friendly', 'Solo', 380);

-- Insert sample data for materials
INSERT INTO public.materials (title, description, content, type, difficulty_level, duration_minutes) VALUES
('Sejarah Batik Indonesia', 'Mengenal asal-usul dan perkembangan batik di Indonesia', 'Batik merupakan warisan budaya Indonesia yang telah diakui UNESCO...', 'article', 'beginner', 15),
('Filosofi Motif Parang', 'Memahami makna mendalam di balik motif parang', 'Motif parang melambangkan kekuatan dan keteguhan...', 'article', 'intermediate', 20),
('Tutorial Membatik untuk Pemula', 'Langkah-langkah dasar membuat batik tulis', 'Tahap pertama dalam membatik adalah menyiapkan kain...', 'tutorial', 'beginner', 45),
('Teknik Pewarnaan Batik Alami', 'Menggunakan bahan alami untuk mewarnai batik', 'Pewarnaan alami menggunakan kulit pohon, daun, dan buah...', 'tutorial', 'advanced', 60);