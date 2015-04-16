import singleLinefeeds from './index';
import { equal } from 'assert';

it('should fix double linefeeds', ()=> {
  equal(singleLinefeeds(`foo\n\nbar`), `foo\nbar`);
});

it('should fix triple linefeeds', ()=> {
  equal(singleLinefeeds(`foo\n\n\nbar`), `foo\nbar`);
});

it('should remove linefeeds in the start', ()=> {
  equal(singleLinefeeds(`\n\n\nfoo`), `foo`);
});

it('should remove linefeeds in the end', ()=> {
  equal(singleLinefeeds(`foo\n\n\n`), `foo`);
});

it('should trim the line and remove extra linefeeds end', ()=> {
  equal(singleLinefeeds(`\n\n\n\n\nfoo\n\n\nbar  foo\n\n\n\n`), `foo\nbar  foo`);
});
