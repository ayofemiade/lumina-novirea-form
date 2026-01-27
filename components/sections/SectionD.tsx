import styles from './SectionD.module.css';
import FileUpload from '../ui/FileUpload';
import Checkbox from '../ui/Checkbox';
import Input from '../ui/Input';
import RadioGroup from '../ui/Radio';

export default function SectionD() {
    return (
        <div className={styles.container}>
            <div className={styles.instructions}>
                <h3 className={styles.instructionTitle}>Guidelines for Digitals</h3>
                <p className={styles.instructionText}>
                    Digitals (Polaroids) must be natural, clear, and unedited. Wear simple,
                    form-fitting clothing (e.g., plain tank top and jeans/leggings).
                    No makeup, no hair products, and natural lighting is preferred.
                </p>
                <ul className={styles.requirementList}>
                    <li>Headshot (front-facing, neutral)</li>
                    <li>Profile (left & right side)</li>
                    <li>Full body (front, side, & back)</li>
                </ul>
            </div>

            <div className={styles.submissionMethod}>
                <RadioGroup
                    label="Submission Method"
                    name="digitalsMethod"
                    options={[
                        { value: 'upload', label: 'Online form upload' },
                        { value: 'drive', label: 'Google Drive link' },
                        { value: 'email', label: 'Email attachment' }
                    ]}
                    value="upload"
                    onChange={() => { }}
                />
            </div>

            <div className={styles.uploadArea}>
                <FileUpload
                    label="Upload Digitals"
                    onFileSelect={() => { }}
                    acceptedTypes="image/*"
                />
            </div>

            <div className={styles.linkArea}>
                <Input
                    label="Link to Digitals (if applicable)"
                    placeholder="https://drive.google.com/..."
                    name="digitalsLink"
                />
            </div>

            <div className={styles.checklist}>
                <span className={styles.checklistLabel}>Please confirm you have included:</span>
                <div className={styles.checkGrid}>
                    <Checkbox label="Headshot" />
                    <Checkbox label="Left Profile" />
                    <Checkbox label="Right Profile" />
                    <Checkbox label="Full Body (Front)" />
                    <Checkbox label="Full Body (Side)" />
                    <Checkbox label="Full Body (Back)" />
                </div>
            </div>
        </div>
    );
}
