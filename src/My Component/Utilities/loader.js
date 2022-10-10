export const getLoaderData = async()=>{
    const quizData = await fetch('https://openapi.programming-hero.com/api/quiz')
    const quiz = await quizData.json()

    return quiz
}