import './App.css';
import AuthProvider from './context/AuthContext';
import BlogProvider from './context/BlogContext';
import AppRouter from './router/AppRouter';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BlogProvider>
          <AppRouter />
          <ToastContainer />
        </BlogProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
