import styles from "../styles/DishesList.module.css";
import DishCard from "./DishCard";

const DishesList = ({dishesList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST DISHES IN THE CITY</h1>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam,
        harum molestias ipsum dolore deserunt sed ut quod quasi incidunt iure
        atque omnis perspiciatis officiis non voluptatibus dolorum possimus.
        Tenetur laborum, neque maxime, fugiat commodi repellat officiis error
        corrupti tempore rerum consequuntur deleniti excepturi eos quam rem
        voluptas est. Excepturi.
      </p>
      <div className={styles.wrapper}>
        {dishesList.map((dish) => (
          <DishCard key={dish._id} dish={dish}/>
        ))}
      </div>
    </div>
  );
};

export default DishesList;
