import { BUS_LINES } from './bus'
import { CABLE_LINES } from './cable'
import { FUNICULAR_LINES } from './funicular'
import { METRO_LINES } from './metro'
import { RER_LINES } from './rer'
import { TRAM_LINES } from './tram'
import { TRANSILIEN_LINES } from './transilien'
// 1. On l'importe depuis votre fichier (adaptez le nom du fichier si nécessaire)
import { TRAM_TRAIN_LINES } from './tram_train' 

const BUILTIN_LINES: IndexChoice<BuiltinLineIndex>[] = Array.of(
  ...BUS_LINES,
  ...CABLE_LINES,
  ...METRO_LINES,
  ...RER_LINES,
  ...TRAM_LINES,
  ...TRANSILIEN_LINES,
  ...(FUNICULAR_LINES as any[]),
  ...(TRAM_TRAIN_LINES as any[]), 
)

export {
  BUILTIN_LINES,
  BUS_LINES,
  CABLE_LINES,
  METRO_LINES,
  RER_LINES,
  TRAM_LINES,
  // 2. C'est ICI qu'il faut l'ajouter sous le nom exact attendu (TRAM_TRAIN_LINES) !
  TRAM_TRAIN_LINES,
  TRANSILIEN_LINES,
  FUNICULAR_LINES,
}

export function getLinesByMode(mode: Mode | null): IndexChoice<BuiltinLineIndex>[] {
  return BUILTIN_LINES.filter(it => it.value?.mode === mode)
}

export function findLineByValue(index: BuiltinLineIndex): IndexChoice<BuiltinLineIndex> | null {
  return getLinesByMode(index.mode)
    .find(it => it.value.$builtinLineIndex.index === index.$builtinLineIndex.index) ?? null
}
