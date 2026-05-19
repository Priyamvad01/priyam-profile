import { useEffect } from 'react'

function setMetaContent(selector, content) {
  const element = document.head.querySelector(selector)

  if (element && content) {
    element.setAttribute('content', content)
  }
}

export function useDocumentMetadata({ description, title }) {
  useEffect(() => {
    if (title) {
      document.title = title
      setMetaContent('meta[property="og:title"]', title)
      setMetaContent('meta[name="twitter:title"]', title)
    }

    if (description) {
      setMetaContent('meta[name="description"]', description)
      setMetaContent('meta[property="og:description"]', description)
      setMetaContent('meta[name="twitter:description"]', description)
    }
  }, [description, title])
}
