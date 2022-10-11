export const handleAddQuiz = async (id) => {
    const quizesData = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`);
    const quizes = await quizesData.json();

    <h1>{quizesData.url}</h1>
    return { quizes: quizes };
}