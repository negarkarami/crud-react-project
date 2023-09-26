import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import IndexUsers from "./pages/users/Index";
import ShowUser from "./pages/users/Show";
import IndexPosts from "./pages/posts/Index";
import ShowPosts from "./pages/posts/Show";
import CreatePost from "./pages/posts/Create";
import EditPosts from "./pages/posts/EditPosts";
function App() {
  return (
      <>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/users" element={<IndexUsers/>}/>
                  <Route exact path="/users/:userId" element={<ShowUser/>}/>
                  <Route exact path="/posts" element={<IndexPosts/>}/>
                  <Route exact path="/posts/:postId" element={<ShowPosts/>}/>
                  <Route exact path="/posts/create" element={<CreatePost/>}/>
                  <Route exact path="/posts/edit/:postId" element={<EditPosts/>}/>

              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
