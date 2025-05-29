import React, { useState } from 'react';

const AdBox = ({ src, alt }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="article-ad">
      <button className="close-ad" onClick={() => setVisible(false)}>×</button>
      <img src={src} alt={alt || "ad"} />
    </div>
  );
};

export default AdBox;
