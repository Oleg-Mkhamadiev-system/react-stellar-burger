import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";


function App() {
  
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className="content-container">
        <BurgerIngredients ingredients={ingredients} />
      </main>
      
    </div>
  );
}

export default App;
