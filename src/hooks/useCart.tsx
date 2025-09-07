import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { useToast } from "./use-toast";

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  products: {
    id: string;
    name: string;
    price: number;
    image_url: string | null;
    stock_quantity: number;
  };
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchCartItems = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("cart")
        .select(`
          id,
          product_id,
          quantity,
          products (
            id,
            name,
            price,
            image_url,
            stock_quantity
          )
        `)
        .eq("user_id", user.id);

      if (error) throw error;
      setCartItems(data || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
      toast({
        title: "Error",
        description: "Gagal memuat keranjang belanja",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: string, quantity: number = 1) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Silakan login terlebih dahulu",
        variant: "destructive",
      });
      return false;
    }

    try {
      // Check if item already exists in cart
      const existingItem = cartItems.find(item => item.product_id === productId);
      
      if (existingItem) {
        // Update quantity
        const { error } = await supabase
          .from("cart")
          .update({ quantity: existingItem.quantity + quantity })
          .eq("id", existingItem.id);

        if (error) throw error;
      } else {
        // Add new item
        const { error } = await supabase
          .from("cart")
          .insert({
            user_id: user.id,
            product_id: productId,
            quantity
          });

        if (error) throw error;
      }

      await fetchCartItems();
      toast({
        title: "Berhasil",
        description: "Produk ditambahkan ke keranjang",
      });
      return true;
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast({
        title: "Error",
        description: "Gagal menambahkan ke keranjang",
        variant: "destructive",
      });
      return false;
    }
  };

  const updateCartItem = async (cartItemId: string, quantity: number) => {
    try {
      const { error } = await supabase
        .from("cart")
        .update({ quantity })
        .eq("id", cartItemId);

      if (error) throw error;

      await fetchCartItems();
      toast({
        title: "Berhasil",
        description: "Keranjang diperbarui",
      });
    } catch (error) {
      console.error("Error updating cart:", error);
      toast({
        title: "Error",
        description: "Gagal memperbarui keranjang",
        variant: "destructive",
      });
    }
  };

  const removeFromCart = async (cartItemId: string) => {
    try {
      const { error } = await supabase
        .from("cart")
        .delete()
        .eq("id", cartItemId);

      if (error) throw error;

      await fetchCartItems();
      toast({
        title: "Berhasil",
        description: "Produk dihapus dari keranjang",
      });
    } catch (error) {
      console.error("Error removing from cart:", error);
      toast({
        title: "Error",
        description: "Gagal menghapus dari keranjang",
        variant: "destructive",
      });
    }
  };

  const clearCart = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from("cart")
        .delete()
        .eq("user_id", user.id);

      if (error) throw error;
      setCartItems([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.products.price * item.quantity);
    }, 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    if (user) {
      fetchCartItems();
    } else {
      setCartItems([]);
    }
  }, [user]);

  return {
    cartItems,
    loading,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemCount,
    fetchCartItems,
  };
};