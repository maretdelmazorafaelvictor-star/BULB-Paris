import {
 ORANGE,
 BLEU_CLAIR,   
} from '~/data/colors'

export const VAL_LINES: IndexChoice<BuiltinLineIndex>[] = [
  { value: { mode: 'VAL', $builtinLineIndex: { index: 'CDG' } }, label: 'CDGVAL', color: ORANGE.value },
  { value: { mode: 'VAL', $builtinLineIndex: { index: 'J' } }, label: 'OrlyVAL', color: BLEU_CLAIR.value },
]