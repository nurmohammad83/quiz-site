
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './My Component/Utilities/router';

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App;
