import styles from './SectionContent.module.css';
import Input from '../ui/Input';
import Select from '../ui/Select';

export default function SectionB() {
    return (
        <div className={styles.container}>
            <p className={styles.introText}>Please provide accurate and current measurements as seen in your digitals.</p>

            <div className={styles.row}>
                <Input label="Height (without shoes)" name="height" placeholder="cm / ft" />
                <Input label="Weight" name="weight" placeholder="kg" />
            </div>

            <div className={styles.statsGrid}>
                <Input label="Chest/Bust" name="bust" placeholder="cm/in" />
                <Input label="Waist" name="waist" placeholder="cm/in" />
                <Input label="Hips" name="hips" placeholder="cm/in" />
            </div>

            <div className={styles.row}>
                <Input label="Shoe Size (EU/UK/US)" name="shoeSize" placeholder="e.g. EU 39 / US 8" />
                <Input label="Clothing Size (Top)" name="sizeTop" placeholder="e.g. S / EU 36" />
            </div>
            <Input label="Clothing Size (Bottom)" name="sizeBottom" placeholder="e.g. 26 / EU 34" />

            <div className={styles.featuresGrid}>
                <Select
                    label="Eye Color"
                    name="eyeColor"
                    options={[
                        { value: 'brown', label: 'Brown' },
                        { value: 'blue', label: 'Blue' },
                        { value: 'green', label: 'Green' },
                        { value: 'hazel', label: 'Hazel' },
                        { value: 'grey', label: 'Grey' },
                        { value: 'other', label: 'Other' }
                    ]}
                />
                <Select
                    label="Hair Color"
                    name="hairColor"
                    options={[
                        { value: 'black', label: 'Black' },
                        { value: 'brown', label: 'Brown' },
                        { value: 'blonde', label: 'Blonde' },
                        { value: 'red', label: 'Red' },
                        { value: 'grey', label: 'Grey' },
                        { value: 'other', label: 'Other' }
                    ]}
                />
            </div>

            <div className={styles.row}>
                <Input label="Hair Length" name="hairLength" placeholder="e.g. Shoulder length" />
                <Input label="Skin Tone/Complexion" name="skinTone" placeholder="e.g. Fair" />
            </div>
        </div>
    );
}
