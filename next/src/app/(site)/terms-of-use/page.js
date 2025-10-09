import { getBaseUrl } from "@/lib/baseUrl";
import styles from "./Terms.module.scss";


export const dynamic = "force-static";

export function generateMetadata() {
    const path = "/terms-of-use";
    const title = "Terms of Use — Cinnamon Health";
    const description = "Review Cinnamon Health’s terms of service to learn about conditions and requirements for using our platform.";
    const ogImage = "/og/default.jpg";

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            url: `${getBaseUrl()}${path}`,
            siteName: "Cinnamon Health",
            title,
            description,
            images: [{ url: ogImage, width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
        robots: { index: true, follow: true },
    };
}

export default function TermsPage() {
    return (
        <main>
            <section className={styles.terms}>
                <div className={`${styles.inner} container`}>
                    <h1>TERMS OF SERVICE</h1>

                    <p><strong>Last Updated:</strong> January 8, 2024</p>

                    <p>
                        Cinnamon Inc. (“Cinnamon,” “we,” “us,” or “our”) welcomes you. We invite you to access and use our proprietary patient assistance platform (the “Platform”), made available via our application accessible at{' '}
                        <a href="https://app.cinnamon.health" target="_blank" rel="noopener noreferrer">https://app.cinnamon.health</a> (the “App”), subject to the following terms and conditions (the “Terms of Service”).
                    </p>

                    <p>
                        By accessing and/or using the Platform, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service, the terms and conditions of our Platform privacy policy (the “Privacy Policy”), and the terms and conditions of our HIPAA privacy policy (the “HIPAA Privacy Policy”), both of which are hereby incorporated into these Terms of Service and made a part hereof by reference (collectively, the “Agreement”).  If you do not agree to any of the terms in this Agreement, then please do not use the Platform. We may change the terms and conditions of these Terms of Service from time to time with or without notice to you, and if you accept the modified terms or otherwise access or use the Platform after such modified changes go into effect, you will be deemed to agree to the modified terms.  If you do not agree to any of these terms, then you are not permitted to use the Platform.
                    </p>

                    <p>
                        If you accept or agree to the Agreement on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that company or other legal entity to the Agreement and, in such event, “you” and “your” will refer and apply to that company or other legal entity.
                    </p>

                    <p>
                        In addition to this Agreement, Cinnamon provides Providers and their Authorized Users access to the Platform, subject to the terms and conditions of that certain provider agreement between each Provider and Cinnamon (“Provider Agreement”). If there is any conflict between the terms of your Provider Agreement and these Terms of Service, the Provider Agreement shall prevail.
                    </p>

                    <p>
                        Capitalized terms not defined in this Terms of Service shall have the meaning set forth in the Privacy Policy.
                    </p>

                    <p>THE SECTIONS BELOW TITLED “BINDING ARBITRATION” AND “CLASS ACTION WAIVER” CONTAIN A BINDING ARBITRATION AGREEMENT AND CLASS ACTION WAIVER.  THEY AFFECT YOUR LEGAL RIGHTS.  PLEASE READ THEM.</p>

                    <h2>RIGHT TO ACCESS AND USE THE PLATFORM</h2>
                    <p>
                        Subject to the terms and conditions of this Agreement, Cinnamon hereby grants you during the term of this Agreement a limited, non-exclusive, non-transferable, non-sublicensable right, to access and use the Platform solely for your internal business purposes.
                    </p>
                    <p>
                        You will not (and will not authorize, permit, or encourage any third party to): (i) reverse engineer, decompile, disassemble, or otherwise attempt to discern the source code or interface protocols of the App or the Platform; (ii) modify, adapt, or translate the App, the Platform, or any portion or component thereof; (iii) make any copies of the App, the Platform, or any portion or component thereof; (iv) resell, distribute, or sublicense the App, the Platform, or any portion or component thereof; (v) remove or modify any proprietary markings or restrictive legends placed on the App, or the Platform; (vi) use the App, the Platform, or any portion or component thereof in violation of any applicable law, in order to build a competitive product or service, or for any purpose not specifically permitted in this Agreement; (vii) introduce, post, or upload to the App, or the Platform any virus, worm, “black door,” Trojan Horse, or similar harmful code; (viii) save, store, or archive any portion of the services (including, without limitation, any data contained therein) outside the Platform other than those outputs generated through the intended functionality of the Platform without the prior, written permission of Cinnamon in each instance; (ix) use the App, or the Platform in connection with service bureau, timeshare, service provider or like activity whereby you operate the App, or the Platform for the benefit of a third party; or (x) circumvent any processes, procedures, or technologies that we have put in place to safeguard the Platform.
                    </p>
                    <p>
                        If you violate this section, Cinnamon reserves the right in its sole discretion to immediately deny you access to the Platform, or any portion of thereof, without notice. Cinnamon reserves the right to change the availability of any feature, function, or content relating to the Platform, at any time, without notice or liability to you.
                    </p>

                    <h2>OWNERSHIP</h2>
                    <p>
                        We retain all right, title and interest in and to the App, the Platform, and all software and other technology relating to the App and the Platform. The App and the Platform contains material, such as software, text, graphics, images, sound recordings, audiovisual works, and other material, provided by or on behalf of Cinnamon collectively referred to as the “Content”.  The Content may be owned by us or by third parties.  The Content is protected under both United States and foreign laws.  Unauthorized use of the Content may violate copyright, trademark, and other laws.  You have no rights in or to the Content, and you will not use the Content except as permitted under this Agreement.  No other use is permitted without prior written consent from us.  You must retain all copyright and other proprietary notices contained in the original Content on any copy you make of the Content.  You may not sell, transfer, assign, license, sublicense, or modify the Content or reproduce, display, publicly perform, make a derivative version of, distribute, or otherwise use the Content in any way for any public or commercial purpose.  The use or posting of the Content on any other website or in a networked computer environment for any purpose is expressly prohibited.
                    </p>
                    <p>
                        If you violate any part of this Agreement, your permission to access and/or use the Content, the App and the Platform automatically terminates and you must immediately destroy any copies you have made of the Content.
                    </p>
                    <p>
                        The trademarks, service marks, and logos of Cinnamon (the “Cinnamon Trademarks”) used and displayed on the App and the Platform are registered and unregistered trademarks or service marks of Cinnamon.  Other company, product, and service names located on the App and the Platform may be trademarks or service marks owned by others (the “Third-Party Trademarks,” and, collectively with Cinnamon Trademarks, the “Trademarks”).  Nothing on the App and the Platform should be construed as granting, by implication, estoppel, or otherwise, any license or right to use the Trademarks, without our prior written permission specific for each such use.  Use of the Trademarks as part of a link to or from any website is prohibited unless establishment of such a link is approved in advance by us in writing.  All goodwill generated from the use of Cinnamon Trademarks inures to our benefit.
                    </p>
                    <p>
                        Elements of the App and the Platform are protected by trade dress, trademark, unfair competition, and other state and federal laws and may not be copied or imitated in whole or in part, by any means, including, but not limited to, the use of framing or mirrors.  None of the Content may be retransmitted without our express, written consent for each and every instance.
                    </p>

                    <h2>PROVIDER DATA; USAGE DATA AND AGGREGATE DATA</h2>
                    <p>
                        For purposes of this Agreement, “Provider Data” means any data and information that you submit to the Platform and/or provide to us pursuant to this Agreement; and “Usage Data” means anonymous, analytical data that Cinnamon collects concerning the performance and use of the Platform by its users.
                    </p>
                    <p>
                        You own all right, title, and interest in and to Provider Data, including all modifications, improvements, adaptations, enhancements, or translations made thereto, and all intellectual rights therein. You hereby grant Cinnamon a non-exclusive, worldwide, fully paid-up, royalty-free right and license, with the right to grant sublicenses, to access and use Provider Data: (i) during the term of this Agreement, in furtherance of Cinnamon’s obligations hereunder; and (ii) for Cinnamon’s internal business purposes, including using such data to analyze, update, and improve the Platform and Cinnamon’s analytics capabilities.
                    </p>
                    <p>
                        Notwithstanding anything to the contrary herein, we may use, and may permit our third-party service providers to access and use, Provider Data, as well as any Usage Data that we may collect, in an anonymous and aggregated form (“Aggregate Data”) for the purposes of operating, maintaining, managing, and improving our products and services including the Platform. Aggregate Data does not identify you.  You hereby agree that we may collect, use, publish, disseminate, sell, transfer, and otherwise exploit such Aggregate Data.
                    </p>

                    <h2>FEES</h2>
                    <p>The Platform is provided to you free of charge.</p>

                    <h2>GUIDELINES</h2>
                    <p>By accessing the App and/or using accessing and/or using the Platform, you hereby agree to comply with the following guidelines:</p>
                    <ul>
                        <li>You will not use the App and the Platform for any unlawful purpose;</li>
                        <li>You will not access or use the App and the Platform to collect any market research for any competing businesses;</li>
                        <li>
                            You will not upload, post, e-mail, transmit, or otherwise make available any content that:
                            <ul>
                                <li>infringes any copyright, trademark, right of publicity, or other proprietary rights of any person or entity; or</li>
                                <li>constitutes promotion or advertising of any third-party website, product or service; or</li>
                                <li>
                                    is defamatory, libelous, indecent, obscene, pornographic, sexually explicit, invasive of another’s privacy, promotes violence, or contains hate speech (i.e., speech that attacks or demeans a group based on race or ethnic origin, religion, disability, gender, age, veteran status, and/or sexual orientation/gender identity); or
                                </li>
                                <li>
                                    discloses any sensitive information about another person, including that person’s e-mail address, postal address, phone number, credit card information, or any similar information.
                                </li>
                            </ul>
                        </li>
                        <li>You will not impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity;</li>
                        <li>You will not decompile, reverse engineer, or disassemble any software or other products or processes accessible through the App and the Platform;</li>
                        <li>You will not cover, obscure, block, or in any way interfere with any advertisements and/or safety features on the App and the Platform;</li>
                        <li>You will not circumvent, remove, alter, deactivate, degrade, or thwart any of the protections in the App and the Platform;</li>
                        <li>
                            You will not use automated means, including spiders, robots, crawlers, data mining tools, or the like to download or scrape data from the App, directly or indirectly, except for Internet search engines (e.g., Google) and non-commercial public archives (e.g., archive.org) that comply with our robots.txt file;
                        </li>
                        <li>You will not take any action that imposes or may impose (in our sole discretion) an unreasonable or disproportionately large load on our technical infrastructure; and</li>
                        <li>
                            You will not interfere with or attempt to interrupt the proper operation of the App and the Platform through the use of any virus, device, information collection or transmission mechanism, software or routine, or access or attempt to gain access to any data, files, or passwords related to the App through hacking, password or data mining, or any other means.
                        </li>
                    </ul>
                    <p>We reserve the right, in our sole and absolute discretion, to deny you (or any device) access to the App and the Platform, or any portion thereof, without notice.</p>

                    <h2>SIGN-IN NAME; PASSWORD; UNIQUE IDENTIFIERS</h2>
                    <p>
                        In order to access and use the Platform, you will have to create an account. If you already have an account on the Platform, you will be able to access and use the Platform through your account. When you create an account, you will be asked to sign in using a valid email address associated with a healthcare institution (“Sign-In Name”), a password (“Password”), and perhaps certain additional information that will assist in authenticating your identity when you log-in in the future (“Unique Identifiers”). When creating your account, you must provide true, accurate, current, and complete information.  Your Sign-In Name and corresponding Password can only be used by you and cannot be shared with any third party.  You are solely responsible for the confidentiality and use of your Sign-In Name, Password, and Unique Identifiers, as well as for any misuse, or communications entered through the Platform using one or more of them.  You will promptly inform us of any need to deactivate a Password or Sign-In Name, or change any Unique Identifier.  We reserve the right to delete or change your Password, Sign-In Name, or Unique Identifier at any time and for any reason and shall have no liability to you for any loss or damage caused by such action.
                    </p>

                    <h2>RESTRICTIONS</h2>
                    <p>
                        The Platform is available only for individuals aged 18 years or older.  If you are 18 or older, but under the age of majority in your jurisdiction, you should review this Agreement with your parent or guardian to make sure that you and your parent or guardian understand it.
                    </p>

                    <h2>FEEDBACK</h2>
                    <p>
                        We welcome and encourage you to provide feedback, comments, and suggestions for improvements to the App, the Platform and our services (“Feedback”).  Although we encourage you to e-mail us, we do not want you to, and you should not, e-mail us any content that contains confidential information.  With respect to any Feedback you provide, we shall be free to use and disclose any ideas, concepts, know-how, techniques, or other materials contained in your Feedback for any purpose whatsoever, including, but not limited to, the development, production and marketing of products and services that incorporate such information, without compensation or attribution to you.
                    </p>

                    <h2>NO WARRANTIES; LIMITATION OF LIABILITY</h2>
                    <p>
                        THE APP, THE PLATFORM AND OUR SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, AND NEITHER CINNAMON NOR CINNAMON’S SUPPLIERS MAKE ANY WARRANTIES WITH RESPECT TO THE SAME OR OTHERWISE IN CONNECTION WITH THIS AGREEMENT, AND CINNAMON HEREBY DISCLAIMS ANY AND ALL EXPRESS, IMPLIED, OR STATUTORY WARRANTIES, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AVAILABILITY, ERROR-FREE OR UNINTERRUPTED OPERATION, AND ANY WARRANTIES ARISING FROM A COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE.  TO THE EXTENT THAT CINNAMON AND CINNAMON’S SUPPLIERS MAY NOT AS A MATTER OF APPLICABLE LAW DISCLAIM ANY IMPLIED WARRANTY, THE SCOPE AND DURATION OF SUCH WARRANTY WILL BE THE MINIMUM PERMITTED UNDER SUCH LAW.
                    </p>
                    <p>
                        IN CONNECTION WITH ANY WARRANTY, CONTRACT, OR COMMON LAW TORT CLAIMS: (I) WE SHALL NOT BE LIABLE FOR ANY INCIDENTAL OR CONSEQUENTIAL DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION RESULTING FROM THE USE OR INABILITY TO ACCESS AND USE THE APP, THE PLATFORM OR ANY RELATED SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; AND (II) ANY DIRECT DAMAGES THAT YOU MAY SUFFER AS A RESULT OF YOUR USE OF THE APP, THE PLATFORM OR ANY RELATED SERVICES SHALL BE LIMITED TO ONE HUNDRED DOLLARS ($100) EXCEPT AS PROVIDED IN THE PROVIDER AGREEMENT.
                    </p>
                    <p>
                        THE APP AND THE PLATFORM MAY CONTAIN TECHNICAL INACCURACIES, TYPOGRAPHICAL ERRORS, OR OMISSIONS. WE ARE NOT RESPONSIBLE FOR ANY SUCH TYPOGRAPHICAL, TECHNICAL, OR OTHER ERRORS LISTED ON OR OMITTED FROM THE APP AND THE PLATFORM. WE RESERVE THE RIGHT TO MAKE CHANGES, CORRECTIONS, AND/OR IMPROVEMENTS TO THE WEBSITE AND THE APP AT ANY TIME WITHOUT NOTICE.
                    </p>

                    <h2>EXTERNAL SITES</h2>
                    <p>
                        The App and the Platform may contain links to third-party websites (“External Sites”).  These links are provided solely as a convenience to you and not as an endorsement by us of the content on such External Sites.  The content of such External Sites is developed and provided by others.  You should contact the website administrator or webmaster for those External Sites if you have any concerns regarding such links or any content located on such External Sites.  We are not responsible for the content of any linked External Sites and do not make any representations regarding the content or accuracy of materials on such External Sites.  You should take precautions when downloading files from all websites to protect your computer from viruses and other destructive programs.  If you decide to access linked External Sites, you do so at your own risk.
                    </p>

                    <h2>REPRESENTATIONS AND WARRANTIES</h2>
                    <p>
                        You represent and warrant that: (i) you are duly organized, validly existing, and in good standing under its jurisdiction of organization and have the right to enter into this Agreement; (ii) the execution, delivery, and performance of this Agreement and the consummation of the transactions contemplated hereby are within your corporate powers and have been duly authorized by all necessary corporate action on your part, and constitute your valid and binding agreement; (iii) you have the full power, authority, and right to perform your obligations and grant the rights and licenses it grants hereunder; and (iv) you have the right to provide Provider Data and grant the rights and licenses granted hereunder.
                    </p>

                    <h2>INDEMNIFICATION</h2>
                    <p>
                        You will indemnify, defend, and hold Cinnamon, its affiliates, and our and their respective shareholders, members, officers, directors, employees, agents, and representatives (collectively, “Cinnamon Indemnitees”) harmless from and against any and all damages, liabilities, losses, costs, and expenses, including reasonable attorney’s fees (collectively, “Losses”) incurred by any Cinnamon Indemnitee in connection with a third-party claim, action, or proceeding (each, a “Claim”) arising from (i) your breach of this Agreement; (ii) any misuse of the App, the Platform, and/or the Content; (iii) your negligence, gross negligence, willful misconduct, fraud, misrepresentation or violation of law; or (iv) your violation of any third-party right, including without limitation any copyright, trademark, property, or privacy right;provided,however, that the foregoing obligations shall be subject to our: (i) promptly notifying you of the Claim; (ii) providing you, at your expense, with reasonable cooperation in the defense of the Claim; and (iii) providing you with sole control over the defense and negotiations for a settlement or compromise.
                    </p>

                    <h2>COMPLIANCE WITH APPLICABLE LAWS</h2>
                    <p>
                        The App and the Platform are based in the United States.  We make no claims concerning whether the App and the Platform may be viewed or be appropriate for use outside of the United States.  If you access the App and the Platform from outside of the United States, you do so at your own risk.  Whether inside or outside of the United States, you are solely responsible for ensuring compliance with the laws of your specific jurisdiction.
                    </p>

                    <h2>ROLE OF GOOGLE CLOUD PLATFORM</h2>
                    <p>
                        You acknowledge that Google Cloud Platform (“Google Cloud Platform”), hosts and operates this Platform on behalf of and as a licensor to Cinnamon. By accessing and/or using the Platform, you hereby consent to the sharing of information about you with Google Cloud Platform for storage and processing, in each case for the purpose of hosting the Platform and facilitating provision of products and services by Cinnamon to you. You agree that Google Cloud Platform is an express third party beneficiary of these Terms of Service, with full rights to enforce any or all of their provisions, on its own behalf or on behalf of Cinnamon.
                    </p>

                    <h2>TERMINATION OF THE AGREEMENT</h2>
                    <p>
                        We reserve the right, in our sole discretion, to restrict, suspend, or terminate the Agreement and/or your access to all or any part of the App and the Platform, at any time and for any reason without prior notice or liability.  We reserve the right to change, suspend, or discontinue all or any part of the App and the Platform at any time without prior notice or liability.
                    </p>

                    <h2>BINDING ARBITRATION</h2>
                    <p>
                        In the event of a dispute arising under or relating to this Agreement, the App, or the Platform (each, a “Dispute”), such dispute will be finally and exclusively resolved by binding arbitration governed by the Federal Arbitration Act (“FAA”). NEITHER PARTY SHALL HAVE THE RIGHT TO LITIGATE SUCH CLAIM IN COURT OR TO HAVE A JURY TRIAL, EXCEPT EITHER PARTY MAY BRING ITS CLAIM IN ITS LOCAL SMALL CLAIMS COURT, IF PERMITTED BY THAT SMALL CLAIMS COURT RULES AND IF WITHIN SUCH COURT’S JURISDICTION.  ARBITRATION IS DIFFERENT FROM COURT, AND DISCOVERY AND APPEAL RIGHTS MAY ALSO BE LIMITED IN ARBITRATION.  All disputes will be resolved before a neutral arbitrator selected jointly by the parties, whose decision will be final, except for a limited right of appeal under the FAA.  The arbitration shall be commenced and conducted by JAMS pursuant to its then current Comprehensive Arbitration Rules and Procedures and in accordance with the Expedited Procedures in those rules, or, where appropriate, pursuant to JAMS’ Streamlined Arbitration Rules and Procedures. All applicable JAMS’ rules and procedures are available at the JAMS website www.jamsadr.com. Each party will be responsible for paying any JAMS filing, administrative, and arbitrator fees in accordance with JAMS rules.  Judgment on the arbitrator’s award may be entered in any court having jurisdiction. This clause shall not preclude parties from seeking provisional remedies in aid of arbitration from a court of appropriate jurisdiction.  The arbitration may be conducted in person, through the submission of documents, by phone, or online. If conducted in person, the arbitration shall take place in the United States county where you reside.  The parties may litigate in court to compel arbitration, to stay a proceeding pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.  The parties shall cooperate in good faith in the voluntary and informal exchange of all non-privileged documents and other information (including electronically stored information) relevant to the Dispute immediately after commencement of the arbitration.  As set forth inSection 18below, nothing in this Agreement will prevent us from seeking injunctive relief in any court of competent jurisdiction as necessary to protect our proprietary interests.
                    </p>

                    <h2>CLASS ACTION WAIVER</h2>
                    <p>
                        You agree that any arbitration or proceeding shall be limited to the Dispute between us and you individually. To the full extent permitted by law, (i) no arbitration or proceeding shall be joined with any other; (ii) there is no right or authority for any Dispute to be arbitrated or resolved on a class action-basis or to utilize class action procedures; and (iii) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons. YOU AGREE THAT YOU MAY BRING CLAIMS AGAINST US ONLY IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                    </p>

                    <h2>EQUITABLE RELIEF</h2>
                    <p>
                        You acknowledge and agree that in the event of a breach or threatened violation of our intellectual property rights and confidential and proprietary information by you, we will suffer irreparable harm and will therefore be entitled to injunctive relief to enforce this Agreement. We may, without waiving any other remedies under this Agreement, seek from any court having jurisdiction any interim, equitable, provisional, or injunctive relief that is necessary to protect our rights and property pending the outcome of the arbitration referenced above. You hereby irrevocably and unconditionally consent to the personal and subject matter jurisdiction of the federal and state courts in the State of Delaware for purposes of any such action by us.
                    </p>

                    <h2>CONTROLLING LAW; EXCLUSIVE FORUM</h2>
                    <p>
                        The Agreement and any action related thereto will be governed by the laws of the State of Delaware without regard to its conflict of laws provisions.  The Parties hereby consent and agree to the exclusive jurisdiction of the state and federal courts located in the State of Delaware for all suits, actions, or proceedings directly or indirectly arising out of or relating to this Agreement, and waive any and all objections to such courts, including but not limited to, objections based on improper venue or inconvenient forum, and each party hereby irrevocably submits to the exclusive jurisdiction of such courts in any suits, actions, or proceedings arising out of or relating to this Agreement
                    </p>

                    <h2>MISCELLANEOUS</h2>
                    <p>
                        If the Agreement is terminated in accordance with the termination provision inSection 15above, such termination shall not affect the validity of the following provisions of this Agreement, which shall remain in full force and effect:  “Ownership,” “Feedback,” “No Warranties; Limitation of Liability,” “Indemnification,” “Compliance with Applicable Laws,” “Termination of the Agreement,” “Controlling Law; Exclusive Forum,” and “Miscellaneous.”
                    </p>
                    <p>
                        Our failure to act on or enforce any provision of the Agreement shall not be construed as a waiver of that provision or any other provision in this Agreement.  No waiver shall be effective against us unless made in writing, and no such waiver shall be construed as a waiver in any other or subsequent instance.  Except as expressly agreed by us and you in writing, the Agreement constitutes the entire agreement between you and us with respect to the subject matter, and supersedes all previous or contemporaneous agreements, whether written or oral, between the parties with respect to the subject matter.  The section headings are provided merely for convenience and shall not be given any legal import.  This Agreement will inure to the benefit of our successors, assigns, licensees, and sublicensees.
                    </p>

                    <p>Copyright 2024 Cinnamon Inc. All rights reserved.</p>
                </div>
            </section>
        </main>
    );
}

