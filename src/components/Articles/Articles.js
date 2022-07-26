import React from 'react'
import './Articles.css'
import PlaceholderForNoContent from '../../assets/placeholder.jpg'
import LazyLoad from 'react-lazyload'

export const Articles = ({ articles }) => {
  return (
    <>
      {articles &&
        articles.map(({ date, id, image, preamble, title }) => (
          <article className='article' key={id}>
            <div className='article-img'>
              {image ? (
                <LazyLoad height={'100%'}>
                  <img
                    style={{ width: '100%', height: '100%' }}
                    src={image}
                    alt={title}
                  />
                </LazyLoad>
              ) : (
                <LazyLoad height={'100%'}>
                  <img
                    src={PlaceholderForNoContent}
                    alt={title}
                    style={{ width: '100%', height: '100%' }}
                  />
                </LazyLoad>
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
