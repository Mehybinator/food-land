import { writable, type Writable } from "svelte/store";
import type { Auth } from "$lib/customInterfaces";

export const auth: Writable<Auth | null> = writable(null)

const isAuth = localStorage.getItem("auth");

if(isAuth){
    auth.set(JSON.parse(isAuth));
}

auth.subscribe(value => {
    localStorage.setItem('auth', JSON.stringify(value));
});