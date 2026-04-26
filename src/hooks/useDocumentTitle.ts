import { useEffect } from 'react'

interface DocumentTitleOptions {
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
}

export const useDocumentTitle = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl
}: DocumentTitleOptions) => {
  useEffect(() => {
    // Set page title
    document.title = title

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    if (description) {
      metaDescription.setAttribute('content', description)
    }

    // Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    if (ogTitle) updateOGTag('og:title', ogTitle)
    if (ogDescription) updateOGTag('og:description', ogDescription)
    if (ogImage) updateOGTag('og:image', ogImage)
    if (ogUrl) updateOGTag('og:url', ogUrl)

    // Set og:type if not already set
    if (!document.querySelector('meta[property="og:type"]')) {
      const ogType = document.createElement('meta')
      ogType.setAttribute('property', 'og:type')
      ogType.setAttribute('content', 'website')
      document.head.appendChild(ogType)
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl])
}
