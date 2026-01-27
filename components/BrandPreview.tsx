import styles from './BrandPreview.module.css';

export default function BrandPreview() {
    return (
        <div className={styles.wrapper}>
            <section className="section-padding container">
                <h2 className="text-gold" style={{ marginBottom: '2rem' }}>Brand System Preview</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Typography</h3>
                        <h1 className="text-serif">Serif Heading</h1>
                        <p className="text-sans">Sans-serif body text. The quick brown fox jumps over the lazy dog. Elegant and readable.</p>
                        <p className="text-ivory-muted" style={{ marginTop: '1rem' }}>Muted ivory text for secondary information.</p>
                    </div>

                    <div className={styles.card}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Buttons</h3>
                        <div className={styles.flex}>
                            <button className="btn btn-primary">Primary Action</button>
                            <button className="btn btn-outline">Outline Action</button>
                            <button className="btn btn-primary" disabled>Disabled Action</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Form Elements</h3>
                        <div className="input-group">
                            <label className="label">Full Name</label>
                            <input type="text" className="input" placeholder="e.g. Naomi Campbell" />
                        </div>
                        <div className="input-group">
                            <label className="label">Email Address</label>
                            <input type="email" className="input" placeholder="model@agency.com" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
