<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: string
  interestPoint?: boolean
  color?: string // <-- Doit être présent ici !
}>()

// Calcul de la couleur du texte (blanc ou noir) selon la clarté du fond
const textColor = computed(() => {
  if (!props.color) return 'white' // Couleur RATP par défaut
  
  // Petite formule magique pour savoir si la couleur est claire ou foncée
  const hex = props.color.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 128 ? 'black' : 'white'
})
</script>

<template>
  <span class="custom-subtitle">
    {{ value }}
  </span>
</template>

<style scoped lang="scss">
.custom-subtitle {
  // Liaison de la couleur de fond dynamique (ou marron par défaut)
  background-color: v-bind('props.color || "#8B5A2B"'); 
  color: v-bind(textColor);
  padding: 0.1em 0.3em;
  border-radius: 3px;
}
</style>