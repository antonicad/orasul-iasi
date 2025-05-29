import React, { useState } from 'react';

const AdBox = ({ src, alt }) => {
  const [visible, setVisible] = useState(true);


  return (
    <div className="article-ad">
      <button className="close-ad" onClick={() => setVisible(false)}>×</button>
      <img src={src} alt={alt || "ad"} />
    </div>
  );
};

export default AdBox;
