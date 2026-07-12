function toLatin1(s: string): Uint8Array {
  const bytes: number[] = []
  for (const ch of s) {
    const code = ch.charCodeAt(0)
    bytes.push(code <= 0xff ? code : '?'.charCodeAt(0))
  }
  return new Uint8Array(bytes)
}

function escapePdfText(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

export function generateDocumentBlob(title: string, bodyLines: string[]): Blob {
  const safeTitle = escapePdfText(title)
  const content: string[] = [
    'BT',
    '/F1 18 Tf',
    '50 790 Td',
    `(${safeTitle}) Tj`,
    'ET',
    'BT',
    '/F1 11 Tf',
    '50 760 Td',
    '15 TL',
  ]
  bodyLines.forEach((line) => {
    content.push(`(${escapePdfText(line)}) Tj`)
  })
  content.push('ET')
  const stream = content.join('\n')

  const objects = [
    '<</Type/Catalog/Pages 2 0 R>>',
    '<</Type/Pages/Kids[3 0 R]/Count 1>>',
    '<</Type/Page/Parent 2 0 R/MediaBox[0 0 595 842]/Resources<</Font<</F1 4 0 R>>>>/Contents 5 0 R>>',
    '<</Type/Font/Subtype/Type1/BaseFont/Helvetica/Encoding/WinAnsiEncoding>>',
    `<</Length ${toLatin1(stream).length}>>\nstream\n${stream}\nendstream`,
  ]

  const enc = toLatin1
  let bytes: number[] = []
  const push = (s: string) => {
    const b = enc(s)
    for (let i = 0; i < b.length; i++) bytes.push(b[i])
  }

  const offsets: number[] = []
  push('%PDF-1.4\n')
  objects.forEach((obj, i) => {
    offsets.push(bytes.length)
    push(`${i + 1} 0 obj\n${obj}\nendobj\n`)
  })
  const xrefStart = bytes.length
  push(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`)
  offsets.forEach((off) => {
    push(`${off.toString().padStart(10, '0')} 00000 n \n`)
  })
  push(
    `trailer\n<</Size ${objects.length + 1}/Root 1 0 R>>\nstartxref\n${xrefStart}\n%%EOF`,
  )

  return new Blob([new Uint8Array(bytes)], { type: 'application/pdf' })
}

export function downloadDocument(
  fileName: string,
  title: string,
  bodyLines: string[],
): void {
  const blob = generateDocumentBlob(title, bodyLines)
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
