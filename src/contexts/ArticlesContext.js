import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react'
import http from '../http'

const ArticlesContext = createContext()

export const useArticlesContext = () => {
  return useContext(ArticlesContext)
}

export const ArticlesProvider = ({ children }) => {
  const [articlesOfSport, setArticlesOfSport] = useState()
  const [articlesOfFashion, setArticlesOfFashion] = useState()

  const setArticlesContent = (data) => {
    const shouldGetSportContent = data.some(
      (article) => article.category === 'sport'
    )

    if (shouldGetSportContent) setArticlesOfSport(data)
    else if (!shouldGetSportContent) setArticlesOfFashion(data)
  }

  const fetchArticlesOfSport = useCallback(async () => {
    try {
      const response = await http.get(`/articles/sports`)
      const { articles } = response?.data
      setArticlesContent(articles)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const fetchArticlesOfFashion = useCallback(async () => {
    try {
      const response = await http.get(`/articles/fashion`)
      const { articles } = response?.data
      setArticlesContent(articles)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const value = useMemo(
    () => ({
      articlesOfSport,
      articlesOfFashion,
      fetchArticlesOfFashion,
      fetchArticlesOfSport,
      setArticlesOfSport,
      setArticlesOfFashion,
    }),
    [
      articlesOfSport,
      articlesOfFashion,
      fetchArticlesOfFashion,
      fetchArticlesOfSport,
      setArticlesOfSport,
      setArticlesOfFashion,
    ]
  )
  console.log(value)
  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  )
}
