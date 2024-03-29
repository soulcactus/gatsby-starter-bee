import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div>
      {!isRoot && (
        <div className="top">
          <Link to={`/`} className="link">
            {title}
          </Link>
        </div>
      )}
      {/* <GitHubIcon /> */}
    </div>
  )
}
