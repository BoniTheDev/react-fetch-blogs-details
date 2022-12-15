// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props

  const {id, imageUrl, topic, title, avatarUrl, author} = blogData

  return (
    <Link to={`blogs/${id}`} className="blog-item-link">
      <li className="blog-list-item-container">
        <img src={imageUrl} alt={`item${id}`} className="blog-image" />
        <div className="blog-info-card">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="blog-author-card">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-image" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
