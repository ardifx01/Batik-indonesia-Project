import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ShoppingSidebar } from "@/components/ShoppingSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface Order {
  id: string;
  order_number: string;
  total_amount: number;
  status: string;
  created_at: string;
  shipping_address: string;
  phone_number: string;
  payment_method: string;
  order_items: {
    id: string;
    quantity: number;
    price_at_time: number;
    products: {
      id: string;
      name: string;
      image_url: string | null;
    };
  }[];
}

const OrdersPage = () => {
  const { user, loading: authLoading } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select(`
          id,
          order_number,
          total_amount,
          status,
          created_at,
          shipping_address,
          phone_number,
          payment_method,
          order_items (
            id,
            quantity,
            price_at_time,
            products (
              id,
              name,
              image_url
            )
          )
        `)
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      diproses: { label: "Diproses", variant: "default" as const },
      dikirim: { label: "Dikirim", variant: "secondary" as const },
      selesai: { label: "Selesai", variant: "default" as const },
      dibatalkan: { label: "Dibatalkan", variant: "destructive" as const },
    };

    const statusInfo = statusMap[status as keyof typeof statusMap] || statusMap.diproses;
    
    return (
      <Badge variant={statusInfo.variant}>
        {statusInfo.label}
      </Badge>
    );
  };

  const getPaymentMethodLabel = (method: string) => {
    const methodMap = {
      transfer_bank: "Transfer Bank",
      e_wallet: "E-Wallet",
      kartu_kredit: "Kartu Kredit/Debit",
    };

    return methodMap[method as keyof typeof methodMap] || method;
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
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Riwayat Pembelian</h1>
              <p className="text-muted-foreground">
                Pantau status pesanan dan riwayat pembelian Anda
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p>Memuat riwayat pesanan...</p>
              </div>
            ) : orders.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground">Belum ada riwayat pembelian</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          Pesanan #{order.order_number}
                        </CardTitle>
                        {getStatusBadge(order.status)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>Tanggal: {new Date(order.created_at).toLocaleDateString("id-ID")}</p>
                        <p>Pembayaran: {getPaymentMethodLabel(order.payment_method)}</p>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Produk:</h4>
                          <div className="space-y-2">
                            {order.order_items.map((item) => (
                              <div key={item.id} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                                <div className="w-12 h-12 flex-shrink-0">
                                  {item.products.image_url ? (
                                    <img
                                      src={item.products.image_url}
                                      alt={item.products.name}
                                      className="w-full h-full object-cover rounded"
                                    />
                                  ) : (
                                    <div className="w-full h-full bg-muted-foreground rounded flex items-center justify-center">
                                      <span className="text-xs text-muted">No Image</span>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="flex-1">
                                  <p className="font-medium">{item.products.name}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {item.quantity} x Rp {item.price_at_time.toLocaleString("id-ID")}
                                  </p>
                                </div>
                                
                                <div className="text-right">
                                  <p className="font-semibold">
                                    Rp {(item.price_at_time * item.quantity).toLocaleString("id-ID")}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-lg font-bold border-t pt-4">
                          <span>Total:</span>
                          <span>Rp {order.total_amount.toLocaleString("id-ID")}</span>
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          <p><strong>Alamat Pengiriman:</strong> {order.shipping_address}</p>
                          <p><strong>No. HP:</strong> {order.phone_number}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default OrdersPage;