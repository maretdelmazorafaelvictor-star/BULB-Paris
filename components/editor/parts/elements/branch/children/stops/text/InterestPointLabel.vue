<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: string
  color?: string // La couleur de fond personnalisée
}>()

const valueParts = computed(() => props.value.split('\n').filter(part => part.trim() !== ''))

/**
 * Calcule dynamiquement si le texte doit être noir ou blanc en fonction du fond.
 * Gère les formats Hexadécimaux classiques (#FFF, #FFFFFF, etc.)
 */
const textColor = computed(() => {
  if (!props.color) return 'white' // Blanc par défaut pour le marron de BULB

  // Nettoyage du code couleur
  let hex = props.color.replace('#', '')

  // Si format court (#FFF), on le transforme en format long (#FFFFFF)
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('')
  }

  // Extraction des composants Rouge, Vert, Bleu (RGB)
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // Formule standard de luminance de l'œil humain (norme W3C)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  // Si la couleur est claire (luminance > 0.5), on écrit en noir, sinon en blanc
  return luminance > 0.5 ? '#1A1A1A' : 'white'
})
</script>

<template>
  <div 
    class="subtitle" 
    :style="color ? { backgroundColor: color, color: textColor } : {}"
  >
    <Typography v-for="(part, index) in valueParts" :key="`${part}-${index}`" class="name">
      {{ part }}
    </Typography>
  </div>
</template>

<style scoped lang="scss">
.subtitle {
  padding: .125em .125em;
  display: flex;
  flex-direction: column;
  gap: .0625em;
  background-color: var(--place-brown);
  color: white; /* Écrasé dynamiquement par le :style si une couleur est choisie */
  font-weight: bold;
  font-style: italic;
  width: fit-content;
  transition: background-color 0.2s, color 0.2s; /* Petit effet fluide sympa */

  .debug & {
    outline: 1px solid blue;
  }
}

.name {
  font-size: .5em;
}

span {
  line-height: .9375em;
  margin-top: calc(-2em / 12);
  margin-right: calc(1em / 12);
  text-wrap: nowrap;
  height: fit-content;
}
</style>