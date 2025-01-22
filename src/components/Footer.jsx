// import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { FaBluesky } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/ajaxtheroo" aria-label="GitHub">
        <FaGithub size={24} /> {/* GitHub icon */}
      </a>
      <a href="https://linkedin.com" aria-label="LinkedIn">
        <FaLinkedin size={24} /> {/* LinkedIn icon */}
      </a>
      <a href="https://bsky.app/profile/ajaxtheroo.bsky.social" aria-label="BLuesky">
        <FaBluesky size={24} /> {/* Bluesky icon */}
      </a>
    </footer>
  );
};

export default Footer;