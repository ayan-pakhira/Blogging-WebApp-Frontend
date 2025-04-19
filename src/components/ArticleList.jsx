export default function ArticleList() {
    return (
      <section className="px-8 py-10">
        <h3 className="text-2xl font-semibold mb-4">Latest Articles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Article {item}</h4>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet...</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  