import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ShoppingSidebar } from "@/components/ShoppingSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const CheckoutPage = () => {
  const { user, loading: authLoading } = useAuth();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    shippingAddress: "",
    phoneNumber: "",
    paymentMethod: "",
  });
  const [processing, setProcessing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.shippingAddress || !formData.phoneNumber || !formData.paymentMethod) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua data",
        variant: "destructive",
      });
      return;
    }

    if (cartItems.length === 0) {
      toast({
        title: "Error",
        description: "Keranjang kosong",
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);

    try {
      // Generate order number
      const { data: orderNumberData, error: orderNumberError } = await supabase
        .rpc('generate_order_number');

      if (orderNumberError) throw orderNumberError;

      // Create order
      const { data: orderData, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: user!.id,
          order_number: orderNumberData,
          total_amount: getCartTotal(),
          shipping_address: formData.shippingAddress,
          phone_number: formData.phoneNumber,
          payment_method: formData.paymentMethod,
          status: "diproses",
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = cartItems.map(item => ({
        order_id: orderData.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price_at_time: item.products.price,
      }));

      const { error: orderItemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (orderItemsError) throw orderItemsError;

      // Clear cart
      await clearCart();

      toast({
        title: "Berhasil",
        description: `Pesanan ${orderNumberData} berhasil dibuat`,
      });

      navigate("/orders");
    } catch (error) {
      console.error("Error processing order:", error);
      toast({
        title: "Error",
        description: "Gagal memproses pesanan",
        variant: "destructive",
      });
    } finally {
      setProcessing(false);
    }
  };

  if (authLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <ShoppingSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Checkout</h1>
              <p className="text-muted-foreground">
                Lengkapi data pengiriman dan pembayaran
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Data Pengiriman & Pembayaran</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="address">Alamat Pengiriman</Label>
                      <Textarea
                        id="address"
                        placeholder="Masukkan alamat lengkap..."
                        value={formData.shippingAddress}
                        onChange={(e) => handleInputChange("shippingAddress", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Nomor HP</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="payment">Metode Pembayaran</Label>
                      <Select
                        value={formData.paymentMethod}
                        onValueChange={(value) => handleInputChange("paymentMethod", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih metode pembayaran" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transfer_bank">Transfer Bank</SelectItem>
                          <SelectItem value="e_wallet">E-Wallet</SelectItem>
                          <SelectItem value="kartu_kredit">Kartu Kredit/Debit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={processing}
                    >
                      {processing ? "Memproses..." : "Bayar Sekarang"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ringkasan Pesanan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{item.products.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.quantity} x Rp {item.products.price.toLocaleString("id-ID")}
                          </p>
                        </div>
                        <p className="font-semibold">
                          Rp {(item.products.price * item.quantity).toLocaleString("id-ID")}
                        </p>
                      </div>
                    ))}
                    
                    <hr />
                    
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span>Rp {getCartTotal().toLocaleString("id-ID")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default CheckoutPage;