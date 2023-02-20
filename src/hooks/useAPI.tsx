import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import api from "../services/api";

interface Options {
  isFetch: boolean;
}

export function useAPI<T>(fetchFn: () => Promise<Entity<T>>, options: Options) {
  const [data, setData] = useState<T[]>();

  // fetchFn을 호출해서 데이터 처리
  const fetchData = async () => {
    const res = await fetchFn();

    setData(
      res.data.map((d) => {
        return d.attributes;
      })
    );

  };

  useEffect(() => {
    // isFetch가 true이면 fetchData
    if (options.isFetch) {
      fetchData();
    }
  }, [fetchFn]);

  return {
    data,
  };
}
    