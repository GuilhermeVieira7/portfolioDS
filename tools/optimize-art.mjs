// Converte as artes brutas em WebP otimizado:
//   fotos/quinta duo studio/*.png       -> assets/arte/<série>/   (posts completos do Instagram)
//   fotos/fotos exemplos cards/*.png    -> assets/cenas/          (cenas sem texto, usadas nos capítulos do site)
// Uso:  npm i --no-save sharp   &&   node tools/optimize-art.mjs
// Não adiciona dependência ao projeto (--no-save) e não roda no build do Vercel.
import sharp from 'sharp';
import { mkdirSync, readdirSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';

const SRC = 'fotos/quinta duo studio';
const OUT = 'assets/arte';
const WIDTHS = [560, 1000];

// arquivo -> [série, nº-slug]. Para arte nova: acrescente uma linha aqui.
// (ordem da lista = ordem cronológica dos arquivos; índice entre parênteses = posição)
const stamp = (f) => {
  const m = f.match(/Image (\d+)_(\d+)_2026, (\d+)_(\d+)_(\d+)(?: \((\d+)\))?/);
  return [m[2], m[1], m[3], m[4], m[5], m[6] || 0].map((n) => String(n).padStart(2, '0')).join('');
};
const files = readdirSync(SRC).filter((f) => f.endsWith('.png')).sort((a, b) => stamp(a).localeCompare(stamp(b)));

const MAP = [
  ['estatua', '01-chama-atencao'], ['estatua', '02-o-que-cria'], ['estatua', '03-como-fazemos'], ['estatua', '04-lembrada'],
  ['bichos', '01-papagaio-fala'], ['bichos', '02-post-sem-estrategia'], ['bichos', '03-o-que-faz'], ['bichos', '04-como-fazemos'], ['bichos', '05-impossivel-de-ignorar'],
  ['bichos', '06-largar-na-frente'], ['bichos', '07-nao-seja-papagaio'], ['bichos', '08-gato-julgou'], ['bichos', '09-marketing-sem-estrategia'], ['bichos', '10-identidade-exe'],
  ['bichos', '11-choose-your-brand'], ['bichos', '12-multiverse'], ['bichos', '13-reuniao'], ['bichos', '14-duo-daily'], ['bichos', '15-duo-lab'],
  ['metaforas', '01-sufocando'], ['metaforas', '02-parecer-igual'], ['metaforas', '03-detetive'], ['metaforas', '04-no'], ['metaforas', '05-preso'],
  ['pecas', '01-cresceu'], ['pecas', '02-personalidade'], ['pecas', '03-ponte'], ['pecas', '04-automatico'], ['pecas', '05-primeira-peca'],
  ['outra-historia', '01-conto-de-fadas'], ['outra-historia', '04-frankenstein'], ['outra-historia', '03-tempo'], ['outra-historia', '02-espera'], ['outra-historia', '05-proximo-capitulo'],
];
if (files.length !== MAP.length) throw new Error(`Esperava ${MAP.length} artes, achei ${files.length}. Atualize MAP.`);

let total = 0;
for (const [i, f] of files.entries()) {
  const [serie, name] = MAP[i];
  mkdirSync(path.join(OUT, serie), { recursive: true });
  for (const w of WIDTHS) {
    const out = path.join(OUT, serie, `${name}-${w}.webp`);
    if (existsSync(out) && statSync(out).mtimeMs > statSync(path.join(SRC, f)).mtimeMs) continue;
    await sharp(path.join(SRC, f)).resize({ width: w, withoutEnlargement: true }).webp({ quality: 80, effort: 5 }).toFile(out);
    total += statSync(out).size;
  }
}

// ---- cenas sem texto (ordem alfabética dos arquivos = ordem abaixo) ----
const CENAS_SRC = 'fotos/fotos exemplos cards';
const CENAS = ['02-espera', '03-tempo', '04-frankenstein', '01-conto-de-fadas', '05-proximo-capitulo'];
const cenaFiles = readdirSync(CENAS_SRC).filter((f) => f.endsWith('.png')).sort();
if (cenaFiles.length !== CENAS.length) throw new Error(`Esperava ${CENAS.length} cenas, achei ${cenaFiles.length}. Atualize CENAS.`);
mkdirSync('assets/cenas', { recursive: true });
for (const [i, f] of cenaFiles.entries()) for (const w of WIDTHS) {
  const out = path.join('assets/cenas', `${CENAS[i]}-${w}.webp`);
  if (existsSync(out) && statSync(out).mtimeMs > statSync(path.join(CENAS_SRC, f)).mtimeMs) continue;
  await sharp(path.join(CENAS_SRC, f)).resize({ width: w, withoutEnlargement: true }).webp({ quality: 80, effort: 5 }).toFile(out);
  total += statSync(out).size;
}
console.log(`ok: ${files.length} artes + ${cenaFiles.length} cenas x ${WIDTHS.length} tamanhos, ${(total / 1024 / 1024).toFixed(1)} MB gerados`);
