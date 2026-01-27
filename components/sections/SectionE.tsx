import styles from './SectionContent.module.css';
import RadioGroup from '../ui/Radio';
import Input from '../ui/Input';

export default function SectionE() {
    return (
        <div className={styles.container}>
            <div className={styles.subSection}>
                <RadioGroup
                    label="Are you signed to any modeling agency currently?"
                    name="isSigned"
                    options={[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' }
                    ]}
                    value=""
                    onChange={() => { }}
                />
                <Input label="If yes, please state agency name" name="agencyName" placeholder="Agency name..." />
            </div>

            <div className={styles.subSection}>
                <RadioGroup
                    label="Modeling Experience"
                    name="experienceLevel"
                    options={[
                        { value: 'beginner', label: 'Beginner (No experience)' },
                        { value: 'some', label: 'Some experience' },
                        { value: 'professional', label: 'Professional' }
                    ]}
                    value=""
                    onChange={() => { }}
                />
            </div>

            <div className={styles.subSection}>
                <h3 className={styles.subTitle}>Previous Work</h3>
                <p className={styles.helpText}>Runways, Shoots, Campaigns — if any.</p>
                <textarea
                    className={styles.textarea}
                    name="previousWork"
                    placeholder="List your previous work here..."
                    rows={4}
                ></textarea>
            </div>

            <div className={styles.subSection}>
                <h3 className={styles.subTitle}>Special Skills</h3>
                <p className={styles.helpText}>e.g., posing, dancing, acting, sports.</p>
                <textarea
                    className={styles.textarea}
                    name="specialSkills"
                    placeholder="List your special skills here..."
                    rows={3}
                ></textarea>
            </div>
        </div>
    );
}
