export const metadata = {
  title: "Privacy Policy | BantuPay",
  description:
    "Privacy Policy for BantuPay covering data collection, processing, legal bases (DPA/GDPR), user rights, security measures, and contact details.",
};

const linkClass =
  "text-amber-600 underline decoration-2 underline-offset-4 transition duration-150 hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-200";

const quickLinks = [
  { id: "controller", label: "Controller" },
  { id: "legal-bases", label: "Legal Bases" },
  { id: "data-rights", label: "Your Rights" },
  { id: "security", label: "Security" },
  { id: "processing", label: "Processing" },
  { id: "account-signup", label: "Account Signup" },
  { id: "special-category", label: "Special Data" },
  { id: "closing", label: "Closing" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f0e7] via-[#fdfaf4] to-[#f5e7d4] px-6 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-4xl space-y-12">
        <div
          id="overview"
          className="scroll-mt-32 rounded-3xl border border-[#f1dfd1] bg-white/80 p-12 text-center shadow-2xl backdrop-blur-sm transition duration-200 hover:shadow-[#f1dfd1]/60 dark:border-slate-800 dark:bg-slate-900/70"
        >
          <img
            src="/Logo.png"
            alt="BantuPay Logo"
            width={200}
            height={200}
            className="mx-auto h-20 w-20 bg-amber-50 rounded-lg object-contain"
          />
          <h1 className="mt-6 font-feature text-4xl font-semibold text-[#2d140a] dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            This privacy policy informs you about the nature, scope, and purpose of the processing of personal data (hereinafter referred to as "data") in the context of the provision of our website at {" "}
            <a className={linkClass} href="https://www.bantu-pay.com" target="_blank" rel="noopener noreferrer">
              www.bantu-pay.com
            </a>{" "}
            and our mobile applications on iOS and Android (hereinafter collectively referred to as "online offer").
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            We attach great importance to the security of your data and compliance with applicable data protection regulations. The collection, processing and use of personal data is subject to the provisions of the UK's Data Protection Act (DPA) and the General Data Protection Regulation (GDPR).
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-3">
          {quickLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full border border-amber-200 bg-white/90 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:bg-amber-50 hover:text-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 dark:border-amber-500/40 dark:bg-slate-900/80 dark:text-amber-300 dark:hover:bg-slate-800"
            >
              {label}
            </a>
          ))}
        </nav>

        <article className="prose prose-slate max-w-none space-y-12 rounded-3xl bg-white/85 p-12 shadow-xl ring-1 ring-[#f0dfd2] backdrop-blur-sm transition duration-200 hover:shadow-[#f0dfd2]/50 dark:prose-invert dark:bg-slate-900/80 dark:ring-slate-800/60">
          <section id="controller" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Controller</h2>
            <p>
              <strong>BantuPay</strong>
              <br />
              128 City Road, EC1V 2NX, London,
              <br />
              United Kingdom
              <br />
              <br />
              Web: {" "}
              <a className={linkClass} href="https://www.bantu-pay.com" target="_blank" rel="noopener noreferrer">
                www.bantu-pay.com
              </a>
              <br />
              E-Mail: {" "}
              <a className={linkClass} href="mailto:admin@bantu-pay.com">
                admin@bantu-pay.com
              </a>
            </p>
          </section>

          <section id="accuracy" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Accuracy</h2>
            <p>
              It is important that the data we hold about you is accurate and current, therefore please keep us informed of any changes to your personal data.
            </p>
          </section>

          <section id="processing" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">What are the purposes for processing?</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
              <li>Provision of the online offer, its contents and functions.</li>
              <li>Provision of contractual services, service and customer care.</li>
              <li>Answering contact enquiries and communication with users.</li>
              <li>Marketing and market research.</li>
              <li>Security measures.</li>
            </ul>
          </section>

          <section id="legal-bases" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">What are the relevant legal bases for processing your data?</h2>
            <p>
              The following informs you about the legal basis of us processing your data and unless the legal basis is not specifically mentioned, the following applies:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
              <li>
                <em>Consent</em> – This is where we have asked you to provide explicit permission to process your data for a particular purpose.
              </li>
              <li>
                <em>Contract</em> – This is where we process your information to fulfil a contractual arrangement, we have made with you.
              </li>
              <li>
                <em>Answering your business enquiries</em> – This is where we process your information to reply to your messages, e-mails, posts, calls, etc.
              </li>
              <li>
                <em>Legitimate Interests</em> – This is where we rely on our interests as a reason for processing, generally this is to provide you with the best products and service in the most secure and appropriate way. Of course, before relying on any of those legitimate interests we balance them against your interests and make sure they are compelling enough and will not cause any unwarranted harm.
              </li>
              <li>
                <em>Legal Obligation</em> – This is where we have a statutory or other legal obligation to process the information, such as for the investigation of crime.
              </li>
            </ul>
          </section>

          <section id="principles" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Data Protection Principles</h2>
            <p>All personal data must be:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
              <li>
                processed lawfully, fairly and in a transparent manner in relation to the data subject;
              </li>
              <li>
                collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes shall not be considered to be incompatible with the initial purposes subject to appropriate safeguards, and provided that there is no risk of breaching the privacy of the data subject;
              </li>
              <li>
                adequate, relevant and limited to what is necessary in relation to the purposes for which it is processed;
              </li>
              <li>
                accurate and where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that is inaccurate, having regard to the purposes for which they are processed, is erased or rectified without delay;
              </li>
              <li>
                kept in a form which permits identification of data subjects for no longer than necessary for the purposes for which the personal data is processed; personal data may be stored for longer periods insofar as the personal data will be processed solely for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes subject to implementation of the appropriate technical and organisational measures required by the Regulation in order to safeguard the rights and freedoms of the data subject; and
              </li>
              <li>
                processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures.
              </li>
            </ul>
          </section>

          <section id="data-rights" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Your data subject rights</h2>
            <p>These rights are standardised in the DPA and the GDPR. These include:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
              <li>the right to information (Art. 15 GDPR),</li>
              <li>the right to rectification (Article 16 GDPR),</li>
              <li>the right to erasure (Article 17 GDPR),</li>
              <li>the right to restriction of data processing (Article 18 GDPR),</li>
              <li>the right to data portability (Article 20 GDPR),</li>
              <li>the right to object to data processing (Article 21 GDPR),</li>
              <li>the right to revoke any consent you have given (Art. 7 (3) GDPR), and</li>
              <li>the right to lodge a complaint with the competent supervisory authority (Art. 77 GDPR).</li>
            </ul>
            <p>
              Please contact us at any time with questions and suggestions regarding data protection and to enforce your rights as a data subject.
            </p>
            <p>
              We encourage you to get in touch if you have any concerns with how we collect or use your personal data. You also have the right to lodge a complaint with your local data protection supervisory authority or the Information Commissioner's Office (ICO), which is the relevant authority in the UK.
            </p>
            <p>
              The ICO is located at Wycliffe House, Water Ln, Wilmslow SK9 5AF, UK and their website can be found at {" "}
              <a className={linkClass} href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
                www.ico.org.uk
              </a>
              . We would, however, appreciate the chance to deal with your concerns before you approach the ICO or any other supervisory authority.
            </p>
          </section>

          <section id="data-types" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Types of data processed</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
              <li>Inventory data (e.g., personal master data, names or addresses).</li>
              <li>Verification Data (e.g., proof of identity, proof of address).</li>
              <li>Contact data (e.g., e-mail, telephone numbers).</li>
              <li>Content data (e.g., text input, property data, photographs, videos).</li>
              <li>Usage data (e.g., web sites visited, interest in content, access times).</li>
              <li>Meta/communication data (e.g., device information, IP addresses).</li>
            </ul>
          </section>

          <section id="data-subjects" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Categories of data subjects</h2>
            <p>
              Visitors and users of the online offer (Hereafter, we also refer to the data subjects collectively as "users").
            </p>
          </section>

          <section id="security" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Security measures</h2>
            <p>
              We take appropriate technical and organisational measures in accordance with the legal requirements, taking into account the state of the art, the implementation costs and the nature, scope, circumstances and purposes of the processing, as well as the varying likelihood and severity of the risk to the rights and freedoms of natural persons, in order to ensure a level of protection appropriate to the risk.
            </p>
            <p>
              The measures include, in particular, ensuring the confidentiality, integrity and availability of data by controlling physical access to the data, as well as access to, input, disclosure, ensuring availability and segregation of the data. We also have procedures in place to ensure the exercise of data subjects' rights, deletion of data and response to data compromise. Furthermore, we already take the protection of personal data into account in the development and selection of hardware, software, and procedures, in accordance with the principle of data protection through technology design and through data protection-friendly default settings.
            </p>
            <p>
              For security reasons and to protect the transmission of confidential content that you send to us as the provider, this online offer uses TLS encryption (Transport Layer Security). You can recognise the secure, encrypted connection to this online offer by the identifier https:// of the entry in the URL line (address line) of the browser used and/or the lock symbol. HTTPS stands for Hypertext Transfer Protocol Secure.
            </p>
            <p>
              We would like to point out that data transmission on the Internet (e.g., when communicating by e-mail) can have security gaps. Complete protection of data against access by third parties is not possible.
            </p>
          </section>

          <section id="processors" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Cooperation with processors, joint controllers and third parties</h2>
            <p>
              If, in the course of our processing, we disclose data to other persons and companies (order processors, jointly responsible persons or third parties), transfer it to them or otherwise grant them access to the data, this will only be done on the basis of legal permission (e.g. if a transfer of the data to third parties, such as to payment service providers, is necessary for the performance of the contract), users have consented, a legal obligation provides for this or on the basis of our legitimate interests (e.g. when using agents, web hosts, etc.).
            </p>
            <p>
              If we disclose or transfer data to other companies in our group of companies or otherwise grant them access, this is done in particular for administrative purposes as a legitimate interest and, in addition, on a basis that complies with the legal requirements.
            </p>
          </section>

          <section id="deletion" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Deletion of data</h2>
            <p>
              The data processed by us will be deleted or restricted in its processing in accordance with the legal requirements. Unless expressly stated in this privacy policy, the data stored by us will be deleted as soon as it is no longer required for its intended purpose and the deletion does not conflict with any statutory retention obligations.
            </p>
            <p>
              If the data is not deleted because it is required for other and legally permissible purposes, its processing will be restricted. I.e., the data is blocked and not processed for other purposes. This applies, for example, to data that must be retained for reasons of commercial or tax law.
            </p>
          </section>

          <section id="data-transfer" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Transfer of personal data</h2>
            <p>
              BantuPay will not disclose or otherwise distribute your personal data to third parties unless this is necessary for the performance of our services (legal basis for processing: Art. 6 para. 1 lit. b) GDPR), you have consented to the disclosure (legal basis for processing: Art. 6 para. 1 lit. a) GDPR) or the disclosure of data is permitted by relevant legal provisions.
            </p>
            <p>
              BantuPay is entitled to outsource the processing of your personal data in whole or in part to external service providers acting as processors for BantuPay pursuant to Art. 4 No. 8 GDPR within the framework of the data protection provisions. External service providers support us, for example, in the technical operation and support of the website, data management, the provision and performance of services, marketing, as well as the implementation and fulfilment of reporting obligations.
            </p>
            <p>
              The service providers commissioned by BantuPay process your data exclusively in accordance with our instructions. BantuPay remains responsible for the protection of your data, which is ensured by strict contractual regulations, technical and organisational measures and additional controls by us.
            </p>
            <p>
              Personal data may also be disclosed to third parties if we are legally obliged to do so e.g., by court order (legal basis for processing: Art. 6 (1) (c) GDPR) or if this is necessary to support criminal or legal investigations or other legal investigations or proceedings at home or abroad or to fulfil BantuPay' legitimate interests (legal basis for processing: Art. 6 (1) (f) GDPR).
            </p>
          </section>

          <section id="dsar" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">When you send a data subject access request</h2>
            <p>
              The legal basis for the processing of your personal data in the context of handling your data subject access request is our legal obligation and the legal basis for the subsequent documentation of the data subject access request is both our legitimate interest and our legal obligation.
            </p>
            <p>
              The purpose of processing your personal data in the context of processing data when you send a data subject access request is to respond to your request. The subsequent documentation of the data subject access request serves to fulfil the legally required accountability.
            </p>
            <p>
              Your personal data will be deleted as soon as they are no longer required to achieve the purpose for which they were collected. In the case of the processing of a data subject access request, this is three years after the end of the respective process.
            </p>
            <p>
              You have the possibility at any time to object to the processing of your personal data in the context of the processing of a data subject access request for the future. In this case, however, we will not be able to further process your request. The documentation of the legally compliant processing of the respective data subject access request is mandatory. Consequently, there is no possibility for you to object.
            </p>
          </section>

          <section id="social-media" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Social Media</h2>
            <p>
              We are present in social media (currently, LinkedIn, Instagram, Twitter and Facebook) in order to communicate with our customers, interested parties and users registered there and to be able to inform them about our offers. You use social media platforms and their functions on your own responsibility. This applies in particular to the use of the interactive functions (e.g., commenting, sharing, rating). We, as the provider of our Social Media Profile, do not collect and process any data from your use of our social media platforms beyond this. The processing of users' personal data is based on our legitimate interests in providing users with effective information and communicating with users.
            </p>
          </section>

          <section id="data-processing" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Data processing in relation to our website and app</h2>
            <section id="log-files" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Log files</h3>
              <p>
                In principle, it is possible to use the BantuPay website without providing personal data. When however, a page of our website is accessed and each time a file is retrieved, access data about this method is stored in a log file. The corresponding log file contains: Your IP address, the page from which the file was requested, the name of the file, the date and time of the request, the amount of data transferred, the access status (file transferred, file not found, etc.), a description of the type of operating system and web browser used. The stored data does not allow any conclusions to be drawn about your identity and is evaluated exclusively for statistical purposes.
              </p>
              <p>
                The collection and processing of this data is carried out in order to enable the use of the website at all, on the basis of our legitimate interest, whereby our legitimate interest is the provision of our website. Incidentally, we store this aforementioned data, including the IP addresses, only in anonymised form and use it only in this anonymised form to analyse the use of the offer and the further development and optimisation of our website in your interest. Our legitimate interest is the ongoing improvement of our online offer in order to provide you with the greatest possible user comfort.
              </p>
            </section>

            <section id="general-app-accesses" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">General app accesses</h3>
              <p>
                As with every server request, information such as IP address, user agent etc. is transmitted and stored anonymously in the server log for 30 days. The provision of personal data is neither legally nor contractually required, nor is it necessary for the conclusion of a contract. You are also not obliged to provide the personal data. However, failure to provide the data could result in you not being able to use our app or not being able to use it to its full extent. The legal basis for this data processing is consent.
              </p>
            </section>

            <section id="network-access" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Network access and Location</h3>
              <p>
                The legal basis for this data processing is contract. Your data will be treated confidentially by us and deleted if you revoke the rights to use it or it is no longer required to provide the services and there is no legal obligation to retain it. The provision of personal data is necessary if you wish to make full use of our app. However, failure to provide this data could result in you not being able to use our app or not being able to use it to its full extent.
              </p>
            </section>

            <section id="authorisations" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Authorisations and Access</h3>
              <p>
                We may request access or permission to certain functions from your mobile device (Location, Photos, Gallery, Camera, Storage and Push notifications). The legal basis for data processing is our legitimate interest and the provision of contractual or pre-contractual measures. You can change your permissions at any time via Settings (iOS) or Settings Menu (Android).
              </p>
            </section>

            <section id="push-messages" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Push messages</h3>
              <p>
                When using the app, you will receive so-called push messages from us, even if you are not currently using the app. These are messages that we send you as part of the performance of the contract, but also service-related notifications. You can adjust or stop receiving push messages at any time via your device settings of your operating system.
              </p>
            </section>

            <section id="contacting" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Contacting Us</h3>
              <p>
                If you contact us, your transmitted personal data will be automatically stored for the purpose of processing the request or contacting you. We delete the data accruing in this context after the storage is no longer necessary for the processing of your request or restrict the processing if there are legal retention obligations. The legal basis for processing is our legitimate interest and/ or a contractual or precontractual measure.
              </p>
            </section>

            <section id="cookies" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Cookies</h3>
              <p>
                We use so-called cookies on our web site. Cookies are small text files that are stored on your respective device (PC, smartphone, tablet, etc.) and saved by your browser. For further information please refer to our Cookie Policy. The legal basis for the use of cookies is your consent as well as our legitimate interest.
              </p>
            </section>

            <section id="downloading" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Downloading the APP</h3>
              <p>
                The APP can be downloaded from the "Google Playstore" a service offered by Google Inc, 1600 Amphitheatre Parkway Mountain View, CA 94043, US, if you are resident outside the EU and Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland if you are a resident within the EU, or the Apple App service "App Store" a service of Apple Inc., 1 Infinite Loop, Cupertino, CA 95014, US, if you are resident outside the EU and Apple Distribution International Ltd, Hollyhill Industrial Estate, Hollyhill Ln, Knocknaheeney, Cork, Ireland, if you are a resident within the EU, to install our APP.
              </p>
              <p>
                Downloading it may require prior registration with the respective App store and/or installation of the respective App store software.
              </p>
            </section>

            <section id="installing" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Installing the APP</h3>
              <p>
                As far as we are aware, Google collects and processes the following data: License check, network access, network connection, WLAN connections, and location information. However, it cannot be ruled out that Google also transmits the information to a server in a third country. This could in particular be Apple Inc. One Apple Park Way, Cupertino, California, USA, 95014. We cannot influence which personal data Apple processes with your registration and the provision of downloads in the respective app store and app store software. The responsible party in this respect is solely Google as the operator of the Google Play Store.
              </p>
              <p>
                As far as we are aware, Apple collects and processes the following data: device identifiers, IP addresses, location information; it cannot be excluded that Apple also transmits the information to a server in a third country. This could in particular be Apple Inc. One Apple Park Way, Cupertino, California, USA, 95014. We cannot influence which personal data Apple processes with your registration and the provision of downloads in the respective app store and app store software. The responsible party in this respect is solely Apple as the operator of the Apple App Store.
              </p>
            </section>

            <section id="starting" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Starting the App</h3>
              <p>
                Every time you start the App, your data is synchronized, and your device communicates with our server through a signed token. The transmission takes place automatically and is a prerequisite for the secure functioning of the APP and is therefore mandatory.
              </p>
            </section>
          </section>

          <section id="account-signup" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">When you sign up for a BantuPay account</h2>
            <p>When you sign up for a BantuPay account we process and collect:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
              <li>personal details like your name, date and place of birth;</li>
              <li>contact details like your home address (and previous addresses), email and phone number;</li>
              <li>information about your identity, such as a copy of your ID document, a selfie of yourself;</li>
              <li>information about your right to live in the UK and your tax residency; and financial details.</li>
              <li>details you give us when you sign up for a specific service;</li>
              <li>details you give us which we pass to our partners when you let us know you're interested in their services;</li>
              <li>information you give us through in-app chat and emails; and</li>
              <li>answers you give to surveys about us and our services.</li>
              <li>Information we get from external sources</li>
            </ul>
            <p>When you sign up for a BantuPay account, we search your record at:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
              <li>credit reference agencies to verify your identity); and</li>
              <li>fraud prevention agencies, KYC (Know Your Customer) and AML (Anti Money Laundering) service providers to fulfil our legal duties.</li>
            </ul>
            <p>We may also collect information about you from public sources which may include:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
              <li>official public records, like the Electoral Register or Companies' House; and</li>
              <li>information published by the press or on social media.</li>
            </ul>
          </section>

          <section id="special-category" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Special category Data</h2>
            <p>
              We may need to process sensitive information about you. This is information that can reveal a person's:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
              <li>racial or ethnic origin</li>
              <li>political opinions</li>
              <li>religious or philosophical beliefs</li>
              <li>trade union membership</li>
              <li>genetic or biometric data (if used for identification purposes)</li>
              <li>information concerning a person's health, sex life or sexual orientation</li>
            </ul>
            <p>
              According to the DPA and the GDPR we need a second lawful basis to use special category data. This is typically your explicit consent, or exercising legal rights establishing, defending or exercising legal claims or reasons of substantial public interest.
            </p>
          </section>

          <section id="app-usage" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Information we collect or generate when you use the BantuPay App and our services</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
              <li>details about payments to and from your BantuPay account;</li>
              <li>details about services from us and our partners that you show interest in;</li>
              <li>details about how you use our app; and</li>
            </ul>
          </section>

          <section id="uninstall" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Uninstall</h2>
            <p>
              You can stop the collection of information by our app by uninstalling it using the standard uninstall procedure for your device.
            </p>
          </section>

          <section id="closing" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">Miscellaneous and Closing</h2>
            <section id="updating" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Updating your information</h3>
              <p>
                If you believe that the information we hold about you is inaccurate or that we are no longer entitled to use it and want to request its rectification, deletion, or object to its processing, please do so within your user account or contact us. For your protection and the protection of all of our users, we may ask you to provide proof of identity before we can answer the above requests.
              </p>
              <p>
                Keep in mind, we may reject requests for certain reasons, including if the request is unlawful or if it may infringe on trade secrets or intellectual property or the privacy of another user. Also, we may not be able to accommodate certain requests to object to the processing of personal information, notably where such requests would not allow us to provide our service to you anymore.
              </p>
            </section>

            <section id="external-links" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">External Links</h3>
              <p>
                Our website and app contain links to the online offers of other providers. We hereby point out that we have no influence on the content of the linked online offers and the compliance with data protection regulations by their providers.
              </p>
            </section>

            <section id="obligation" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Obligation to provide personal data</h3>
              <p>
                You are not obliged to provide us with personal data. However, depending on the individual case, the provision of certain personal data may be necessary for the provision of the above services. If you do not provide us with this personal data, we may not be able to provide the service.
              </p>
            </section>

            <section id="changes" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Changes and updates to the privacy policy</h3>
              <p>
                We kindly ask you to regularly inform yourself about the content of our privacy policy. We will amend the privacy policy as soon as changes to the data processing activities we carry out make this necessary. We will inform you as soon as the changes require an act of cooperation on your part (e.g., consent) or other individual notification.
              </p>
            </section>

            <section id="contact" className="scroll-mt-32 space-y-4">
              <h3 className="font-semibold">Who should I contact for more information?</h3>
              <p>
                If you have any questions or comments about our Privacy Policy or wish to exercise your rights under applicable laws, please contact us using the following contact details:
              </p>
              <p>
                <strong>BantuPay</strong>
                <br />
                128 City Road, EC1V 2NX, London,
                <br />
                United Kingdom
                <br />
                <br />
                Web: {" "}
                <a className={linkClass} href="https://www.bantu-pay.com" target="_blank" rel="noopener noreferrer">
                  www.bantu-pay.com
                </a>
                <br />
                E-Mail: {" "}
                <a className={linkClass} href="mailto:admin@bantu-pay.com">
                  admin@bantu-pay.com
                </a>
              </p>
            </section>
          </section>

          <p>
            <em>This Privacy Policy was last updated on Monday, 21 November 2022.</em>
          </p>
        </article>
      </div>
    </main>
  );
}
