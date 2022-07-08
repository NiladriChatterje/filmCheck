// eslint-disable-next-line
import './App.css';

export default function DetailBox({ movieData}){
    return <div
        id='DetailBox'
        className="DetailBox"
        onClick={() =>{
            document.getElementById('DetailBox').style.transition='ease-out';
            document.getElementById('DetailBox').style.transitionDuration='200ms';
            document.getElementById('DetailBox').style.transform='scale(0,0)';
            document.getElementById('DetailBox').style.visibility='hidden';
                    } }>
            <div
                className='DetailBox1'
                >
                    <div
                        className='DetailBox1-1'
                    >
                <div className='DetailBox-spanList'>
                <span 
                    className='DetailBox1-1-1'
                   >
                    {movieData.Title}
                </span>
                <div 
                className="DetailBox1-1-2-underline"></div>
                
                <span 
                    className="DetailBox1-1-3"
                   >
                   {movieData.Year}
                </span>
                <span 
                    className="DetailBox1-1-3"
                   >
                    Released Date: &nbsp;&nbsp;&nbsp;&nbsp; {movieData.Released}
                </span>
                <span 
                    className="DetailBox1-1-3"
                   >
                    RunTime: &nbsp;&nbsp;&nbsp;&nbsp;{movieData.Runtime}
                </span>
                <span 
                    className="DetailBox1-1-3"
                   >
                    {movieData.Genre}
                </span>
                <span 
                    className="DetailBox1-1-3"
                   >
                  Director  <br /> {movieData.Director}
                </span>


                <div 
                className="DetailBox1-1-2-underline"></div>
                <span 
                    className="DetailBox1-1-3"
                   >
                Actors :<br /> <br /> {movieData.Actors}
                </span>
                <div 
                className="DetailBox1-1-2-underline"></div>
                <span 
                    className="DetailBox1-1-3"
                   >
                  Writers  <br /> {movieData.Writer}
                </span>
                {movieData.Awards !== "N/A"?
                <span 
                className="DetailBox1-1-3"
               >
              Awards:  <br /> {movieData.Awards}
            </span>:''}
           
                </div>
                <div
                className="DetailBox1-2-img"
                >
                 <img src={movieData.Poster !== "N/A" ? movieData.Poster : "https://createcustomwishes.com/wp-content/uploads/2019/05/Sorry_Greetings-400x400.jpg"} alt={movieData.Title} />
                 </div>
                 {movieData.Languages !== "N/A"?
                <span 
                className="DetailBox1-1-3"
               >
              Language:  <br /> {movieData.Language}
            </span>:''}
                 <div 
                className="DetailBox1-1-5-underline"></div>
                </div>


                <div 
                className="DetailBox1-1-4-underline"></div>

                <div className='plot'>
               <span>Plot:</span>
               <div 
                className="DetailBox1-1-6-underline"></div>
                <span>{movieData.Plot}</span>
            </div>
            </div>
            
    </div>
}