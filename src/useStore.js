import { create } from "zustand"

const useStore = create((set, get) => ({
   phase: 0,
   nextPhase: () => set(state => ({ phase: state.phase + 1 })),

   isFading: true,
   setFading: (value) => set({isFading: value}),

   introPhase: 0,
   maxIntroPhase: 3,
   nextIntroPhase: () => set(state => ({ introPhase: state.introPhase + 1 })),

   creationPhase: 0,
   maxCreationPhase: 5,
   nextCreationPhase: () => set(state => ({ creationPhase: state.creationPhase + 1 })),

   // Strength
   uStrengthMin: 0.1,
   uStrengthMax: 1.5,
   uStrength: 0,
   setStrength: (value) => set({ uStrength: value }),

   // Speed
   uSpeedMin: 0.1,
   uSpeedMax: 1.5,
   uSpeed: (0.1 + 1.5) / 2,
   setSpeed: (value) => set({ uSpeed: value }),

   // Color Base
   uColorBaseMin: 0.01,
   uColorBaseMax: 0.8,
   uColorBase: 0,
   setColorBase: (value) => set({ uColorBase: value }),
   uColorBaseLightness: 1.0,
   setColorBaseLightness: (value) => set({uColorBaseLightness: value}),
   
   // Color Accent
   uColorAccentMin: 0.1,
   uColorAccentMax: 0.9,
   uColorAccent: 0,
   setColorAccent: (value) => set({ uColorAccent: value }),
   uColorAccentLightness: 1.0,
   setColorAccentLightness: (value) => set({uColorAccentLightness: value}),

   // Roughness
   uRoughnessMin: 0,
   uRoughnessMax: 0.7,
   uRoughness: (0 + 0.7) / 2,
   setRoughness: (value) => set({ uRoughness: value }),

   // Bloom
   uBloomMin: 0,
   uBloomMax: 0.5,
   uBloom: 0,
   setBloom: (value) => set({uBloom: value}),

   restart: () => set({
      phase: 0,
      introPhase: 0,
      creationPhase: 0,
      uStrength: 0.0,
      uSpeed: (0.1 + 1.5) / 2,
      uColorBase: 0,
      uColorBaseLightness: 1.0,
      uColorAccent: 0,
      uColorAccentLightness: 1.0,
      uRoughness: (0 + 0.7) / 2,
      uBloom: 0
   }),   

}))

export default useStore