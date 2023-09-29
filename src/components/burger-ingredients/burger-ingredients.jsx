import { useMemo } from 'react';
import { Tabs } from '../tabs/tabs';
import styles from './burger-ingredients.module.css';
import IngredientItem from '../ingredient-item/ingredient-item';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';


function BurgerIngredients ({ ingredients }) {
    const buns = useMemo(
        () => ingredients.filter((item) => item.type === "bun"),
        [ingredients]
    );

    const sauces = useMemo(
        () => ingredients.filter((item) => item.type === "sauce"),
        [ingredients]
    );

    const fillings = useMemo(
        () => ingredients.filter((item) => item.type === "filling"),
        [ingredients]
    );

    return (
        <section className={styles.container}>
            <h1 className="text text_type_main-large pt-10">Соберите бургер</h1>
            <Tabs />
            <div className={`custom-scroll pt-10 ${styles.ingredientsContainer}`}>
                <h2 className="text text_type_main-medium">Булки</h2>
                <ul className={`${styles.ingredientList}`}>
                    {buns.map((item) => (
                        <IngredientItem
                        item={item}
                        count={1}
                        key={item._id} />
                    ))}
                </ul>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <ul className={`${styles.ingredientList}`}>
                    {sauces.map((item) => (
                        <IngredientItem
                        item={item}
                        key={item._id} />
                    ))}
                </ul>
                <h2 className="text text_type_main-medium">Начинки</h2>
                <ul className={`${styles.ingredientList}`}>
                    {fillings.map((item) => (
                        <IngredientItem
                        item={item}
                        key={item._id} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
};

export default BurgerIngredients;