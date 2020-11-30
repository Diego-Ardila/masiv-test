import Rating from 'react-rating';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/all.css';
//import '../styles/Rating.css'

const rates = {
    1: "Bad",
    2: "Regular",
    3: "Good",
    4: "Very Good",
    5: "Excellent"
}

function MyRating({rate, setRate}) {

  return (
      <div className="container">
        <Rating
          emptySymbol="far fa-star fa-2x"
          fullSymbol="fa fa-star fa-2x"
          onChange={val=>{
            setRate(val)
          }}
          initialRating={rate}
        />
        <div className="rate">{rates[rate]}</div>
      </div>
  );
}

export default MyRating;