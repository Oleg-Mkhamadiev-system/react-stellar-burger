import styles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { data } from "../../utils/data";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredient";


function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <BurgerIngredients />
    </div>
  );
}

export default App;
