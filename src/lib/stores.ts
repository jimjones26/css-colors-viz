import { writable } from 'svelte/store';

const _mousePositionStore = () => {
  const { set, update, subscribe } = writable({
    clientX: 0,
    clientY: 0
  })

  return {
    subscribe,
    hydrate: (position: { x: number; y: number; }) => set({ clientX: position.x, clientY: position.y }),
    update: (clientX: number, clientY: number) => update((currentState) => {
      return { ...currentState, clientX, clientY }
    })
  }
}

export const mousePositionStore = _mousePositionStore();