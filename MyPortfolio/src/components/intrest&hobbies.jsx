import React from 'react';

const InterestHobbies = () => {
  return (
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold text-center mb-6 underline underline-offset-2">Interests & Hobbies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Programming & Development */}
        <div className="p-4 bg-zinc-800 rounded-lg shadow-md hover:scale-105 transform transition-all border border-green-600 border border-green-600">
          <h3 className="text-xl font-semibold mb-2 text-green-600 text-green-600">Programming & Development</h3>
          <p>
            Passionate about building applications and software solutions using cutting-edge technologies.
             I enjoy solving complex problems and learning new frameworks to enhance my skills.
          </p>
        </div>

        {/* Stock & Crypto Analysis */}
        <div className="p-4 bg-zinc-800 rounded-lg shadow-md hover:scale-105 transform transition-all border border-green-600">
          <h3 className="text-xl font-semibold mb-2 text-green-600">Stock & Crypto Markets</h3>
          <p>
            Enthusiastic about analyzing trends in the stock and cryptocurrency markets. I enjoy researching, buying shares and coins, and executing trading strategies effectively.
          </p>
        </div>

        {/* Cricket */}
        <div className="p-4 bg-zinc-800 rounded-lg shadow-md hover:scale-105 transform transition-all border border-green-600">
          <h3 className="text-xl font-semibold mb-2 text-green-600">Cricket</h3>
          <p>
            An avid cricket player who loves being part of a team. I enjoy the strategy and excitement of the game while continuously improving my skills.
          </p>
        </div>

        {/* Volleyball */}
        <div className="p-4 bg-zinc-800 rounded-lg shadow-md hover:scale-105 transform transition-all border border-green-600">
          <h3 className="text-xl font-semibold mb-2 text-green-600">Volleyball</h3>
          <p>
            I enjoy playing volleyball, where teamwork, agility, and quick decision-making play a crucial role. It’s a sport that keeps me active and energized.
          </p>
        </div>

        {/* Learning New Skills */}
        <div className="p-4 bg-zinc-800 rounded-lg shadow-md hover:scale-105 transform transition-all border border-green-600">
          <h3 className="text-xl font-semibold mb-2 text-green-600">Learning New Skills</h3>
          <p>
            Continuously exploring new areas in technology and finance, which helps me stay ahead and improve my professional and personal growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterestHobbies;
