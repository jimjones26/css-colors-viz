import { writable } from 'svelte/store';

const _dataStore = () => {
  const { set, update, subscribe } = writable({
    csvData: '',
  })

  return {
    subscribe,
    set: (data: string) => set({ csvData: data })
  }
}

export const dataStore = _dataStore();