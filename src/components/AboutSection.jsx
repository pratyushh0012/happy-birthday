import { useState } from "react";

export const AboutSection = () => {
  // React state for tab switching
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1Click = () => setActiveTab("tab1");
  const handleTab2Click = () => setActiveTab("tab2");

  // Example Reel links (replace with your own)
  const reels = [
    "https://www.instagram.com/reel/C66Ut6MN-Xu/",
    "https://www.instagram.com/reel/DLg4HnEhazo/",
    "https://www.instagram.com/reel/SHORTCODE_3/",
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Tab buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-800 rounded-full p-1 shadow-lg">
            <button
              onClick={handleTab1Click}
              className={`px-8 py-3 rounded-l-full font-semibold text-sm md:text-base transition-all duration-300 ${
                activeTab === "tab1"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Tab 1
            </button>

            <button
              onClick={handleTab2Click}
              className={`px-8 py-3 rounded-r-full font-semibold text-sm md:text-base transition-all duration-300 ${
                activeTab === "tab2"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Tab 2
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="max-w-3xl mx-auto">
          {/* Tab 1 Content */}
          {activeTab === "tab1" && (
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold">I like space</h3>
            </div>
          )}

          {/* Tab 2 Content */}
          {activeTab === "tab2" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center">Fun side</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {reels.map((url) => (
                  <div
                    key={url}
                    className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-[9/16]"
                  >
                    <iframe
                      src={`${url}embed`}
                      className="absolute inset-0 h-full w-full"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
