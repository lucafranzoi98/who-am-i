import { create } from "zustand"

const useStore = create((set, get) => ({
   phase: 0,
   nextPhase: () => set(state => ({ phase: state.phase + 1 })),

   isFading: true,
   setFading: (value) => set({ isFading: value }),

   introPhase: 0,
   maxIntroPhase: 4,
   nextIntroPhase: () => set(state => ({ introPhase: state.introPhase + 1 })),

   creationPhase: 0,
   maxCreationPhase: 6,
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
   uColorBaseMin: 0,
   uColorBaseMax: 1,
   uColorBase: 0.5,
   setColorBase: (value) => set({ uColorBase: value }),
   uColorBaseLight: 1.0,
   setColorBaseLight: (value) => set({ uColorBaseLight: value }),

   // Color Middle
   uColorMiddleMin: 0,
   uColorMiddleMax: 1,
   uColorMiddle: 0.5,
   setColorMiddle: (value) => set({ uColorMiddle: value }),
   uColorMiddleLight: 1.0,
   setColorMiddleLight: (value) => set({ uColorMiddleLight: value }),

   // Color Top
   uColorTopMin: 0,
   uColorTopMax: 1,
   uColorTop: 0.5,
   setColorTop: (value) => set({ uColorTop: value }),
   uColorTopLight: 1.0,
   setColorTopLight: (value) => set({ uColorTopLight: value }),

   // Roughness
   uRoughnessMin: 0,
   uRoughnessMax: 1,
   uRoughness: (0 + 1) / 2,
   setRoughness: (value) => set({ uRoughness: value }),

   // Glow
   uGlowMin: 0,
   uGlowMax: 0.10,
   uGlow: 0,
   setGlow: (value) => set({ uGlow: value }),

   restart: () => set({
      phase: 0,
      introPhase: 0,
      creationPhase: 0,
      uStrength: 0.0,
      uSpeed: (0.1 + 1.5) / 2,
      uColorBase: 0.5,
      uColorBaseLight: 1.0,
      uColorMiddle: 0.5,
      uColorMiddleLight: 1.0,
      uColorTop: 0.5,
      uColorTopLight: 1.0,
      uRoughness: (0 + 1) / 2,
      uGlow: 0
   }),

}))

export default useStore