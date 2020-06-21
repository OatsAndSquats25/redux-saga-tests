import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {requestApiData} from "../actions"

const DonaldView = () => {
    const apiData = useSelector(state => state.api);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestApiData())
    }, [dispatch])

    return (
        <div>
            Donald <br/>
            {apiData.results && apiData.results.map(result =>
            <div>{result.gender}</div>
            )}
        </div>
    )
}

export default DonaldView

