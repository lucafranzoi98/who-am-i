import { create } from "zustand"

const uSpeedMin = 0.1
const uSpeedMax = 1.5
const uSpeedDefault = (uSpeedMin + uSpeedMax) / 2

const uStrengthMin = 0.1
const uStrengthMax = 1
const uStrengthDefault = (uStrengthMin + uStrengthMax) / 2

const uColorBaseMin = 0
const uColorBaseMax = 1
const uColorBaseDefault = (uColorBaseMin + uColorBaseMax) / 2
const uColorBaseLightDefault = 1.0

const uColorMiddleMin = 0
const uColorMiddleMax = 1
const uColorMiddleDefault = (uColorMiddleMin + uColorMiddleMax) / 2
const uColorMiddleLightDefault = 1.0

const uColorTopMin = 0
const uColorTopMax = 1
const uColorTopDefault = (uColorTopMin + uColorTopMax) / 2
const uColorTopLightDefault = 1.0

const uRoughnessMin = 0
const uRoughnessMax = 1
const uRoughnessDefault = 0.3

const uGlowMin = 0
const uGlowMax = 0.25
const uGlowDefault = 0.001

const useStore = create((set) => ({
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

   // Speed
   uSpeedMin,
   uSpeedMax,
   uSpeedDefault,
   uSpeed: uSpeedDefault,
   setSpeed: (value) => set({ uSpeed: value }),

   // Strength
   uStrengthMin,
   uStrengthMax,
   uStrengthDefault,
   uStrength: 0,
   setStrength: (value) => set({ uStrength: value }),

   // Color Base
   uColorBaseMin,
   uColorBaseMax,
   uColorBaseDefault,
   uColorBase: uColorBaseDefault,
   setColorBase: (value) => set({ uColorBase: value }),
   uColorBaseLightDefault,
   uColorBaseLight: uColorBaseLightDefault,
   setColorBaseLight: (value) => set({ uColorBaseLight: value }),

   // Color Middle
   uColorMiddleMin,
   uColorMiddleMax,
   uColorMiddleDefault,
   uColorMiddle: uColorMiddleDefault,
   setColorMiddle: (value) => set({ uColorMiddle: value }),
   uColorMiddleLightDefault,
   uColorMiddleLight: uColorMiddleLightDefault,
   setColorMiddleLight: (value) => set({ uColorMiddleLight: value }),

   // Color Top
   uColorTopMin,
   uColorTopMax,
   uColorTopDefault,
   uColorTop: uColorTopDefault,
   setColorTop: (value) => set({ uColorTop: value }),
   uColorTopLightDefault,
   uColorTopLight: uColorTopLightDefault,
   setColorTopLight: (value) => set({ uColorTopLight: value }),

   // Roughness
   uRoughnessMin,
   uRoughnessMax,
   uRoughnessDefault,
   uRoughness: uRoughnessDefault,
   setRoughness: (value) => set({ uRoughness: value }),

   // Glow
   uGlowMin,
   uGlowMax,
   uGlowDefault,
   uGlow: uGlowDefault,
   setGlow: (value) => set({ uGlow: value }),

   restart: () => set({
      phase: 0,
      introPhase: 0,
      creationPhase: 0,
      uSpeed: uSpeedDefault,
      uStrength: 0,
      uColorBase: uColorBaseDefault,
      uColorBaseLight: uColorBaseLightDefault,
      uColorMiddle: uColorMiddleDefault,
      uColorMiddleLight: uColorMiddleLightDefault,
      uColorTop: uColorTopDefault,
      uColorTopLight: uColorTopLightDefault,
      uRoughness: uRoughnessDefault,
      uGlow: uGlowDefault
   }),

}))

export default useStore