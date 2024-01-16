import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection, doc, addDoc } from "firebase/firestore";

const Feed = () => {
  const [user, setUser] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPostContent("");
  };
  // const handlePost = () => {
  //   closePopup();
  // };

  useEffect(() => {
    const getUserNames = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUser(filteredData);
      } catch (err) {
        console.error("err");
      }
    };
    getUserNames();
  }, []);

  const handlePost = async () => {
    try {
      await addDoc(usersCollectionRef, {
        posts: postContent,
      });
    } catch (err) {
      console.error(err);
    }
    closePopup();
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex justify-start">
        <button
          type="button"
          className="bg-red-500 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline mt-12  "
          onClick={openPopup}
        >
          Write
        </button>

        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-gray-800 opacity-75"
              onClick={closePopup}
            ></div>
            <div className="bg-white p-8 w-96 rounded shadow-lg z-50">
              <h2 className="text-2xl font-bold mb-4">Write a Post</h2>
              <textarea
                className="w-full h-32 border rounded p-2 mb-4"
                placeholder="Write your post here..."
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="bg-red-500 text-white font-bold py-1.5 px-5 rounded-md focus:outline-none focus:shadow-outline "
                  onClick={handlePost}
                >
                  Post
                </button>
                <button
                  type="button"
                  className="text-stone-700 font-bold py-1.5 px-5 border-2 rounded-xl focus:outline-none focus:shadow-outline "
                  onClick={closePopup}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {user.map((eachUser, id) => (
          <div
            key={id}
            className="border-1 border-gray-100 rounded p-4 shadow-md mt-10 w-96"
          >
            <h1 className="text-xl font-semibold mb-2">{eachUser.userName}</h1>
            <p>{eachUser.posts}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
