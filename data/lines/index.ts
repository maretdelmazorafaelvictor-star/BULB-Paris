import { BUS_LINES } from './bus'
import { CABLE_LINES } from './cable'
import { FUNICULAR_LINES } from './funicular'
import { METRO_LINES } from './metro'
import { NOCTILIEN_LINES } from './noctilien'
import { RER_LINES } from './rer'
import { TRAM_LINES } from './tram'
import { TRAM_TRAIN_LINES } from './tram_train'
import { TRANSILIEN_LINES } from './transilien'
import { VAL_LINES } from './val'

const BUILTIN_LINES: IndexChoice<BuiltinLineIndex>[] = Array.of(
  ...BUS_LINES,
  ...CABLE_LINES,
  ...METRO_LINES,
  ...NOCTILIEN_LINES,
  ...RER_LINES,
  ...TRAM_LINES,
  ...TRANSILIEN_LINES,
  ...FUNICULAR_LINES,
  ...TRAM_TRAIN_LINES,
  ...VAL_LINES,
)

export {
  BUILTIN_LINES,
  BUS_LINES,
  CABLE_LINES,
  FUNICULAR_LINES,
  METRO_LINES,
  NOCTILIEN_LINES,
  RER_LINES,
  TRAM_LINES,
  TRAM_TRAIN_LINES,
  TRANSILIEN_LINES,
  VAL_LINES,
}

export function getLinesByMode(mode: Mode | null): IndexChoice<BuiltinLineIndex>[] {
  return BUILTIN_LINES.filter(it => it.value?.mode === mode)
}

export function findLineByValue(index: BuiltinLineIndex): IndexChoice<BuiltinLineIndex> | null {
  return getLinesByMode(index.mode)
    .find(it => it.value.$builtinLineIndex.index === index.$builtinLineIndex.index) ?? null
}
