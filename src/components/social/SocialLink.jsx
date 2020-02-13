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
    <div className='paperButton'>
      <a
        key={props.linkType}
        href={props.url}
        target="blank"
        className={`fa social`}
      >
        <FontAwesomeIcon icon={getIcon()} size='2x' />
      </a>
    </div>

  )
}