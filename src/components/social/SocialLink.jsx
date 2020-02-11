import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {

  const getIcon = () => {
    const linkType = props.linkType.toLowerCase()
    if (linkType === 'email') {
      return (
        'envelope'
      )
    } else {
      return (
        ['fab', linkType]
      )
    }
  }

  return (
    <div className="circle">
      <a
        key={props.linkType}
        href={props.url}
        target="blank"
        className={`level-item fa social button`}
      >
        <FontAwesomeIcon icon={getIcon()} size='2x' />
      </a>
    </div>
  )
}