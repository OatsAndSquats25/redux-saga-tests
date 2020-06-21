import React from 'react'

const Tweet = ({tweet}) => {

    return (
        <div className="tweet-wrap">
            <div className="tweet-text">{tweet.text}</div>
            <div>
                <small>{tweet.created_at}</small>
            </div>
        </div>
    )
}

export default Tweet;
