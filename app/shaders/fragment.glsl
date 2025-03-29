uniform float time;
uniform vec2 iResolution;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;

    // Wave movement based on sine and time
    float wave = sin(uv.x * 10.0 + time * 2.0) + cos(uv.y * 10.0 + time * 2.5);
    wave = wave * 0.5 + 0.5; // Normalize to 0.0 - 1.0

    // Neon colors based on wave value
    vec3 neonColor = mix(vec3(0.0, 1.0, 1.0), vec3(1.0, 0.0, 1.0), wave);
    neonColor = mix(neonColor, vec3(0.0, 1.0, 0.0), 1.0 - wave);

    // Output the color
    gl_FragColor = vec4(neonColor, 1.0);
}
