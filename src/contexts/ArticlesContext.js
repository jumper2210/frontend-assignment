import React, {
  createContext,
  useContext,
  useEffect,
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
  const [articles, setArticles] = useState()

  const fetchArticles = useCallback(async () => {
    try {
      const response = await http.get(`/articles/sports`)
      const { articles } = response?.data
      setArticles(articles)
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  const value = useMemo(
    () => ({
      articles,
    }),
    [articles]
  )

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  )
}
