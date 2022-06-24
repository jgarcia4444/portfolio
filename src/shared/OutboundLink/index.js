import React from 'react';
import '../../styles/OutboundLink.css'

const OutboundLink = ({content, to}) => {

    return (
        <a className="outbound-link" target="_blank" href={to}>{content}</a>
    )
}

export default OutboundLink;