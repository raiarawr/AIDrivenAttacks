import React, { useState } from 'react';

export default function News() {
  const [apiArticles, setApiArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const curatedArticles = [
    {
      title: "Claude AI Exploited to Operate 100+ Fake Political Personas in Global Influence Campaign",
      description: "Artificial intelligence (AI) company Anthropic has revealed that unknown threat actors leveraged its Claude chatbot for an influence-as-a-service operation to engage with authentic accounts across Facebook and X.",
      url: "https://thehackernews.com/2025/05/claude-ai-exploited-to-operate-100-fake.html",
      publishedAt: "2025-05-01"
    },
    {
      title: "Deepfakes of Elon Musk are contributing to billions of dollars in fraud losses in the U.S.",
      description: "Advances in technology are making it easier to create deepfake videos. All a person who's familiar with AI needs to make one is a single still image and a video recording.",
      url: "https://www.cbsnews.com/news/deepfakes-ai-fraud-elon-musk/",
      publishedAt: "2024-11-24T15:28:00"
    },
    {
      title: "Teen victim of AI-generated deepfake pornography urges Congress to pass Take It Down Act",
      description: "A classmate took a picture from Elliston's Instagram, ran it through an artificial intelligence program that appeared to remove her dress and then sent around the digitally altered image on Snapchat.",
      url: "https://www.cbsnews.com/news/deepfake-pornography-victim-congress/",
      publishedAt: "2024-12-18T19:47:00"
    }
  ];

  const handleShowMore = () => {
    setShowMore(true);
    setLoading(true);
    fetch(
      'https://newsapi.org/v2/everything?q=AI+cyberattack+threat+deepfake&sortBy=publishedAt&apiKey=031b61d14b764ec5a4a2e757640b3d08&pageSize=5'
    )
      .then(res => res.json())
      .then(data => {
        setApiArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setApiArticles([]);
        setLoading(false);
      });
  };

  return (
    <div className="w-full max-w-4xl text-center " id='news'>
        <div id="circuit-animation" className="absolute top-0 left-0 w-full h-full" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400">
          <span className="typing-container inline-block">Latest AI Attack News</span>
        </h1>

      {/* Curated Articles */}
      <div className="curatedArt grid grid-cols-1 md:grid-cols-2 gap-3">
        {curatedArticles.map((a, i) => (
          <a
            key={i}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-2 text-cyan-400">{a.title}</h2>
            <p className="text-gray-300">{a.description}</p>
            <p className="text-xsm text-gray-400 mt-3">{new Date(a.publishedAt).toLocaleString()}</p>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      {!showMore && (
        <div className="text-center mt-10">
          <button
            onClick={handleShowMore}
            className="techy-button bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-full transition-all"
          >
            Show More News
          </button>
        </div>
      )}

      {/* NewsAPI Articles */}
      {showMore && (
        <div className="nigga mt-12">
          <h2 className="moreNews text-2xl font-semibold mb-4 text-red-400">More AI News</h2>
          {loading ? (
            <p className="text-gray-400">Loading more news...</p>
          ) : (
            <div className="moreNewsContent grid grid-cols-1 md:grid-cols-2 gap-6">
              {apiArticles.map((a, i) => (
                <a
                  key={i}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="newsAPI hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold text-cyan-400">{a.title}</h3>
                  <p className="text-gray-300 mt-1">{a.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{new Date(a.publishedAt).toLocaleString()}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
