import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Write from './pages/WriteBlog';

import Hero from './components/Hero';
import Categories from './components/Categories';
import LatestArticles from './components/ArticleList';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';

function App() {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="mt-20 px-4">
        <SearchBar onSearch={handleSearch} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <ArticleList />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/write" element={<Write />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
