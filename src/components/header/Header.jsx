import css from "./Header.module.css";
import { useSelector } from 'react-redux';

export default function Header() {
  const auth = useSelector( (state) => state.auth.data)

  return (
    <div className="container">
      Header
      <div>
        {
          auth 
            ? "Авторизован"
            : "Не авторизован"
        }
      </div>
    </div>
  )
};
