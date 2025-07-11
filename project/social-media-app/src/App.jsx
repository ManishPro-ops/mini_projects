import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedtab, setSelectedtab] = useState("Home");

  return (
    <PostListProvider >
      <div className="app-container">
        <Sidebar setSelectedtab={setSelectedtab} selectedtab={selectedtab} />
        <div className="content">
          <Header />
          {selectedtab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
