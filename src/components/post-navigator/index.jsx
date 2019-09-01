import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext

  return (
    <ul className="navigator">
      <li>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← 이전 포스트
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={next.fields.slug} rel="next">
            다음 포스트 →
          </Link>
        )}
      </li>
    </ul>
  )
}
