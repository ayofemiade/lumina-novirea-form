import styles from './SectionContent.module.css';
import RadioGroup from '../ui/Radio';

export default function SectionF() {
    return (
        <div className={styles.container}>
            <div className={styles.subSection}>
                <RadioGroup
                    label="Are you available for castings, fittings, and bookings on short notice?"
                    name="shortNotice"
                    options={[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' }
                    ]}
                    value=""
                    onChange={() => { }}
                />
            </div>

            <div className={styles.subSection}>
                <RadioGroup
                    label="Are you willing to travel for jobs?"
                    name="travelWillingness"
                    options={[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' },
                        { value: 'sometimes', label: 'Sometimes' }
                    ]}
                    value=""
                    onChange={() => { }}
                />
            </div>

            <div className={styles.subSection}>
                <h3 className={styles.subTitle}>Restrictions</h3>
                <p className={styles.helpText}>Any restrictions we should be aware of (school, work, health, etc.)</p>
                <textarea
                    className={styles.textarea}
                    name="restrictions"
                    placeholder="Specify any restrictions here..."
                    rows={3}
                ></textarea>
            </div>
        </div>
    );
}
