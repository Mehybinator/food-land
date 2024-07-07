import { writable, type Writable } from "svelte/store";
import type { Favorites, User, Auth } from "$lib/customInterfaces";

// export let currentUser: Writable<User | null> = writable(null);
// export let currentFavorites: Writable<Favorites[] | null> = writable(null);

export const auth: Writable<Auth | null> = writable(null)

const isAuth = localStorage.getItem("auth");

if(isAuth){
    auth.set(JSON.parse(isAuth));
}

auth.subscribe(value => {
    localStorage.setItem('auth', JSON.stringify(value));
});

// let userObject = localStorage.getItem('user');
// let favoritesObject = localStorage.getItem('favorites');

// if(userObject){
//     currentUser.set(JSON.parse(userObject));
// }

// if(favoritesObject){
//     currentFavorites.set(JSON.parse(favoritesObject));
// }