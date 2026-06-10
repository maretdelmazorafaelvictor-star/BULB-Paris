import {
  MARON,
  ORANGE,
  ROUGE_FRAMBOISE,
  TURQUOISE,
} from '~/data/colors'

export const TRAM_TRAIN_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { mode: 'TRAM_TRAIN', $builtinLineIndex: { index: '11' } }, label: 'Tramway T11', color: ORANGE.value },
  { value: { mode: 'TRAM_TRAIN', $builtinLineIndex: { index: '12' } }, label: 'Tramway T12', color: ROUGE_FRAMBOISE.value },
  { value: { mode: 'TRAM_TRAIN', $builtinLineIndex: { index: '13' } }, label: 'Tramway T13', color: MARON.value },
  { value: { mode: 'TRAM_TRAIN', $builtinLineIndex: { index: '14' } }, label: 'Tramway T14', color: TURQUOISE.value },
]