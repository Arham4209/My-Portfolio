import React, { useState, useEffect } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({ percentage, color }) => {
  const { ref, inView } = useInView({ triggerOnce: true }); // Trigger once when in view
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const [width, setWidth] = useState(window.innerWidth * 0.8); // Set initial width
  const height = 6;

  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      setAnimatedWidth(percentage); // Animate to the percentage value when in view
    }
  }, [inView, percentage]);

  // Update width on window resize
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth * 0.8);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <svg ref={ref} width={width} height={height}>
      <Group>
        {/* Background */}
        <Bar x={0} y={0} width={width} height={height} fill="#e0e0e0" rx={5} ry={5} />
        {/* Foreground with animation */}
        <Bar
          x={0}
          y={0}
          width={(animatedWidth / 100) * width} // Animate this width
          height={height}
          fill={`#ff7f50`}
          rx={5}
          ry={5}
          style={{ transition: 'width 2s ease-in-out' }} // Smooth animation
        />
      </Group>
    </svg>
  );
};

export default ProgressBar;
