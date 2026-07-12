import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  pathname?: string
}

const defaultSEO = {
  title: 'Colegio Horizonte | Excelencia Educativa',
  description:
    'Formando líderes con valores desde 1985. Educación de excelencia con un enfoque humano e integral.',
  keywords:
    'colegio, educación, escuela, enseñanza, Santiago, Chile, colegio Horizonte, educación integral',
  image: '/og-image.svg',
}

export function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  pathname = '',
}: SEOProps) {
  const url = `https://colegiohorizonte.cl${pathname}`

  return (
    <Helmet>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
