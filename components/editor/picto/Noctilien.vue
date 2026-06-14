<script setup lang="ts">
import { computed } from 'vue'
import Noctilien_N01 from '~/assets/svg/lines/noctilien/noctilien_n01.svg'
import Noctilien_N02 from '~/assets/svg/lines/noctilien/noctilien_n02.svg'
import Noctilien_N11 from '~/assets/svg/lines/noctilien/noctilien_n11.svg'
import Noctilien_N12 from '~/assets/svg/lines/noctilien/noctilien_n12.svg'
import Noctilien_N13 from '~/assets/svg/lines/noctilien/noctilien_n13.svg'
import Noctilien_N14 from '~/assets/svg/lines/noctilien/noctilien_n14.svg'
import Noctilien_N15 from '~/assets/svg/lines/noctilien/noctilien_n15.svg'
import Noctilien_N16 from '~/assets/svg/lines/noctilien/noctilien_n16.svg'
import Noctilien_N21 from '~/assets/svg/lines/noctilien/noctilien_n21.svg'
import Noctilien_N22 from '~/assets/svg/lines/noctilien/noctilien_n22.svg'
import Noctilien_N23 from '~/assets/svg/lines/noctilien/noctilien_n23.svg'
import Noctilien_N24 from '~/assets/svg/lines/noctilien/noctilien_n24.svg'
import Noctilien_N31 from '~/assets/svg/lines/noctilien/noctilien_n31.svg'
import Noctilien_N32 from '~/assets/svg/lines/noctilien/noctilien_n32.svg'
import Noctilien_N33 from '~/assets/svg/lines/noctilien/noctilien_n33.svg'
import Noctilien_N34 from '~/assets/svg/lines/noctilien/noctilien_n34.svg'
import Noctilien_N35 from '~/assets/svg/lines/noctilien/noctilien_n35.svg'
import Noctilien_N41 from '~/assets/svg/lines/noctilien/noctilien_n41.svg'
import Noctilien_N42 from '~/assets/svg/lines/noctilien/noctilien_n42.svg'
import Noctilien_N43 from '~/assets/svg/lines/noctilien/noctilien_n43.svg'
import Noctilien_N44 from '~/assets/svg/lines/noctilien/noctilien_n44.svg'
import Noctilien_N45 from '~/assets/svg/lines/noctilien/noctilien_n45.svg'
import Noctilien_N51 from '~/assets/svg/lines/noctilien/noctilien_n51.svg'
import Noctilien_N52 from '~/assets/svg/lines/noctilien/noctilien_n52.svg'
import Noctilien_N53 from '~/assets/svg/lines/noctilien/noctilien_n53.svg'
import Noctilien_N61 from '~/assets/svg/lines/noctilien/noctilien_n61.svg'
import Noctilien_N62 from '~/assets/svg/lines/noctilien/noctilien_n62.svg'
import Noctilien_N63 from '~/assets/svg/lines/noctilien/noctilien_n63.svg'
import Noctilien_N66 from '~/assets/svg/lines/noctilien/noctilien_n66.svg'
import Noctilien_N71 from '~/assets/svg/lines/noctilien/noctilien_n71.svg'
import Noctilien_N72 from '~/assets/svg/lines/noctilien/noctilien_n72.svg'
import Noctilien_N122 from '~/assets/svg/lines/noctilien/noctilien_n122.svg'
import Noctilien_N123 from '~/assets/svg/lines/noctilien/noctilien_n123.svg'
import Noctilien_N130 from '~/assets/svg/lines/noctilien/noctilien_n130.svg'
import Noctilien_N131 from '~/assets/svg/lines/noctilien/noctilien_n131.svg'
import Noctilien_N132 from '~/assets/svg/lines/noctilien/noctilien_n132.svg'
import Noctilien_N133 from '~/assets/svg/lines/noctilien/noctilien_n133.svg'
import Noctilien_N134 from '~/assets/svg/lines/noctilien/noctilien_n134.svg'
import Noctilien_N135 from '~/assets/svg/lines/noctilien/noctilien_n135.svg'
import Noctilien_N137 from '~/assets/svg/lines/noctilien/noctilien_n137.svg'
import Noctilien_N139 from '~/assets/svg/lines/noctilien/noctilien_n139.svg'
import Noctilien_N140 from '~/assets/svg/lines/noctilien/noctilien_n140.svg'
import Noctilien_N141 from '~/assets/svg/lines/noctilien/noctilien_n141.svg'
import Noctilien_N142 from '~/assets/svg/lines/noctilien/noctilien_n142.svg'
import Noctilien_N143 from '~/assets/svg/lines/noctilien/noctilien_n143.svg'
import Noctilien_N146 from '~/assets/svg/lines/noctilien/noctilien_n146.svg'
import Noctilien_N147 from '~/assets/svg/lines/noctilien/noctilien_n147.svg'
import Noctilien_N148 from '~/assets/svg/lines/noctilien/noctilien_n148.svg'
import Noctilien_N150 from '~/assets/svg/lines/noctilien/noctilien_n150.svg'
import Noctilien_N151 from '~/assets/svg/lines/noctilien/noctilien_n151.svg'
import Noctilien_N152 from '~/assets/svg/lines/noctilien/noctilien_n152.svg'
import Noctilien_N153 from '~/assets/svg/lines/noctilien/noctilien_n153.svg'
import Noctilien_N154 from '~/assets/svg/lines/noctilien/noctilien_n154.svg'
import Noctilien_N155 from '~/assets/svg/lines/noctilien/noctilien_n155.svg'
import Noctilien_N160 from '~/assets/svg/lines/noctilien/noctilien_n160.svg'
import Noctilien_N161 from '~/assets/svg/lines/noctilien/noctilien_n161.svg'
import Noctilien_N162 from '~/assets/svg/lines/noctilien/noctilien_n162.svg'
const {
  line,
} = defineProps<{
  line: NoctilienLine
}>()

const picto = computed(() => {
  switch (line) {
    case '1':
      return Noctilien_N01
    case '2':
      return Noctilien_N02
    case '3':
      return Noctilien_N11
    case '4':
      return Noctilien_N12
    case '5':
      return Noctilien_N13
    case '6':
      return Noctilien_N14
    case '7':
      return Noctilien_N15
    case '8':
      return Noctilien_N16
    case '9':
      return Noctilien_N21
    case '10':
      return Noctilien_N22
    case '11':
      return Noctilien_N23
    case '12':
      return Noctilien_N24
    case '13':
      return Noctilien_N31
    case '14':
      return Noctilien_N32
    case '15':
      return Noctilien_N33
    case '16':
      return Noctilien_N34
    case '17':
      return Noctilien_N35
    case '18':
      return Noctilien_N41
    case '19':
      return Noctilien_N42
    case '20':
      return Noctilien_N43
    case '21':
      return Noctilien_N44
    case '22':
      return Noctilien_N45
    case '23':
      return Noctilien_N51
    case '24':
      return Noctilien_N52
    case '25':
      return Noctilien_N53
    case '26':
      return Noctilien_N61
    case '27':
      return Noctilien_N62
    case '28':
      return Noctilien_N63
    case '29':
      return Noctilien_N66
    case '30':
      return Noctilien_N71
    case '31':
      return Noctilien_N72
    case '32':
      return Noctilien_N122
    case '33':
      return Noctilien_N123
    case '34':
      return Noctilien_N130
    case '35': 
      return Noctilien_N131
    case '36':
      return Noctilien_N132
    case '37':
      return Noctilien_N133
    case '38':
      return Noctilien_N134
    case '39':
      return Noctilien_N135
    case '40':
      return Noctilien_N137
    case '41':
      return Noctilien_N139
    case '42':
      return Noctilien_N140
    case '43':
      return Noctilien_N141
    case '44':
      return Noctilien_N142
    case '45':
      return Noctilien_N143
    case '46':
      return Noctilien_N146
    case '47':
      return Noctilien_N147
    case '48':
      return Noctilien_N148
    case '49':
      return Noctilien_N150
    case '50':
      return Noctilien_N151
    case '51':
      return Noctilien_N152
    case '52':
      return Noctilien_N153
    case '53':
      return Noctilien_N154
    case '54':
      return Noctilien_N155
    case '55':
      return Noctilien_N160
    case '56':
      return Noctilien_N161
    case '57':
      return Noctilien_N162
    default:
      return null 
  }
  return null
})
</script>

<template>
  <img v-if="picto" :src="picto" alt="metro" class="picto">
</template>

<style scoped lang="scss">
.picto {
  width: 1em;
  height: 1em;
}
</style>
