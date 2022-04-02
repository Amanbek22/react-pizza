


export default function PizzaCard({ title, description, img, ...props }) { 
  return (
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" 
        src={img || "	https://dodopizza-a.akamaihd.net/static/Img/Products/3401546fe43c42e9a05325a74c937ce4_366x366.jpeg"} 
        alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">{props.price} сомов</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}