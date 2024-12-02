#include ./simplexNoise4d.glsl
#include ./rgb2hsv.glsl
#include ./hsv2rgb.glsl

uniform float uTime;
uniform float uSpeed;
uniform float uStrength;
uniform float uColorBase;
uniform float uColorBaseLight;
uniform float uColorMiddle;
uniform float uColorMiddleLight;
uniform float uColorTop;
uniform float uColorTopLight;
uniform float uRoughness;
uniform float uSaturation;
uniform float uSaturationClick;

attribute vec4 tangent;

varying vec3 vColor;
varying float vRoughness;

float getElevation(vec3 position)
{
   return simplexNoise4d(vec4(
      position,
      uTime * uSpeed
   )) * uStrength;
}

void main(){

   // Recompute normal
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

   vec3 color = vec3(1.0);
   float normalizedElevation = elevation / uStrength;

   // ColorBase
   vec3 colorBaseA = vec3(0.09, 0.89, 0.12); // Green
   vec3 colorBaseB = vec3(1, 0.08, 0.03); // Red

   vec3 colorBase = mix(colorBaseA, colorBaseB, uColorBase);
   colorBase = mix(colorBase, vec3(1.0), uColorBaseLight);

   float colorBaseMix = smoothstep(-1.0, -0.3, normalizedElevation);
   color = mix(colorBase, colorBase, colorBaseMix);

   // ColorMiddle
   vec3 colorMiddleA = vec3(0, 0.5, 0.81); // Blue
   vec3 colorMiddleB = vec3(1, 0.45, 0); // Orange

   vec3 colorMiddle = mix(colorMiddleA, colorMiddleB, uColorMiddle);
   colorMiddle = mix(colorMiddle, vec3(1.0), uColorMiddleLight);

   float colorMiddleMix = smoothstep(-0.5, -0.1, normalizedElevation);
   color = mix(color, colorMiddle, colorMiddleMix);

   // ColorTop
   vec3 colorTopA = vec3(0.77, 0.1, 0.84); // Purple
   vec3 colorTopB = vec3(1, 0.87, 0); // Yellow

   vec3 colorTop = mix(colorTopA, colorTopB, uColorTop);
   colorTop = mix(colorTop, vec3(1.0), uColorTopLight);

   float colorTopMix = smoothstep(-0.2, 1.0, elevation / uStrength);
   color = mix(color, colorTop, colorTopMix);

   vColor = color;

   vRoughness = uRoughness;
}