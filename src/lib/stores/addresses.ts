import { writable, type Writable } from 'svelte/store';
import type { Address } from '$lib/customInterfaces';

const addresses: Writable<Address[]> = writable([]);

export default addresses;
