import singleLinefeeds from './index';
import { equal } from 'assert';

it('should fix double linefeeds', ()=> {
  equal(singleLinefeeds(`foo\n\nbar`), `foo\nbar`);
});

it('should fix triple linefeeds', ()=> {
  equal(singleLinefeeds(`foo\n\n\nbar`), `foo\nbar`);
});
