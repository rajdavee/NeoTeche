import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export function SEO({
  title,
  description,
  keywords = 'AI optimization, GPU acceleration, machine learning, artificial intelligence, AI consulting, MLOps, data engineering',
  canonical,
  ogImage = 'https://neoteq.ai/og-image.jpg',
  ogType = 'website'
}: SEOProps) {
  const location = useLocation();
  const baseUrl = 'https://neoteq.ai';
  const currentUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:site_name', 'NeoTeq - AI & GPU Optimization');
    
    // Twitter Card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);
    updateMetaTag('name', 'twitter:site', '@neoteq');
    
    // Canonical URL
    updateLinkTag('canonical', canonical || currentUrl);
    
    // Structured Data - Organization
    updateStructuredData('organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NeoTeq',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: 'Leading AI and GPU optimization company',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-123-4567',
        contactType: 'Customer Service',
        email: 'contact@neoteq.ai',
        availableLanguage: ['English']
      },
      sameAs: [
        'https://linkedin.com/company/neoteq',
        'https://twitter.com/neoteq',
        'https://github.com/neoteq'
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Silicon Valley',
        addressRegion: 'CA',
        addressCountry: 'US'
      }
    });

    // Structured Data - Website
    updateStructuredData('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'NeoTeq',
      url: baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    });
  }, [title, description, keywords, canonical, currentUrl, ogImage, ogType, baseUrl]);

  return null;
}

function updateMetaTag(attribute: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
}

function updateStructuredData(id: string, data: object) {
  let script = document.getElementById(`structured-data-${id}`);
  
  if (!script) {
    script = document.createElement('script');
    script.id = `structured-data-${id}`;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(data);
}
