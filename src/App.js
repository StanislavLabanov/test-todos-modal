import { Route, Routes } from "react-router-dom";
import ActivePosts from "./components/ActivePosts";
import NotActivePosts from "./components/NotActivePosts";
import PostsPage from "./components/PostsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/active" element={<ActivePosts />} />
      <Route path="/notodos" element={<NotActivePosts />} />
    </Routes>
  );
}

export default App;
