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

const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, '')
const runtimeSiteUrl = typeof window !== 'undefined' ? window.location.origin : ''
const siteUrl = configuredSiteUrl || runtimeSiteUrl
const googleSiteVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim()

export function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  pathname = '',
}: SEOProps) {
  const url = `${siteUrl}${pathname}`
  const socialImage = image.startsWith('http') ? image : `${siteUrl}${image}`

  return (
    <Helmet>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {googleSiteVerification ? (
        <meta name="google-site-verification" content={googleSiteVerification} />
      ) : null}

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  )
}
