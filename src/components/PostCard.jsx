import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block transform transition duration-300 hover:scale-105">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Featured Image */}
        <div className="w-full h-56">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
