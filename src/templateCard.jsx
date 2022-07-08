import React from 'react';


const TemplateCard = ({ movie:{imdbID,Year,Poster,Title,Type}, setImdbID}) => {
  


  return (
    <div className="movie" key={imdbID}
    onClick={() => {
                    document.getElementById('DetailBox').style.visibility='visible';
                    document.getElementById('DetailBox').style.transition='ease-in';
                    document.getElementById('DetailBox').style.transitionDuration = '100ms'
                    document.getElementById('DetailBox').style.transform='scale(1,1)';
                    setImdbID(imdbID);
                    }}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://createcustomwishes.com/wp-content/uploads/2019/05/Sorry_Greetings-400x400.jpg"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default TemplateCard;