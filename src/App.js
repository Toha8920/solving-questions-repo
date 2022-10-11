import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statics from './components/Statics/Statics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';
import { handleQuiz } from './components/Home/Home'
import Question from './components/Question/Question';
import Question1 from './components/Question1/Question1';
import { handleAddQuiz } from './loaders/handleQuiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch(` https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Home></Home>
        },
        {
          path: 'topics',
          element: <Topics></Topics>
        },
        {
          path: '/statics',
          element: <Statics></Statics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: `/quiz/:id`,
          loader: ({ params }) => {
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Question1></Question1>
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
