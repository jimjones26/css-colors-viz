import { writable } from 'svelte/store';

const _dataStore = () => {
  const { set, update, subscribe } = writable({
    csvData: [{}],
  })

  return {
    subscribe,
    set: (data: Array<object>) => set({ csvData: data }),
    update: (item: Object) => update((currentState: any) => {
      currentState.csvData.push(item)
      return { ...currentState }
    })
  }
}

export const dataStore = _dataStore();