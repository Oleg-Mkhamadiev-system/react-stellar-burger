import { Tab } from '../tab/tab';
import styles from './burger-ingredients.module.css';


function BurgerIngredients () {
    return (
        <section className={styles.container}>
            <h1 className="text text_type_main-large pt-10">Соберите бургер</h1>
            <Tab />
            <section className={`custom-scroll pt-10 ${styles.ingredientsContainer}`}>
                <h2 className="text text_type_main-medium"></h2>
                <ul></ul>
                <ul></ul>
                <ul></ul>
            </section>
        </section>
    )
}