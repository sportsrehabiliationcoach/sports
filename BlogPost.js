import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogPost({ id, title, content = '', image }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const truncatedContent = content.length > 100 ? content.substring(0, 100) + '..' : content;

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      navigate(`/blog/${id}`);
    }
  };

  const handleImageClick = () => {
    navigate(`/blog/${id}`);
  };

  const imageContainerStyle = {
    width: '250px',  
    height: '250px', 
    marginRight: '20px',  
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    border:'2px solid black'
  };

  const contentStyle = {
    flex: 1,  
    display: 'flex',
    flexDirection: 'column'
  };

  const btnStyle = {
    color:'white',
    backgroundColor:"green",
    borderRadius:'50px',
    height:'30px',
    width:'90px',
    border:'1px solid green'
  }

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' ,flexDirection:'column'}}>
      <div style={imageContainerStyle} onClick={handleImageClick}>
        <img src={image} alt={title} style={imageStyle} />
      </div>
      <div style={contentStyle}>
        <h3>{title}</h3>
        <p style = {{width: '280px'}}>{isExpanded ? content : truncatedContent}</p>
        <button onClick={toggleContent} style = {btnStyle}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default BlogPost;
