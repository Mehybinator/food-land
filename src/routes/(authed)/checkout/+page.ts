import type { PageLoad } from '../../$types';
import { auth } from '$lib/stores/auth';
import { get } from 'svelte/store';
import type { CartResponse, CartResponsItem } from '$lib/customInterfaces'

export const load: PageLoad = async ({ fetch }) => {
  const $auth = get(auth);
  if($auth){
    const res = await fetch(`http://foodland.somee.com/api/Cart`,
        {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${$auth.token}`
            }
        }
      );
      const data = await res.json();
      const returnData: CartResponse = {
        items: data.items.map((item: CartResponsItem) => ({
          ...item,
          id: item.foodId
        })),
        totalPrice: data.totalPrice
      }
    
      return { cart: returnData };
  }
};
