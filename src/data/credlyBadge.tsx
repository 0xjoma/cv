import React, { useEffect } from 'react';

interface CredlyBadgeProps {
  badgeId: string;
  width?: number;
  height?: number;
}

const CredlyBadge: React.FC<CredlyBadgeProps> = ({ badgeId, width = 150, height = 270 }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      data-iframe-width={width} 
      data-iframe-height={height} 
      data-share-badge-id={badgeId} 
      data-share-badge-host="https://www.credly.com"
    />
  );
};

export default CredlyBadge;