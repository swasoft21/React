import{it,expect,describe} from 'vitest';
import { formatMoney } from './money';

describe('formatMoney',()=>{
it('formats 1999 centes as $19.99',()=>{
    expect(formatMoney(1999)).toBe('$19.99');
})
it('displays 2 decimal point',()=>{
    expect(formatMoney(1090)).toBe('$10.90');
})
})

