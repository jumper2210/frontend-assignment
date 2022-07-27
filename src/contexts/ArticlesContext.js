import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react'
import http from '../http'
import { articleTypes } from '../helpers/ArticleTypes'

const ArticlesContext = createContext()

export const useArticlesContext = () => {
  return useContext(ArticlesContext)
}

export const ArticlesProvider = ({ children }) => {
  const { Fashion, Sports } = articleTypes
  const [sortedArticles, setSortedArticles] = useState([])

  const removeArticle = useCallback(
    (type) => {
      const updatedArticlesArray = sortedArticles.filter(
        (article) => article.category !== type
      )

      setSortedArticles(updatedArticlesArray)
    },
    [sortedArticles]
  )

  const sortArticlesHandler = useCallback(() => {
    const articlesCopy = [...sortedArticles]
    articlesCopy.sort((a, b) =>
      Date.parse(a.date) && Date.parse(b.date)
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : Date.parse(a.date)
        ? -1
        : 0
    )
    setSortedArticles(articlesCopy)
  }, [sortedArticles])

  const getArticlesContent = (data) => {
    const shouldGetSportContent = data.some(
      (article) => article.category === 'sport'
    )

    if (shouldGetSportContent) {
      setSortedArticles((prevState) => [...prevState, ...data])
    } else if (!shouldGetSportContent) {
      setSortedArticles((prevState) => [...prevState, ...data])
    }
  }

  const fetchArticles = useCallback(
    async (name) => {
      try {
        if (name === Sports) {
          const response = await http.get(`/articles/sports`)
          const { articles } = response?.data
          getArticlesContent(articles)
        } else if (name === Fashion) {
          const response = await http.get(`/articles/fashion`)
          const { articles } = response?.data
          getArticlesContent(articles)
        }
      } catch (err) {
        console.log(err)
      }
    },
    [Fashion, Sports]
  )

  const value = useMemo(
    () => ({
      fetchArticles,
      removeArticle,
      sortedArticles,
      sortArticlesHandler,
    }),
    [fetchArticles, removeArticle, sortedArticles, sortArticlesHandler]
  )

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  )
}
