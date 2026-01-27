import styles from './SectionContent.module.css';
import Checkbox from '../ui/Checkbox';
import Input from '../ui/Input';

export default function SectionC() {
    const categories = [
        'Fashion / Runway', 'Commercial', 'Editorial', 'Beauty',
        'Fitness', 'Plus-Size', 'Petite', 'Alternative / Creative',
        'Lifestyle', 'Promotional / Brand Model'
    ];

    return (
        <div className={styles.container}>
            <p className={styles.introText}>Tick all that apply to your profile.</p>

            <div className={styles.checkGrid}>
                {categories.map(cat => (
                    <Checkbox key={cat} label={cat} name="category" value={cat} />
                ))}
            </div>

            <Input label="Other category (please specify)" name="categoryOther" placeholder="Specify here..." />
        </div>
    );
}
