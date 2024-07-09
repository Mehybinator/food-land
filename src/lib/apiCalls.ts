import { get } from "svelte/store";
import { auth } from "./stores/auth";

export async function addToFavorites(id: number): Promise<{status: boolean, msg: string}> {
  const $auth = get(auth);
  if($auth){
    try {
      const response = await fetch("http://foodland.somee.com/api/Favorites", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$auth.token}`
        },
        body: JSON.stringify(id)
      });
  
      if (!response.ok) return({status: false, msg:'Adding failed'});
  
      const data = await response.json();
      
      auth.update((value) => {
        if (value) {
          return {
            ...value,
            favorites: [...value.favorites, data]
          };
        }
        return value;
      });
  
      return ({status: true, msg:''});
  
    } catch (error) {
  
      return ({status: false, msg:'err'});
      
    }  
  }
  return ({status: false, msg:'Not authorized'});
}

export async function removeFromFavorites(id: number): Promise<{status: boolean, msg: string}> {
  const $auth = get(auth);
  if($auth){
    try {
      const response = await fetch("http://foodland.somee.com/api/Favorites", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$auth.token}`
        },
        body: JSON.stringify(id)
      });

      if (!response.ok) return({status: false, msg:'Removing failed'});
      
      auth.update((value) => {
        if (value) {
          return {
            ...value,
            favorites: value.favorites.filter((favorite) => favorite.id !== id)
          };
        }
        return value;
      });

      return ({status: true, msg:''});

    } catch (error) {

      return ({status: false, msg:'err'});
      
    }
  }
  return ({status: false, msg:'Not authorized'});
}

export async function addToCart(id: number): Promise<{status: boolean, msg: string}> {
  const $auth = get(auth);
  if($auth){
    try {
      const response = await fetch("http://foodland.somee.com/api/Cart", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$auth.token}`
        },
        body: JSON.stringify(id)
      });

      if (!response.ok) return({status: false, msg:'Adding failed'});

      const data = await response.json();

      auth.update((value) => {
        if (value) {
          const existingItem = value.cart.cartItems.find((cartItem) => cartItem.foodId === id);
          if (existingItem) {
            return {
              ...value,
              cart: {
                cartItems: value.cart.cartItems.map((cartItem) =>
                  cartItem.foodId === data.foodId ? data : cartItem
                ),
                cartCount: value.cart.cartCount + 1
              }
            };
          } else {
            return {
              ...value,
              cart: {
                cartItems: [...value.cart.cartItems, data],
                cartCount: value.cart.cartCount + 1
              }
            };
          }
        }
        return value;
      });

      return ({status: true, msg:''});

    } catch (error) {

      return ({status: false, msg:'err'});
      
    }
  }
  return ({status: false, msg:'Not authorized'});
}

export async function removeFromCart(id: number): Promise<{status: boolean, msg: string}> {
  const $auth = get(auth);
  if($auth){
    try {
      const response = await fetch("http://foodland.somee.com/api/Cart", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$auth.token}`
        },
        body: JSON.stringify(id)
      });

      if (!response.ok) return({status: false, msg:'Removing failed'});

      auth.update((value) => {
        if (value) {
          const existingItem = value.cart.cartItems.find((cartItem) => cartItem.foodId === id);
          if (existingItem && existingItem.quantity > 1) {
            return {
              ...value,
              cart: {
                cartItems: value.cart.cartItems.map((cartItem) => cartItem.foodId === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem),
                cartCount: value.cart.cartCount - 1
              }
            };
          } else {
            return {
              ...value,
              cart: {
                cartItems: value.cart.cartItems.filter((item) => item.foodId !== id),
                cartCount: value.cart.cartCount - 1
              }
            };
          }
        }
        return value;
      });

      return ({status: true, msg:''});

    } catch (error) {

      return ({status: false, msg:'err'});
      
    }
  }
  return ({status: false, msg:'Not authorized'});
}
