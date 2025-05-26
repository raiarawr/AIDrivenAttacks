import React from 'react';

export default function Reflection() {
  return (
    <div className="w-full max-w-4xl text-center" id='reflection'>
            <div id="circuit-animation" className="absolute top-0 left-0 w-full h-full" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400">
          <span className="typing-container inline-block">Reflection on AI-Driven Attacks</span>
        </h1>

        <div className="ReflectionContent">
            <p className="mt-4">
              After learning about AI-driven attacks, I realized how powerful and dangerous artificial intelligence can be when used with harmful intent. Cybercriminals now use AI to make attacks faster, harder to detect, and more personalized, which makes defending against them more difficult. AI can help generate fake emails, clone voices, or even mimic real people to trick victims—things that used to take a lot of time and effort.
            </p>

            <p className="mt-4">
              What surprised me the most is how easy it has become for attackers to automate tasks that used to require a lot of human input. With AI tools, they can launch large-scale phishing attacks or crack passwords much more efficiently. It makes me think about how we are always one step behind in cybersecurity, trying to catch up with the latest threats. It’s scary to know that even regular people or small organizations can become victims without even realizing it.
            </p>

            <p className="mt-4">
              This topic made me more aware of the importance of cybersecurity education and ethical responsibility. Developers, companies, and users all have a role to play in keeping systems safe. I think we should push for stronger AI safety rules and encourage ethical practices in tech development. AI is not the enemy—but how people choose to use it can either protect or harm others. Understanding these risks is the first step toward building a more secure digital future.
            </p>
        </div>
      
    </div>
  );
}
