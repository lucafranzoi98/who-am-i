varying vec3 vColor;
varying float vRoughness;

void main(){

   csm_DiffuseColor.rgb = vColor;
   csm_Roughness = vRoughness;
}