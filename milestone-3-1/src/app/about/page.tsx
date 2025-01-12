import React from 'react';

const About = () => {
  return (
    <div>
      {/* Blog Introduction Section */}
      <section className="py-20 px-28">
        <h2 className="text-4xl text-black font-bold text-center mb-6">About Our Blog</h2>
        <p className="text-xl text-gray-700 text-center">
          Welcome to our blog! Here, we share insights on the latest trends in technology, software development, and business. Our aim is to educate and inspire readers with quality content on various topics.
        </p>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-gray-100">
        <h3 className="text-3xl font-bold text-black text-center mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is simple: to provide valuable content that helps individuals and businesses stay ahead of the curve in the ever-evolving tech world. Whether you're a developer, entrepreneur, or enthusiast, you'll find something here to inspire you.
        </p>
      </section>

      {/* Blog Vision Section */}
      <section className="py-20">
        <h3 className="text-3xl font-bold text-black text-center mb-4">Our Vision</h3>
        <p className="text-lg text-gray-700 mb-6">
          We envision creating a community of like-minded individuals who are passionate about technology and business innovation. We aim to bring thought-provoking, engaging, and actionable content to our readers.
        </p>
      </section>

      {/* Founder/Team Section */}
      <section className="py-20">
        <h3 className="text-3xl font-bold text-black text-center mb-6">Meet the Team</h3>
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <img
              src="/team-founder.jpg"
              alt="Founder"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold">John Doe</h4>
            <p className="text-lg text-gray-600">Founder & Chief Blogger</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h3 className="text-3xl text-black font-bold mb-6">Join Our Community</h3>
        <p className="text-lg text-gray-700 mb-6">
          Interested in the latest blog posts and updates? Subscribe to our newsletter to stay informed about all the latest content.
        </p>
        <a
          href="/subscribe"
          className="bg-purple-950 text-white py-3 px-6 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200"
        >
          Subscribe Now
        </a>
      </section>
    </div>
  );
};

export default About;
