import { create } from "zustand"

const useStore = create(set => ({
   phase: 0,
   nextPhase: () => set(state => ({ phase: state.phase + 1 })),

   introPhase: 0,
   nextIntroPhase: () => set(state => ({ introPhase: state.introPhase + 1 })),

   creationPhase: 0,
   nextCreationPhase: () => set(state => ({ creationPhase: state.creationPhase + 1 })),

   restart: () => set({
      phase: 0,
      introPhase: 0,
      creationPhase: 0,
      uStrength: 0.5,
      uSpeed: 0.1,
      hueColorIn: 0,
      hueColorOut: 0
   }),

   uStrength: 0.5,
   setStrength: (value) => set({ uStrength: value }),

   uSpeed: 0.1,
   setSpeed: (value) => set({ uSpeed: value }),

   hueColorIn: 0,
   setHueColorIn: (value) => set({ hueColorIn: value }),

   hueColorOut: 0,
   setHueColorOut: (value) => set({ hueColorOut: value })
}))

export default useStore