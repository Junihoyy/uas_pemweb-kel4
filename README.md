## Warna
| Variable | Hex | Kegunaan |
|---|---|---|
| `--color-primary` | #012D1D | Background gelap, navbar |
| `--color-secondary` | #7B5804 | Aksen coklat |
| `--color-gold` | #C9A84C | Highlight, CTA button |
| `--color-gold-light` | #E8C97A | Hover state |
| `--color-dark` | #1C1C15 | Teks utama |
| `--color-muted` | rgba(245,239,216,0.72) | Teks sekunder di atas foto |

## Font
| Variable | Font | Kegunaan |
|---|---|---|
| `--font-heading` | Playfair Display | Judul, heading |
| `--font-body` | Inter | Teks biasa, navigasi |

## Cara Pakai Warna & Font
Selalu gunakan variable, jangan hardcode:
```css
/* ✅ Benar */
color: var(--color-gold);
font-family: var(--font-heading);

/* ❌ Salah */
color: #C9A84C;
font-family: 'Playfair Display', serif;
```

## Navbar
Copy paste komponen navbar dari `beranda.html` ke halaman lain.
Ganti class `nav_link--active` ke link halaman yang sesuai:
```html
<!-- di tentang.html, aktifkan link Tentang -->
<a href="tentang.html" class="nav_link nav_link--active">Tentang</a>
```
Jangan lupa copy script navbar di bagian bawah sebelum `</body>`.