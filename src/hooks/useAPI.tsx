import { useState, useEffect } from 'react';

interface Options {
    isFetch: boolean;
}

export function useAPI<T>(fetchFn: /* fetch fn에 대한 타입 */, options: Options) {
    const [data, setData] = useState<T[]>();

    // fetchFn을 호출해서 데이터 처리
    const fetchData = () => {

    }

    useEffect(() => {
        // isFetch가 true이면 fetchData
    }, [fetchFn])

    return {
        data,
    }
}
