import styles from './SectionContent.module.css';
import Input from '../ui/Input';
import RadioGroup from '../ui/Radio'; // Fixed path

export default function SectionA() {
    return (
        <div className={styles.container}>
            <Input label="Full Name (as on legal ID)" name="fullName" placeholder="e.g. Naomi Campbell" />
            <Input label="Preferred/Stage Name (if any)" name="stageName" placeholder="e.g. Naomi" />
            <div className={styles.row}>
                <Input label="Date of Birth" name="dob" type="date" />
                <Input label="Age" name="age" type="number" placeholder="20" />
            </div>
            <RadioGroup
                label="Gender"
                name="gender"
                options={[
                    { value: 'female', label: 'Female' },
                    { value: 'male', label: 'Male' },
                    { value: 'non-binary', label: 'Non-binary' },
                    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
                ]}
                value=""
                onChange={() => { }}
            />
            <Input label="Nationality" name="nationality" placeholder="e.g. British" />
            <Input label="State & City of Residence" name="residence" placeholder="e.g. London, UK" />
            <Input label="Phone Number (WhatsApp preferred)" name="phone" type="tel" placeholder="+44 ..." />
            <Input label="Email Address" name="email" type="email" placeholder="name@email.com" />

            <div className={styles.subSection}>
                <h3 className={styles.subTitle}>Social Media Handles</h3>
                <Input label="Instagram" name="instagram" placeholder="@username" />
                <Input label="TikTok" name="tiktok" placeholder="@username" />
                <Input label="Others" name="socialOthers" placeholder="e.g. X, Portfolio link" />
            </div>
        </div>
    );
}
