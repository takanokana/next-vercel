
const BlogId = ({blog}) => {
  console.log(blog)
  return (
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{__html: `${blog.content}`}}></div>
    </div>
  )
}

export const getStaticPaths = async() => {
  const key = {
    headers: {
      'X-API-KEY': process.env.apiKey
    }
  }

  const res = await fetch('https://iricocco.microcms.io/api/v1/news', key)
  const resBody = await res.json()
  const paths = resBody.contents.map(repo => `/news/${repo.id}`)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async context => {
  const id = context.params.id

  const key = {
    headers: {
      'X-API-KEY': process.env.apiKey
    }
  }
  const res = await fetch(
    `https://iricocco.microcms.io/api/v1/news/${id}`,
    key
  )
  const blog = await res.json()

  return {
    props: {
      blog: blog
    }
  }
}

export default BlogId
