import React from 'react'
import './Articles.css'
import PlaceholderForNoContent from '../../assets/placeholder.jpg'
import { useArticlesContext } from '../../contexts/ArticlesContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const Articles = () => {
  const { articlesOfFashion, articlesOfSport } = useArticlesContext()

  return (
    <>
      {!articlesOfFashion && !articlesOfSport && (
        <p>Pick your favorite article!</p>
      )}
      {articlesOfFashion &&
        articlesOfFashion.map(({ date, id, image, preamble, title }) => (
          <article className='article' key={id}>
            <div className='article-img'>
              {image ? (
                <LazyLoadImage
                  style={{ width: '100%', height: '100%' }}
                  src={image}
                  alt={title}
                />
              ) : (
                <LazyLoadImage
                  src={PlaceholderForNoContent}
                  alt={title}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
            <div className='description-container'>
              <div className='title-block'>
                <h4 style={{ marginTop: '0' }}>{title}</h4>
                <time>{date}</time>
              </div>
              <div style={{ width: '90%', maxHeight: '90%' }}>
                <p>{preamble}</p>
              </div>
            </div>
          </article>
        ))}
      {articlesOfSport &&
        articlesOfSport.map(({ date, id, image, preamble, title }) => (
          <article className='article' key={id}>
            <div className='article-img'>
              {image ? (
                <LazyLoadImage
                  style={{ width: '100%', height: '100%' }}
                  src={image}
                  alt={title}
                />
              ) : (
                <LazyLoadImage
                  src={PlaceholderForNoContent}
                  alt={title}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
            <div className='description-container'>
              <div className='title-block'>
                <h4 style={{ marginTop: '0' }}>{title}</h4>
                <time>{date}</time>
              </div>
              <div style={{ width: '90%', maxHeight: '90%' }}>
                <p>{preamble}</p>
              </div>
            </div>
          </article>
        ))}
    </>
  )
}
