import { writable } from 'svelte/store';

const _mousePositionStore = () => {
  const { set, update, subscribe } = writable({
    clientX: 0,
    clientY: 0
  })

  return {
    subscribe,
    hydrate: (clientX: number, clientY: number) => set({ clientX, clientY }),
    update: (clientX: number, clientY: number) => update((currentState) => {
      return { ...currentState, clientX, clientY }
    })
  }
}

export const mousePositionStore = _mousePositionStore();