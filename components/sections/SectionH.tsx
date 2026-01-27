import styles from './SectionContent.module.css';
import Checkbox from '../ui/Checkbox';
import Input from '../ui/Input';

export default function SectionH() {
    return (
        <div className={styles.container}>
            <div className={styles.declaration}>
                <p className={styles.declarationText}>
                    I confirm that the information provided above is true and accurate to the best of my knowledge.
                    I understand that submission of this form does not guarantee representation by
                    Lumina Novireá Modeling Agency.
                </p>
                <p className={styles.declarationText}>
                    I grant Lumina Novireá Modeling Agency permission to review my application and
                    digitals for evaluation and potential representation.
                </p>
            </div>

            <div className={styles.consentArea}>
                <Checkbox label="I agree to the terms and conditions" name="consent" />
            </div>

            <div className={styles.signatureArea}>
                <Input label="Applicant’s Full Name" name="signatureName" placeholder="Your full name" />
                <div className={styles.row}>
                    <Input label="Signature (Type your name)" name="signature" placeholder="Signature" />
                    <Input label="Date" name="signatureDate" type="date" />
                </div>
            </div>

            <div className={styles.closingMessage}>
                <p>We look forward to discovering you.</p>
            </div>
        </div>
    );
}
