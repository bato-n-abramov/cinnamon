'use client';

import { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import ThankYou from '../thank-you/ThankYou';

import styles from './ContactForm.module.scss';

export default function ContactForm() {
    const recaptchaRef = useRef(null);
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'ok' | 'error' | null

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const Schema = Yup.object({
        fullName: Yup.string().trim().required('Full name is required'),
        email: Yup.string().trim().email('Invalid email').required('Email is required'),
        org: Yup.string().trim().required('Organization is required'),
        isManufacturerOrHealthSystem: Yup.boolean(),
        title: Yup.string().trim().required('Job title is required'),
        goals: Yup.string().trim().required('Please tell us your goals'),
        how: Yup.string().trim().nullable(),
        captcha: Yup.string().required('Captcha is required'),
    });

    const submit = async (values, { resetForm }) => {
        try {
            setSubmitting(true);
            setStatus(null);

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                const { error } = await res.json().catch(() => ({ error: 'Unknown error' }));
                throw new Error(error || 'Request failed');
            }

            setStatus('ok');
            resetForm();
            recaptchaRef.current?.reset();
        } catch (e) {
            console.error(e);
            setStatus('error');
        } finally {
            setSubmitting(false);
        }
    };

    if (status === 'ok') return <ThankYou />;

    return (
        <Formik
            initialValues={{
                fullName: '',
                email: '',
                org: '',
                isManufacturerOrHealthSystem: false,
                title: '',
                goals: '',
                how: '',
                captcha: '',
            }}
            validationSchema={Schema}
            onSubmit={submit}
        >
            {({ isValid, dirty, submitForm, setFieldValue }) => {
                const canSubmit = isValid && dirty && !submitting;
                return (
                    <Form noValidate>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label>Full name</label>
                                <Field name="fullName" type="text" placeholder="Enter your full name" />
                                <ErrorMessage name="fullName" component="span" className="err" />
                            </div>
                            <div className={styles.col}>
                                <label>Work email</label>
                                <Field name="email" type="email" placeholder="Enter your work email" />
                                <ErrorMessage name="email" component="span" className="err" />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label>Organization</label>
                                <Field name="org" type="text" placeholder="Enter your organization" />
                                <ErrorMessage name="org" component="span" className="err" />
                                <label className="checkbox">
                                    <Field name="isManufacturerOrHealthSystem" type="checkbox" />
                                    <span>Manufacturer or Health System</span>
                                </label>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label>Job title</label>
                                <Field name="title" type="text" placeholder="Enter your job title" />
                                <ErrorMessage name="title" component="span" className="err" />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label>Your goals</label>
                                <Field as="textarea" name="goals" rows={3} placeholder="Enter your goals / context" />
                                <ErrorMessage name="goals" component="span" className="err" />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label>How did you hear about us? (optional)</label>
                                <Field as="textarea" name="how" rows={3} placeholder="How did you hear about us?" />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={siteKey}
                                    onChange={(token) => setFieldValue('captcha', token)}
                                />
                                <ErrorMessage name="captcha" component="span" className="err" />
                            </div>
                        </div>

                        <div
                            role="button"
                            tabIndex={0}
                            onClick={submitForm}
                            onKeyDown={(e) => { if (e.key === 'Enter') submitForm(); }}
                            className={`button-icon`}
                        >
                            <span className='button-icon-text'>Send Message</span>
                            <span className='button-icon-arrow'>
                                <svg className='arrow-hidden' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" /></svg>
                                <svg className='arrow-move' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" /> </svg>
                            </span>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}
