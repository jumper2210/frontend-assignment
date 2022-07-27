import React from 'react'
import './Articles.css'
import PlaceholderForNoContent from '../../assets/placeholder.jpg'
import { useArticlesContext } from '../../contexts/ArticlesContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const Articles = () => {
  const { articles } = useArticlesContext()

  // Here it can be improved layout of no articles existing.
  return (
    <>
      {!articles && <p>Pick your favorite article!</p>}
      {articles &&
        articles.map(({ date, id, image, preamble, title }) => (
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
              <div className='preamble'>
                <p>{preamble}</p>
              </div>
            </div>
          </article>
        ))}
    </>
  )
}
