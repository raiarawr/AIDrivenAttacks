import React, { useState } from 'react';
import {
  ShieldAlert,
  MailWarning,
  Mic2,
  VideoOff,
  LockKeyhole,
} from 'lucide-react';

export default function Discussion() {
  const [comments, setComments] = useState([
    { id: 1, text: 'AI-driven phishing attacks are becoming more convincing!' },
    { id: 2, text: 'We should develop better AI defense mechanisms.' },
  ]);
  const [input, setInput] = useState('');
  const [showMore, setShowMore] = useState(false);

  const addComment = () => {
    if (!input.trim()) return;
    setComments([...comments, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" id="discussion">
        <div id="circuit-animation" className="absolute top-0 left-0 w-full h-full" />
      <div className="w-full max-w-4xl text-center mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400">
          <span className="typing-container inline-block">AI-Driven Attacks</span>
        </h1>

        <div className="mb-12 text-justify">
          <p className="mb-4">
            What happens when hackers use smart machines to launch attacks?
            AI-driven attacks are no longer science fiction — they’re real, fast,
            and hard to detect. From fake voices to realistic scam emails, AI
            helps criminals trick people more easily than ever. But how do these
            attacks really work, and what can we do to protect ourselves?
          </p>
          <p>
            AI-driven attacks are cyberattacks that use artificial intelligence (AI)
            to do the work of a hacker. These attacks are faster, more advanced,
            and harder to detect. With AI, a hacker can create fake voices,
            realistic emails, deepfake videos, and find weaknesses in systems — 
            all with little human effort.
          </p>
        </div>

        {!showMore && (
          <button
            className="techy-button mt-20 mb-8 bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded transition"
            onClick={() => setShowMore(true)}
          >
            Is it really that important?
          </button>
        )}

        {showMore && (
          <>
            <div className="afterBtn mb-6">
              <h2 className="text-2xl font-semibold mb-2">Is It Really That IMPORTANT?</h2>
              <p className='text-justify"'>
                Yes, and here’s why. These attacks are more powerful and dangerous
                than traditional ones. AI makes everything look real — emails that
                sound like your school or bank, fake videos, and even cloned voices
                that trick people into giving away sensitive info.
              </p>
            </div>

            <div className="grid grid-cols-4 xlg:grid-cols-4 xsm:grid-cols-1 lg:grid-cols-1 gap-4 mb-8 w-full max-w-6xl mx-auto px-4">
              <div className="glass-card text-center p-4">
                <MailWarning className="mx-auto text-yellow-400" size={36} />
                <p className="font-semibold mt-2">Fake Emails or Texts</p>
                <p className="text-sm mt-1">AI can write perfect scam messages that look legit.</p>
              </div>
              <div className="glass-card text-center p-4">
                <Mic2 className="mx-auto text-pink-400" size={36} />
                <p className="font-semibold mt-2">Voice Scams</p>
                <p className="text-sm mt-1">Fake calls using cloned voices of your loved ones.</p>
              </div>
              <div className="glass-card text-center p-4">
                <VideoOff className="mx-auto text-red-400" size={36} />
                <p className="font-semibold mt-2">Deepfakes</p>
                <p className="text-sm mt-1">Realistic fake videos that mislead or damage reputation.</p>
              </div>
              <div className="glass-card text-center p-4">
                <LockKeyhole className="mx-auto text-green-400" size={36} />
                <p className="font-semibold mt-2">Stolen Info</p>
                <p className="text-sm mt-1">AI tricks you into giving logins, money, or files.</p>
              </div>
            </div>

            <h2 className="vidSection text-2xl font-semibold mb-4">More About AI Attacks</h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-10">
              <div>
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src="https://www.youtube.com/embed/YBE6hq-OTFI"
                  title="What is Shadow AI?"
                  allowFullScreen
                />
                <a
                  href="https://youtu.be/YBE6hq-OTFI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 mt-2 hover:underline"
                >
                  What is Shadow AI? The Dark Horse of Cybersecurity Threats
                </a>
              </div>
              <div>
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src="https://www.youtube.com/embed/l2zyhVt4A7I"
                  title="AI-powered cyberattacks"
                  allowFullScreen
                />
                <a
                  href="https://youtu.be/l2zyhVt4A7I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 mt-2 hover:underline"
                >
                  AI-powered Cyberattacks: Dangers of AI
                </a>
              </div>
              <div>
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src="https://www.youtube.com/embed/YWGZ12ohMJU"
                  title="Dark Side of AI"
                  allowFullScreen
                />
                <a
                  href="https://youtu.be/YWGZ12ohMJU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 mt-2 hover:underline"
                >
                  Dark Side of AI - How Hackers Use AI & Deepfakes (TEDx)
                </a>
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="board text-2xl font-semibold mb-3">Discussion Board</h2>
              <textarea
                className="textBox w-full p-3 text-black rounded-lg border border-gray-300 mb-3"
                rows="3"
                placeholder="Add your comment about AI attacks..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={addComment}
                className="postCmt bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded transition"
              >
                Post Comment
              </button>
              <ul className="mt-5  space-y-3 text-justify">
                {comments.map((c) => (
                  <li key={c.id} className="border-b border-white/20 pb-2">{c.text}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
