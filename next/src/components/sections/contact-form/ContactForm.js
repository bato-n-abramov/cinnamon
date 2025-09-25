"use client";

import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import ThankYou from "../thank-you/ThankYou";

import styles from "./ContactForm.module.scss";

export default function ContactForm() {
    const recaptchaRef = useRef(null);
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'ok' | 'error' | null

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const Schema = Yup.object({
        fullName: Yup.string()
            .trim()
            .matches(/^[^\d]*$/, "Name cannot contain numbers")
            .required("Full name is required"),
        email: Yup.string()
            .trim()
            .email("Invalid email")
            .required("Email is required"),
        org: Yup.string()
            .trim()
            .required("Organization is required"),
        isManufacturerOrHealthSystem: Yup.boolean(),
        title: Yup.string()
            .trim()
            .matches(/^[^\d]*$/, "Title cannot contain numbers")
            .required("Job title is required"),
        goals: Yup.string()
            .trim()
            .required("Please tell us your goals"),
        how: Yup.string()
            .trim()
            .nullable(),
        captcha: Yup.string().required("Captcha is required"),
    });

    const submit = async (values, { resetForm }) => {
        try {
            setSubmitting(true);
            setStatus(null);

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                const { error } = await res.json().catch(() => ({ error: "Unknown error" }));
                throw new Error(error || "Request failed");
            }

            setStatus("ok");
            resetForm();
            recaptchaRef.current?.reset();
        } catch (e) {
            console.error(e);
            setStatus("error");
        } finally {
            setSubmitting(false);
        }
    };

    if (status === "ok") return <ThankYou />;

    return (
        <Formik
            initialValues={{
                fullName: "",
                email: "",
                org: "",
                isManufacturerOrHealthSystem: false,
                title: "",
                goals: "",
                how: "",
                captcha: "",
            }}
            validationSchema={Schema}
            onSubmit={submit}
        >
            {({ submitForm, setFieldValue }) => {
                return (
                    <Form noValidate className={styles.form}>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="fullName">Full name*</label>
                                <Field id="fullName" name="fullName">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type='text'
                                            placeholder="Enter your full name"
                                            className={`${styles.input} ${form.values.fullName ? "filled" : ""
                                                }`}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage name="fullName" component="span" className={styles.err} />
                            </div>
                            <div className={styles.col}>
                                <label htmlFor="email">Work email*</label>
                                <Field id="email" name="email" >
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="email"
                                            placeholder="Enter your work email"
                                            className={`${form.values.email ? "filled" : ""
                                                }`}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage name="email" component="span" className={styles.err} />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="org">Organization*</label>
                                <Field id="org" name="org">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Enter your organization"
                                            className={`${form.values.org ? "filled" : ""
                                                }`}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage name="org" component="span" className={styles.err} />
                                <label htmlFor="isManufacturerOrHealthSystem" className="checkbox">
                                    <Field id="isManufacturerOrHealthSystem" name="isManufacturerOrHealthSystem" type="checkbox" />
                                    <span className={styles.customCheckbox}></span>
                                    <span>Manufacturer or Health System</span>
                                </label>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="title">Job title*</label>
                                <Field id="title" name="title">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Enter your job title"
                                            className={`${form.values.title ? "filled" : ""
                                                }`}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage name="title" component="span" className={styles.err} />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="goals">Your goals*</label>
                                <Field id="goals" name="goals" >
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Enter your goals / context"
                                            className={`${form.values.goals ? "filled" : ""
                                                }`}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage name="goals" component="span" className={styles.err} />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="how">How did you hear about us? (optional)</label>
                                <Field id="how" name="how" rows={3}  >
                                    {({ field, form }) => (
                                        <textarea
                                            {...field}
                                            placeholder="How did you hear about us?"
                                            className={`${form.values.how ? "filled" : ""
                                                }`}
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={siteKey}
                                    onChange={(token) => setFieldValue("captcha", token)}
                                />
                                <ErrorMessage name="captcha" component="span" className={styles.err} />
                            </div>
                        </div>

                        <div
                            role="button"
                            tabIndex={0}
                            onClick={submitForm}
                            onKeyDown={(e) => { if (e.key === "Enter") submitForm(); }}
                            className={`${styles.buttonSubmit} button-icon`}
                        >
                            <span className="button-icon-text">Send Message</span>
                            <span className="button-icon-arrow">
                                <svg className="arrow-hidden" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" /></svg>
                                <svg className="arrow-move" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" /> </svg>
                            </span>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}
