export default function Categories() {
    return (
      <section className="bg-gray-100 px-8 py-10">
        <h3 className="text-2xl font-semibold mb-4">Categories</h3>
        <div className="flex gap-4 flex-wrap">
          {["Tech", "Design", "Food", "Travel", "Lifestyle"].map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 bg-white shadow rounded-full text-sm hover:bg-indigo-100 cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>
    );
  }
  