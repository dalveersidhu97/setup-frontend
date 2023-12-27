'use client';

import { useGetRandomQuiz, useGetRandomQuiz2 } from "@/api/queries/useGetRandomQuiz";
import { useState } from "react";

export const ClientComponent= ({ initialData }: { initialData: any}) => {
    const [quizList, setQuizList] = useState<{ category: string }[]>(initialData.results || []);
    const { refetch, isFetching } = useGetRandomQuiz({
        onSuccess: (data) => {
            setQuizList(data.results || []);
        },
        initialData: initialData
    });

    return <div>
        <div>
            Quiz Categories 
            <button disabled={isFetching} onClick={()=>refetch()} className="px-4 py-2 border disabled:opacity-50 hover:bg-gray-50 active:bg-gray-100">{isFetching?'Refreshing...': 'Refresh'}</button>
        </div>
        {quizList.map((quiz, i) => <div key={i}>{quiz.category}</div>)}
    </div>
}

export const ClientComponent2= ({ initialData }: { initialData: any}) => {
    const [quizList, setQuizList] = useState<{ category: string }[]>(initialData.results || []);
    const { refetch, isFetching } = useGetRandomQuiz2({
        onSuccess: (data) => {
            setQuizList(data.results || []);
        },
        initialData: initialData
    });

    return <div>
        <div>
            Quiz Categories 2
            <button disabled={isFetching} onClick={()=>refetch()} className="px-4 py-2 border disabled:opacity-50 hover:bg-gray-50 active:bg-gray-100">{isFetching?'Refreshing...': 'Refresh'}</button>
        </div>
        {quizList.map((quiz, i) => <div key={i}>{quiz.category}</div>)}
    </div>
}