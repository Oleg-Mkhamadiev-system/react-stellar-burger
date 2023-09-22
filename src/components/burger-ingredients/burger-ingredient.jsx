import { Tabs } from '../tabs/tabs';
import styles from './burger-ingredients.module.css';
import { IngredientItem } from '../ingredient-item/ingredient-item';
import { useMemo } from 'react';
import { ingredientPropType } from '../../utils/prop-types';


export function BurgerIngredients () {
    const buns = useMemo(
        () => items.filter(item => item.type === "bun"),
        [items]
    );

    const sauces = useMemo(
        () => items.filter(item => item.type === "sauce"),
        [items]
    );

    const fillings = useMemo(
        () => items.filter(item => item.type === "filling"),
        [items]
    );

    return (
        <section className={styles.container}>
            <h1 className="text text_type_main-large pt-10">Соберите бургер</h1>
            <Tabs />
            <section className={`custom-scroll pt-10 ${styles.ingredientsContainer}`}>
                <h2 className="text text_type_main-medium">Булки</h2>
                <ul className={`${styles.ingredientList}`}>
                    {buns.map(item => (
                        <IngredientItem
                        item={item}
                        count={count}
                        key={item._id} />
                    ))}
                </ul>
                <h2 className="text text_type_main-medium">Соусы</h2>
                <ul className={`${styles.ingredientList}`}>
                    {sauces.map(item => (
                        <IngredientItem
                        item={item}
                        key={item._id}/>
                    ))}
                </ul>
                <h2 className="text text_type_main-medium">Начинки</h2>
                <ul className={`${styles.ingredientList}`}>
                    {fillings.map(item => (
                        <IngredientItem
                        item={item}
                        key={item._id}/>
                    ))}
                </ul>
            </section>
        </section>
    );
};

BurgerIngredients.propTypes = {
    items: PropTypes.arrayOf(ingredientPropType)
};