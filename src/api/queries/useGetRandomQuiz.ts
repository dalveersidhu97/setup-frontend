import { UseQueryOptions, useQuery } from "react-query";
import { getRandomQuizList } from "./getRandomQuiz";

type Question = { category: string };
type Res = {
    results: Question[]
}

export const useGetRandomQuiz = (options: UseQueryOptions<any, unknown, any, "getRandomQuiz">) => {
    return useQuery({
        queryKey: 'getRandomQuiz',
        queryFn: () => {
            console.log('getRandomQuiz');
            return getRandomQuizList().then((result)=>result.json())
        },
        ...options
    })
}

export const useGetRandomQuiz2 = (options: UseQueryOptions<any, unknown, any, "getRandomQuiz2">) => {
    return useQuery({
        queryKey: 'getRandomQuiz2',
        queryFn: () => {
            console.log('getRandomQuiz');
            return getRandomQuizList().then((result)=>result.json())
        },
        ...options
    })
}