
export const getRandomQuizList = () => fetch('https://opentdb.com/api.php?amount=10', { cache: 'no-store' });