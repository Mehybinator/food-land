import { writable, type Writable } from "svelte/store";
import type { Auth } from "$lib/customInterfaces";
import { browser } from "$app/environment";

export const auth: Writable<Auth | null> = writable(null)

if(browser) {
    const isAuth = localStorage.getItem("auth");

    if(isAuth){
        auth.set(JSON.parse(isAuth));
    }
    
    auth.subscribe(value => {
        localStorage.setItem('auth', JSON.stringify(value));
    });
}