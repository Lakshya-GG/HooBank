import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Discover Superior Credit  <br className="sm:block hidden" />  Card Deals in a Few Simple Steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Navigate through your options with ease as we guide you in finding superior credit card deals that suit your needs, facilitated by a straightforward and efficient process.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
