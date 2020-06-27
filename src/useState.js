import { useEffect, useState } from 'react';
import WikipediaApi from './api/wikipedia';

const useStateInfo = (state) => {

    const [stateInfo, setStateInfo] = useState(null);

    const fetchStateInfo = (stateToFetch) => {
        WikipediaApi
            .summary(stateToFetch)
            .then(data => {
                setStateInfo({
                    summery: data
                });
            })
            .catch(error => {
                setStateInfo('Unable to fetch state info');
            });
    };

    useEffect(() => {
        fetchStateInfo(state);
    }, [state]);

    return [stateInfo, fetchStateInfo];
};

export default useStateInfo;