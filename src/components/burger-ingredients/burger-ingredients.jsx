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
                <ul className={`${styles.ingredientsList} pl-4 pt-6 pb-10`}>
                    {buns.map((item) => (
                        <IngredientItem
                        count={1}
                        item={item}
                        key={item._id} />
                    ))}
                </ul>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <ul className={`${styles.ingredientsList} pl-4`}>
                    {sauces.map((item) => (
                        <IngredientItem
                        item={item}
                        key={item._id} />
                    ))}
                </ul>
                <h2 className="text text_type_main-medium">Начинки</h2>
                <ul className={`${styles.ingredientsList} pl-4`}>
                    {fillings.map((item) => (
                        <IngredientItem
                        count={1}
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