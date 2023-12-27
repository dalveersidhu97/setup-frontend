import { getRandomQuizList } from "@/api/queries/getRandomQuiz";
import { ClientComponent, ClientComponent2 } from "./client-only";

export const Categories = async () => {
    const result = await (await getRandomQuizList()).json();
    return <div>
        <ClientComponent initialData={result}/>
    </div>
}

export const Categories2 = async () => {
    const result = await (await getRandomQuizList()).json();
    return <div>
        <ClientComponent2 initialData={result}/>
    </div>
}