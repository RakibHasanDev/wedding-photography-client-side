
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Route/Route';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className='body'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
