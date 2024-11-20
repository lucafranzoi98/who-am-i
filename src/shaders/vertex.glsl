#include ./simplexNoise4d.glsl
#include ./hslToRgb.glsl

uniform float uTime;
uniform float uStrength;
uniform float uSpeed;
uniform float uColorIn;
uniform float uColorOut;

attribute vec4 tangent;

varying vec3 vColor;

float getElevation(vec3 position)
{
   return simplexNoise4d(vec4(
      position,
      uTime * uSpeed
   )) * uStrength;
}

void main(){

   vec3 biTangent = cross(normal, tangent.xyz);

   float shift = 0.01;
   vec3 positionA = csm_Position + tangent.xyz * shift;
   vec3 positionB = csm_Position + biTangent * shift;
   
   float elevation = getElevation(csm_Position);

   csm_Position += elevation * normal;
   positionA += getElevation(positionA) * normal;
   positionB += getElevation(positionB) * normal;

   vec3 toA = normalize(positionA - csm_Position);
   vec3 toB = normalize(positionB - csm_Position);
   csm_Normal = cross(toA, toB);

   float colorMix = smoothstep(- 1.0, 1.0, elevation / uStrength);

   vec3 colorIn = hslToRgb(uColorIn, 0.5, 0.5);
   vec3 colorOut = hslToRgb(uColorOut, 0.5, 0.5);

   vColor = mix(colorIn, colorOut, colorMix);
}