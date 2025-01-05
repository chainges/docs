// LinkNewTab.js
import React from 'react'

const LinkNewTab = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default LinkNewTab
