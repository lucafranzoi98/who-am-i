// HSL to RGB conversion function
vec3 hslToRgb(float h, float s, float l) {
   float c = (1.0 - abs(2.0 * l - 1.0)) * s; // Chroma
   float x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));
   float m = l - 0.5 * c;

   vec3 rgb;

   if (h < 1.0 / 6.0) {
      rgb = vec3(c, x, 0.0);
   } else if (h < 2.0 / 6.0) {
      rgb = vec3(x, c, 0.0);
   } else if (h < 3.0 / 6.0) {
      rgb = vec3(0.0, c, x);
   } else if (h < 4.0 / 6.0) {
      rgb = vec3(0.0, x, c);
   } else if (h < 5.0 / 6.0) {
      rgb = vec3(x, 0.0, c);
   } else {
      rgb = vec3(c, 0.0, x);
   }

   return rgb + vec3(m); // Add the adjustment factor
}