import styles from './burger-constructor.module.css';
import { DragIcon, CurrencyIcon, 
    ConstructorElement, Button 
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { ingredientPropType } from '../../utils/prop-types';
import PropTypes from 'prop-types';

function BurgerConstructor ({ ingredients }) {
    const buns = useMemo(
        () => ingredients.filter((item) => item.typee === "bun"),
        [ingredients]
    );

    const mains = useMemo(
        () => ingredients.filter((item) => item.type !== "bun"),
        [ingredients]
    );

    return (
        <div className={`${styles.burgerContainer} pt-25 pl-10`}>
            <section className="pl-4">
                {buns.map((ingredient) => (
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${ingredient.name} (верх)`}
                    price={ingredient.price}
                    thumbnail={ingredient["image_mobile"]}
                  />
                ))}
            </section>
            <section className={`custom-scroll ${styles.componentsContainer}`}>
                <ul className={styles.componentsList}>
                    {mains.map((ingredient) => (
                        <li className={`${styles.componentsItem}`}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                            key={ingredient._id}
                            isLocked={false}
                            text={`${ingredient.name}`}
                            price={ingredient.price}
                            thumbnail={ingredient["image_mobile"]}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section className="pl-4 pb-4">
                {buns.map((ingredient) => (
                    <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${ingredient.name} (верх)`}
                    price={ingredient.price}
                    thumbnail={ingredient["image_mobile"]}
                  />
                ))}
            </section>
            <section className={`${styles.infoContainer}`}>
                <span className="text text_type_main-large">610</span>
                <div className={`${styles.iconContainer}`}>
                  <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="large">Оформить заказ
                </Button>
            </section>
        </div>
    );
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired
};

export default BurgerConstructor;