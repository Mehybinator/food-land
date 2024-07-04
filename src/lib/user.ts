import { writable, type Writable } from "svelte/store";
import type { Favorites, User } from "./customInterfaces";

export let currentUser: Writable<User | null> = writable(null);
export let currentFavorites: Writable<Favorites[] | null> = writable(null);

let userObject = localStorage.getItem('user');
let favoritesObject = localStorage.getItem('favorites');

if(userObject){
    currentUser.set(JSON.parse(userObject));
}

if(favoritesObject){
    currentFavorites.set(JSON.parse(favoritesObject));
}