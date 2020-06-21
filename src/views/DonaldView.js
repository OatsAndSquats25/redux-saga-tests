import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {requestApiData} from "../actions"
import Tweet from "../components/Tweet";

const DonaldView = () => {
    const apiData = useSelector(state => state.api);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestApiData())
    }, [dispatch])

    if (!apiData.tweets) return <div>No tweets</div>

    return (
        <div>
            <h1 className="title">
                {apiData.title}
            </h1>
            {apiData.tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)}
        </div>
    )
}

export default DonaldView

