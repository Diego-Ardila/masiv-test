import { useEffect, useState } from 'react';
import MyRating from '../components/Rating';
import { GetRandomComic } from '../utils/httpRequests';
import '../styles/Comics.css';

function Comics() {
  const [comic, setComic] = useState({})
  const [rate, setRate] = useState(1)
  const [refresh, setRefresh] = useState(false)

  useEffect(()=>{
    const errorCatcher = async () => {
      try{
        const id = Math.floor(Math.random() * 2391) + 1;
        const data = await GetRandomComic(id)
        setComic(data)
      }catch(err){
        console.log(err)
      }
    }
    errorCatcher()
  },[refresh])

  return (
    <div className="Comics">
      <h1 className="title">Welcome to "The Random Comic Store"</h1>
      <h2 className="comic-title">{comic.title}</h2>
      <img className="comic-img" alt={comic.transcript} src={comic.img} />
      <MyRating
        className="rating"
        rate={rate}
        setRate={setRate}
      />
      <div className="button-container">
        <button className="button" onClick={()=>setRefresh(prev=>!prev)} >New Comic</button>
      </div>
    </div>
  );
}

export default Comics;