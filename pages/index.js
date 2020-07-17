import Link from 'next/link'

export default function index({news}) {
  return (
    <>
      <h2>ニュース一覧</h2>
      <ul>
        {news.map(content => {
          console.log(content)
          return (
          <li key={content.id}>
            <Link href={`${content.id}`}>
              <a>{content.title}</a>
            </Link>
          </li>
          )
        })}
      </ul>
    </>
  )
}


export const getStaticProps = async () => {
  const key = {
    headers: {
      'X-API-KEY': process.env.apiKey
    }
  }
  const res = await fetch(
    `https://iricocco.microcms.io/api/v1/news/`,
    key
  )
  const resBody = await res.json()
  const news = resBody.contents.map(repo => {
    return ({
      id: `/news/${repo.id}`,
      title: `${repo.title}`
    })
  })
  return {
    props: {
      news: news
    }
  }
}
