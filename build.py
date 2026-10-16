#!/usr/bin/env python3
"""Build dist/: a single self-contained index.html (images inlined) plus PWA files."""
import base64, json, pathlib, shutil
VERSION = "1.0.0"
ROOT = pathlib.Path(__file__).parent
SRC, DIST = ROOT / "src", ROOT / "dist"
MIME = {".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg"}

def data_uri(p):
    return f"data:{MIME[p.suffix]};base64," + base64.b64encode(p.read_bytes()).decode()

def main():
    imgs = {p.name: data_uri(p) for p in sorted((SRC / "img").iterdir())}
    html = (SRC / "index.html").read_text()
    html = html.replace("{{CSS}}", (SRC / "styles.css").read_text())
    html = html.replace("{{JS}}", (SRC / "app.js").read_text())
    for name, uri in imgs.items():
        html = html.replace("{{IMG:%s}}" % name, uri)
    html = html.replace("{{IMGMAP}}", json.dumps({k.split(".")[0]: v for k, v in imgs.items() if not k.startswith("icon")}))
    html = html.replace("{{VERSION}}", VERSION)
    assert "{{" not in html, "unreplaced placeholder"
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()
    (DIST / "index.html").write_text(html)
    for n in ("icon-192.png", "icon-512.png", "icon-180.png"):
        shutil.copy(SRC / "img" / n, DIST / n)
    (DIST / "sw.js").write_text((SRC / "sw.js").read_text().replace("{{VERSION}}", VERSION))
    (DIST / "manifest.webmanifest").write_text((SRC / "manifest.webmanifest").read_text())
    (DIST / ".nojekyll").write_text("")
    print(f"built dist/ v{VERSION}  index.html={len(html)//1024} KB")

if __name__ == "__main__":
    main()
