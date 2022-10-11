export const handleAddQuiz = async (id) => {
    const quizesData = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`);
    const quizes = await quizesData.json();

    console.log(quizesData.url)
    return quizes;
}