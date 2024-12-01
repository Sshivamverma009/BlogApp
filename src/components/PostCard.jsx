import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Image Section */}
        <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="object-cover w-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-500 transition-colors duration-300">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
