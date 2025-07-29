import ResponsiveCard from './ResponsiveCard';
import * as styles from './ResponsiveGrid.css';

const dummyCards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];

export default function ResponsiveGrid() {
    return (
        <div className={styles.gridContainer}>
            {dummyCards?.map((text, idx) => {
                return <ResponsiveCard key={idx} text={text} />;
            })}
        </div>
    );
}
