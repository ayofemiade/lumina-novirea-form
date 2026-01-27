'use client';

import React, { useRef, useState } from 'react';
import styles from './FileUpload.module.css';

interface FileUploadProps {
    label: string;
    onFileSelect: (files: FileList | null) => void;
    acceptedTypes?: string;
    error?: string;
}

export default function FileUpload({ label, onFileSelect, acceptedTypes, error }: FileUploadProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [fileNames, setFileNames] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleFiles = (files: FileList) => {
        onFileSelect(files);
        setFileNames(Array.from(files).map(f => f.name));
    };

    return (
        <div className={styles.container}>
            <span className={styles.label}>{label}</span>
            <div
                className={`${styles.dropZone} ${isDragging ? styles.dragging : ''} ${error ? styles.errorZone : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => e.target.files && handleFiles(e.target.files)}
                    accept={acceptedTypes}
                    multiple
                    className={styles.hiddenInput}
                />
                <div className={styles.iconContainer}>
                    <svg viewBox="0 0 24 24" className={styles.icon}>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                </div>
                <p className={styles.text}>
                    Drag and drop your files or <span className={styles.browse}>browse</span>
                </p>
                <p className={styles.subtext}>JPG, PNG or PDF (Max 10MB per file)</p>
            </div>

            {fileNames.length > 0 && (
                <ul className={styles.fileList}>
                    {fileNames.map((name, i) => (
                        <li key={i} className={styles.fileItem}>
                            <svg viewBox="0 0 24 24" className={styles.fileIcon}>
                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                <polyline points="13 2 13 9 20 9"></polyline>
                            </svg>
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            )}

            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
}
