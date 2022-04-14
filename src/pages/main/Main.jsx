import css from "./Main.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PizzaCard from "../../components/pizza-card/PizzaCard.jsx";
import { useSelector } from "react-redux";

export default function Main() {
  const pizzas = useSelector( (state) => state.pizza.data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div >
      <div className={css.slider}>
        <Slider  {...settings} className="container">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      <div className="container mt-5 mb-5">
        <h1>ПИЦЦА</h1>
        <div className={"pizzaWrapper"}>
          {
            pizzas?.map((item) => <PizzaCard key={item.id} {...item} />)
          }
        </div>
      </div>
    </div>
  )
};
