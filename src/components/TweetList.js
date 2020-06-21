import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {requestApiData} from "../actions";
import Tweet from "./Tweet";

const TweetList = ({screenName}) => {
    const apiData = useSelector(state => state.api);
    const dispatch = useDispatch();

    useEffect(() => {
        const requestParams = {
            screen_name: screenName
        }
        dispatch(requestApiData(requestParams))
    }, [dispatch, screenName])

    if (!apiData.tweets) return <div>No tweets</div>

    return (
        <div>
            <h1 className="title">
                {apiData.screen_name}
            </h1>
            {apiData.tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>)}
        </div>
    )
}

export default TweetList;
