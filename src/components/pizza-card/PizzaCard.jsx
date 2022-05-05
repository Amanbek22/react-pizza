import { useDispatch } from "react-redux"
import { ACsetNewPizza } from "../../redux/actionCreators.js";



export default function PizzaCard({ title, name, info, file, id, isAdmin, ...props }) { 
  const imgUrl = "http://solid.lol/public/" + file
  const dispatch = useDispatch();

  const onBasket = () => {
    dispatch( ACsetNewPizza({title, name, info, file, id, ...props }) );
  }
  return (
    <div className="card" style={{width: "18rem"}}>
      <img 
        alt="Card image cap" 
        className="card-img-top" 
        src={ imgUrl || 
          "https://dodopizza-a.akamaihd.net/static/Img/Products/3401546fe43c42e9a05325a74c937ce4_366x366.jpeg"
        } 
      />
        <div className="card-body">
          <h5 className="card-title">{title || name}</h5>
          <h5 className="card-title">{props.price} сомов</h5>
          <p className="card-text">{info}</p>
          {
            isAdmin 
              ? <a href="#" className="btn btn-primary">Удалить</a>
              : <a href="#" onClick={onBasket} className="btn btn-primary">Выбрать</a>
          }          
        </div>
    </div>
  )
}
