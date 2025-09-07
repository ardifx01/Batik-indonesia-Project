import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ShoppingSidebar } from "@/components/ShoppingSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

const CartPage = () => {
  const { user, loading: authLoading } = useAuth();
  const { cartItems, loading, updateCartItem, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (cartItemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateCartItem(cartItemId, newQuantity);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    navigate("/checkout");
  };

  if (authLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <ShoppingSidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Keranjang Belanja</h1>
              <p className="text-muted-foreground">
                Kelola produk yang ingin Anda beli
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p>Memuat keranjang...</p>
              </div>
            ) : cartItems.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground mb-4">Keranjang Anda kosong</p>
                  <Button onClick={() => navigate("/beli-batik")}>
                    Mulai Belanja
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Daftar Produk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="w-20 h-20 flex-shrink-0">
                            {item.products.image_url ? (
                              <img
                                src={item.products.image_url}
                                alt={item.products.name}
                                className="w-full h-full object-cover rounded"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted rounded flex items-center justify-center">
                                <span className="text-xs text-muted-foreground">No Image</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-semibold">{item.products.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Rp {item.products.price.toLocaleString("id-ID")}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                              className="w-20 text-center"
                              min="1"
                              max={item.products.stock_quantity}
                            />
                            
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              disabled={item.quantity >= item.products.stock_quantity}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <p className="font-semibold">
                              Rp {(item.products.price * item.quantity).toLocaleString("id-ID")}
                            </p>
                          </div>
                          
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-xl font-bold mb-4">
                      <span>Total:</span>
                      <span>Rp {getCartTotal().toLocaleString("id-ID")}</span>
                    </div>
                    
                    <Button onClick={handleCheckout} className="w-full" size="lg">
                      Checkout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default CartPage;