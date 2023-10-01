import styles from './burger-constructor.module.css';

function BurgerConstructor () {
    const buns = useMemo(
        () => ingredients.filter((item) => item.typee === 'bun'),
        [ingredients]
    );

    const fillings = useMemo(
        () => ingredients.filter((item) => item.type === 'filling'),
        [ingredients]
    );

    return (
        <section className={`${styles.constructor-container} pt-25`}>
            <div className="pl-4">
                {buns.map((ingredient) => (
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={20}
                    thumbnail={img}
                  />
                ))}
            </div>
        </section>
    );
}