# Otimização da Imagem do Logo

## Problema
O arquivo `/img/logo-festa.png` está com 177.7 KiB, mas precisa ser otimizado para reduzir para ~4-5 KiB.

## Solução Recomendada

### 1. Converter para WebP
Use uma ferramenta online como:
- https://squoosh.app/
- https://convertio.co/png-webp/

Ou use o ImageMagick (se instalado):
```bash
magick public/img/logo-festa.png -quality 85 -resize 400x400 public/img/logo-festa.webp
```

### 2. Redimensionar
O logo está sendo exibido em 168x168px, mas a imagem original é 400x400px.
Redimensione para 200x200px (suficiente para retina displays).

### 3. Compressão
- PNG: Use TinyPNG (https://tinypng.com/) para comprimir
- WebP: Use qualidade 80-85 para melhor compressão

## Resultado Esperado
- PNG otimizado: ~15-20 KiB (de 177.7 KiB)
- WebP: ~4-8 KiB
- Economia total: ~173 KiB ✅
