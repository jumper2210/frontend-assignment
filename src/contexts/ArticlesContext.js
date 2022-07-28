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
  const [articles, setArticles] = useState([])

  const removeArticles = useCallback(
    (type) => {
      // look for articles that have different picked type
      const updatedArticlesArray = articles.filter(
        (article) => article.category !== type
      )

      setArticles(updatedArticlesArray)
    },
    [articles]
  )

  const sortArticlesHandler = useCallback(() => {
    // make a copy of articles for sorting
    const articlesCopy = [...articles]
    articlesCopy.sort((a, b) =>
      // handle invalid date from backend and compare each element to sort
      Date.parse(a.date) && Date.parse(b.date)
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : Date.parse(a.date)
        ? -1
        : 0
    )
    // update current existing artciles with sorted date
    setArticles(articlesCopy)
  }, [articles])

  const getArticlesContent = (data) => {
    // it can be improved by adding function which accepts category as an argument. (For more types of articles)
    const shouldGetSportContent = data.some(
      (article) => article.category === 'sport'
    )

    if (shouldGetSportContent) {
      setArticles((prevState) => [...prevState, ...data])
    } else if (!shouldGetSportContent) {
      setArticles((prevState) => [...prevState, ...data])
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
        window.alert(`${err.response.data.message}. Please try again ..`)
        // lots of ways to improve error handling. (I believe its depending on the needs of the user/client)
        // e.g MuiAlert looks amaizing. (https://mui.com/material-ui/react-snackbar/?fbclid=IwAR0PQVZwlzt8EWkw3cLMw-_Qjk3afaeY9c0yk2JJ8tdbqzmJm8w3KfiIPp4)
      }
    },
    [Fashion, Sports]
  )

  const value = useMemo(
    () => ({
      fetchArticles,
      removeArticles,
      articles,
      sortArticlesHandler,
    }),
    [fetchArticles, removeArticles, articles, sortArticlesHandler]
  )

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  )
}
