export default function WriteBlog() {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Write a New Blog Post</h2>
        <input type="text" placeholder="Title" className="input mb-4" />
        <textarea
          placeholder="Content..."
          className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none"
        />
        <button className="bg-indigo-600 text-white py-2 px-4 mt-4 rounded">
          Publish
        </button>
      </div>
    );
  }
  