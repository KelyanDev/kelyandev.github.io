import { useState, useEffect } from 'react';

const useActiveSection = (sections) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element) {
          const { top, bottom } = element.getBoundingClientRect();

          if (i === sections.length - 1) {
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollPosition >= documentHeight) {
              setActiveSection(section);
              return;
            }
          } else {
            if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
              setActiveSection(section);
              return;
            }
          }
        }
      }

      setActiveSection(null);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return activeSection;
};

export default useActiveSection;
