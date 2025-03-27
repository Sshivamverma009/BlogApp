import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap bg-white p-6 shadow-md rounded-lg">
  {/* Left Section */}
  <div className="w-full md:w-2/3 px-4">
    <Input
      label="Title"
      placeholder="Enter title"
      className="mb-4 w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400"
      {...register("title", { required: true })}
    />

    <Input
      label="Slug"
      placeholder="Auto-generated or edit manually"
      className="mb-4 w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400"
      {...register("slug", { required: true })}
      onInput={(e) => {
        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
      }}
    />

    {/* Rich Text Editor */}
    <RTE
      label="Content"
      name="content"
      control={control}
      defaultValue={getValues("content")}
      className="border rounded-lg"
    />
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/3 px-4 mt-6 md:mt-0">
    {/* File Input with Styling */}
    <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
    <input
      type="file"
      accept="image/png, image/jpg, image/jpeg, image/gif"
      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      {...register("image", { required: !post })}
    />

    {/* Show Existing Image if Post Exists */}
    {post && (
      <div className="w-full mb-4 mt-4">
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="rounded-lg shadow-md w-full"
        />
      </div>
    )}

    {/* Status Select Dropdown */}
    <Select
      options={["active", "inactive"]}
      label="Status"
      className="mb-4 w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-blue-400"
      {...register("status", { required: true })}
    />

    {/* Submit Button */}
    <Button
      type="submit"
      className={`w-full p-3 text-white font-semibold rounded-lg transition ${
        post ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {post ? "Update Post" : "Submit Post"}
    </Button>
  </div>
</form>

    );
}
