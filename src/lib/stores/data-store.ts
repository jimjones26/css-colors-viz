import { writable } from 'svelte/store';

const _dataStore = () => {
  const { set, update, subscribe } = writable({
    csvData: '',
  })

  return {
    subscribe,
    set: (data: string) => set({ csvData: data }),
    update: (text: string) => update((currentState: any) => {
      const newCsvData = currentState.csvData.concat(text.toString())
      return { csvData: newCsvData }

    })
  }
}

export const dataStore = _dataStore();