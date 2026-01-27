import styles from './SectionContent.module.css';
import RadioGroup from '../ui/Radio';
import Input from '../ui/Input';

export default function SectionG() {
    return (
        <div className={styles.container}>
            <p className={styles.disclosureNote}>
                This information is confidential and used for professional placement only.
            </p>

            <div className={styles.subSection}>
                <RadioGroup
                    label="Tattoos"
                    name="hasTattoos"
                    options={[
                        { value: 'none', label: 'None' },
                        { value: 'yes', label: 'Yes' }
                    ]}
                    value=""
                    onChange={() => { }}
                />
                <Input label="If yes, please specify location & size" name="tattooDetails" placeholder="Details..." />
            </div>

            <div className={styles.subSection}>
                <RadioGroup
                    label="Piercings (excluding ears)"
                    name="hasPiercings"
                    options={[
                        { value: 'none', label: 'None' },
                        { value: 'yes', label: 'Yes' }
                    ]}
                    value=""
                    onChange={() => { }}
                />
                <Input label="If yes, please specify" name="piercingDetails" placeholder="Details..." />
            </div>

            <div className={styles.subSection}>
                <RadioGroup
                    label="Visible Scars/Birthmarks"
                    name="hasScars"
                    options={[
                        { value: 'none', label: 'None' },
                        { value: 'yes', label: 'Yes' }
                    ]}
                    value=""
                    onChange={() => { }}
                />
                <Input label="If yes, please specify" name="scarDetails" placeholder="Details..." />
            </div>
        </div>
    );
}
