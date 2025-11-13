export const metadata = {
  title: "Terms and Conditions | BantuPay",
  description:
    "Terms and Conditions governing the use of BantuPay services, account activation, loading, usage, security, liabilities, changes, data protection, and governing law.",
};

const linkClass =
  "text-amber-600 underline decoration-2 underline-offset-4 transition duration-150 hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-200";

const quickLinks = [
  { id: "activating", label: "Activating" },
  { id: "loading", label: "Loading" },
  { id: "using", label: "Using" },
  { id: "authorising", label: "Authorising" },
  { id: "cancellation", label: "Cancellation" },
  { id: "redemption", label: "Redemption" },
  { id: "refunds", label: "Refunds" },
  { id: "security", label: "Security" },
  { id: "unauthorised", label: "Unauthorised" },
  { id: "your-liability", label: "Your Liability" },
  { id: "our-liability", label: "Our Liability" },
  { id: "changes", label: "Changes" },
  { id: "your-details", label: "Your Details" },
  { id: "data-protection", label: "Data Protection" },
  { id: "communication", label: "Communication" },
  { id: "complaints", label: "Complaints" },
  { id: "compensation", label: "Compensation" },
  { id: "assignment", label: "Assignment" },
  { id: "governing-law", label: "Governing Law" },
];

export default function TermsAndConditionsPage() {
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
            width={40}
            height={40}
            className="mx-auto h-20 w-20 bg-amber-50 rounded-lg object-contain"
          />
          <h1 className="mt-6 font-feature text-4xl font-semibold text-[#2d140a] dark:text-white">
            Terms and Conditions
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            These Terms and Conditions (the “Terms”) constitute a legal agreement between you and BantuPay LTD of 128 City Road, EC1V 2NX, London, United Kingdom under sublicense of [Insert Licensor] of [Insert Licensor`s Address] registered with the Financial Conduct Authority (“FCA”) under the Electronic Money Regulations 2011 (FRN [Insert]) as a small electronic money institution) for the issuing of electronic money and provision of payment services.
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
          <section id="activating" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">1. Activating a BantuPay Account</h2>
            <p>1.1. To activate your BantuPay Account you must be at least 14 years old. We will require evidence of your identity.</p>
            <p>1.2. You must provide us with your name, email, phone number to sign up for a BantuPay account.</p>
          </section>

          <section id="loading" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">2. Loading your BantuPay Account</h2>
            <p>2.1. To start using our Services, you must open a BantuPay Account and provide your details as prompted.</p>
            <p>2.2. All information you provide to us must be complete, accurate and truthful at all times. You must update this information whenever it changes. We cannot be responsible for any financial loss arising out of your failure to do so. We may ask you at any time to confirm the accuracy of your information and/or provide additional supporting documents.</p>
            <p>2.3. All activities under a BantuPay Account shall be deemed as activities carried out by the registered user. You shall only use the Services to transact on your own account and not on behalf of any other person or entity.</p>
            <p>2.4. You may only open one BantuPay Account unless we have agreed in writing the opening of additional accounts. BantuPay may refuse the creation of duplicate accounts for the same user. Where duplicate accounts are detected, BantuPay may close or merge these duplicate accounts at its sole discretion.</p>
            <p>2.5. You may load funds onto your BantuPay Account by transfers from your bank card or deposit physical cash at a mobile agent. Your BantuPay Account cannot be loaded by a balance transfer from a credit card.</p>
            <p>2.6. All your transactions (including your current Balance, money you have uploaded, received, sent and/or withdrawn) are recorded in the transaction history section of your BantuPay Account. You can access this information after you log in to your BantuPay Account. We have allocated a reference number to each transaction; you should quote this reference number when communicating with us about a particular transaction.</p>
            <p>2.7. You must check your BantuPay Account regularly and carefully and contact us immediately if you don’t recognise a transaction or think we have made a payment incorrectly. You must tell us about any unauthorised or incorrectly executed transactions immediately otherwise you may not be entitled to have any errors corrected.</p>
            <p>2.8. Your monthly Account statements will be available at all times in the app, these can be obtained by clicking on the TRANSACTIONS.</p>
            <p>2.9. A fee will apply for each load you make, please refer to BantuPa`s Fees and Limits Schedule. Certain minimum and maximum limits apply to your BantuPay Account, such limits are detailed in BantuPay`s Fees and Limits Schedule. We reserve the right to refuse to accept any particular transaction if we suspect any fraudulent activity or in the event of other exceptional circumstances. Once we have received the funds from you, your funds will be available for use without delay.</p>
            <p>2.10. You will receive notification when funds are loaded onto your account.</p>
            <p>2.11. Your BantuPay Account allows you to hold, send or receive electronic money/payments.</p>
            <p>2.12. The electronic money held on your BantuPay Account will not earn any interest.</p>
            <p>2.13. You may hold your electronic money in any currencies which we support.</p>
            <p>2.14. The electronic money held on your BantuPay Account belongs to the person or legal entity which is registered as the BantuPay Account holder.</p>
            <p>2.15. Unless you have our consent in writing, you must not allow anyone to operate your BantuPay Account on your behalf.</p>
          </section>

          <section id="using" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">3. Using your BantuPay Account</h2>
            <p>3.1. Your BantuPay Account is denominated in the Denominated Currency. If you make a purchase or carry out a cash withdrawal from a mobile agent in any other currency we will convert the sum into the Denominated Currency using the exchange rate set by our payment system on the day they process the transaction. We recommend that you check the balance and any recent transactions on your BantuPay Account regularly through your BantuPay App or by contacting Customer Services.</p>
            <p>3.2. If you dispute a transaction that has been processed in your BantuPay Account you should contact the merchant first as this may lead to a quicker resolution. If the dispute cannot be resolved with the merchant you should contact us. We will refund the amount of any transactions which our investigations show are not authorised by you, provided you have kept your BantuPay Account PIN secured, you have not acted fraudulently, or acted without reasonable care. We may at anytime suspend, restrict or cancel your BantuPay Account. for reasons relating to the following:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>3.2.1. We are concerned about security of your BantuPay account.</li>
              <li>3.2.2. We suspect your BantuPay Account is being used in an unauthorised or fraudulent manner;</li>
              <li>3.2.3. Or we need to do so to comply with the law.</li>
            </ul>
            <p>3.3. If we do this, we will tell you as soon as we can or are permitted to do so after we have taken these steps. We may restrict your account if it is dormant for a period in excess of 3 months.</p>
            <p>3.4. We may also refuse to pay a transaction:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>3.4.1. if we are concerned about security of your BantuPay Account or we suspect your BantuPay Account is being used in an unauthorised or fraudulent manner;</li>
              <li>3.4.2. If sufficient funds are not loaded on your BantuPay Account at the time of a transaction to cover the amount of the transaction and any applicable fees;</li>
              <li>3.4.3. If there is an outstanding Shortfall on the BantuPay Account in accordance with Clause 10;</li>
              <li>3.4.4. If we have reasonable grounds to believe that you are not using the BantuPay Account in accordance with these Terms and Conditions;</li>
              <li>3.4.5. If we believe that a transaction is potentially suspicious or illegal (for example, if we believe that a transaction is being made fraudulently); or</li>
              <li>3.4.6. Because of errors, failures (whether mechanical or otherwise) or refusals by merchants or mobile agent partners.</li>
            </ul>
            <p>3.5. If we refuse to authorise a transaction, we will, if practicable, tell you why immediately unless it would be unlawful for us to do so. You may correct any information we hold and which may have caused us to refuse a transaction by contacting Customer Services.</p>
          </section>

          <section id="authorising" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">4. Authorising Transactions and Direct Debits</h2>
            <p>4.1. Subject to the features of your particular BantuPay Account, the authorisation of a transaction can include authorising any single transaction.</p>
            <p>4.2. A BantuPay Account transaction will be regarded as authorised by you where you authorise the transaction at the point of sale by following the instructions provided by the merchant or mobile agent to authorise the transaction, which includes:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>4.2.1. entering your PIN or providing any other security code;</li>
              <li>4.2.2. providing the BantuPay Account details and/or any other details as requested;</li>
            </ul>
            <p>4.3. An BantuPay Account transaction will be regarded as authorised by you when you access your account using your personal security details and make a transaction.</p>
            <p>4.4. Authorisation for a transaction may not be withdrawn (or revoked) by you once we have received it.</p>
            <p>4.5. We may charge you a fee if a transaction is revoked by you under this condition (BantuPay`s Fees and Limits Schedule).</p>
            <p>4.6. You are responsible that the Available Balance in your BantuPay Account is sufficient before any transaction is made. If you do not have a sufficient Available Balance in your BantuPay Account you need to top up using a debit card.</p>
          </section>

          <section id="cancellation" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">5. Cancellation of BantuPay Account</h2>
            <p>5.1. You have a legal right to close your BantuPay Account at any time.</p>
            <p>5.2. We may also cancel your agreement for any reason by giving you at least 1 month’s notice:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>5.2.1. If you break an important part of this agreement, or repeatedly break the agreement and fail to resolve the matter in a timely manner;</li>
              <li>5.2.2. If you act in a manner that is threatening or abusive to our staff, or any or our representatives;</li>
              <li>5.2.3. if you fail to pay fees or charges that you have incurred or fail to put right any Shortfall due on your BantuPay Account.</li>
            </ul>
            <p>5.3. You can request to withdraw all or part of your money in your BantuPay Account, after you log in to your BantuPay Account. You agree that your BantuPay Account is subject to withdrawal limits.</p>
            <p>5.4. We may also cancel your BantuPay Account immediately if we suspect fraud or misuse of your BantuPay Account, if we have any other security concerns or we need to do so to comply with the law. If we do this, we will tell you as soon as we can or are permitted to do so. In these circumstances, you must tell us what you want us to do with any unused funds within 3 months of the date we tell you your BantuPay Account will be closed. You can close your BantuPay Account by contacting Customer Services. You will not be entitled to a refund of money you have already spent on transactions authorised or any fees for use of the BantuPay Account.</p>
            <p>5.5. This agreement shall terminate when your BantuPay Account is closed.</p>
          </section>

          <section id="redemption" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">6. Redemption of funds and refunding transactions</h2>
            <p>6.1. You may request a refund on your BantuPay Account. To do so, you must contact Customer Services requesting a refund.</p>
            <p>6.2. All funds will be returned to you on the payment card that used to fund the BantuPay Account or to a bank account in your name. We reserve the right to see proof of your ownership of the payment instrument or bank account before transferring the funds to it. To enable us to comply with our legal obligations, we may ask you to provide us with certain information such as identification documents before we can process your refund request.</p>
          </section>

          <section id="refunds" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">7. Refunding Transactions</h2>
            <p>7.1. You may be entitled to claim a refund in relation to transactions where:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>7.1.1. The transaction was not authorised under this agreement;</li>
              <li>7.1.2. We are responsible for a transaction which was incorrectly executed by us (see lost, stolen or unauthorised payment Clause);</li>
              <li>7.1.3. a pre-authorised transaction did not specify the exact amount at the time of its authorisation and the amount charged by a supplier is more than you could reasonably have expected taking into account normal spending patterns on the BantuPay Card and BantuPay Account or the circumstances of the transaction. A claim for a refund in these circumstances will not be accepted if the amount of the transaction was made available to you at least 4 weeks before the transaction date or if the claim is made more than 8 weeks after being debited to your BantuPay account.</li>
            </ul>
          </section>

          <section id="security" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">8. Keeping your BantuPay Account secure</h2>
            <p>8.1. We recommend that you check the balance on your BantuPay App regularly through your BantuPay Account. We can provide you with your BantuPay Account balance and a statement of recent transactions by mail. Your statement will show:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>8.1.1. information relating to each BantuPay Account transaction which will enable it to be identified;</li>
              <li>8.1.2. The amount of the BantuPay Account transaction shown in the currency in which the transaction was paid or debited to the account;</li>
              <li>8.1.3. The amount of charges for the transaction;</li>
              <li>8.1.4. The date the transaction is authorised or posted on to the account.</li>
            </ul>
          </section>

          <section id="unauthorised" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">9. Unauthorised payment</h2>
            <p>9.1. If you believe any of your BantuPay Account transactions are unauthorised or incorrectly executed, you must notify us as soon as possible but within 1 month of the date of debit. If you ask us to do so, we will investigate any disputed transaction or misuse of your BantuPay Account and we may need more information and assistance from you.</p>
            <p>9.2. Your maximum liability for any unauthorised transactions on your BantuPay Account depends on the transaction amount, unless the investigations show that any disputed transaction was authorised by you, or you have acted fraudulently or with gross negligence (for example by failing to keep your BantuPay Account PIN secure or by failing to notify us and without delay on becoming aware of the loss, theft, misappropriation or unauthorised use of the payment instrument), in which case we will not refund the transaction amount.</p>
            <p>9.3. Provided you have not acted fraudulently we will refund the amount of any transactions which our investigations show are not authorised by you arising after you notify us of the loss, theft, misappropriation or unauthorised use of your BantuPay Account.</p>
          </section>

          <section id="your-liability" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">10. Your liability</h2>
            <p>10.1. In the event that you do not use your BantuPay Account in accordance with these Terms and Conditions or we find that you are using the BantuPay Account fraudulently, we reserve the right to charge you for any reasonable costs that we incur in taking action to stop you using your BantuPay Account and to recover any monies owed as a result of your activities.</p>
            <p>10.2. In the unlikely event, for any reason whatsoever, a transaction is completed when there are insufficient funds in your BantuPay Account for that transaction (a “Shortfall”), the Shortfall shall be reimbursed by you unless it is due to an error on the part of the retailer, in this circumstance we may seek the Shortfall from the retailer.</p>
            <p>10.3. You agree that once we make this Shortfall known to you, we may charge you for the Shortfall amount. We will charge the amount of the Shortfall from your next top up. Until we are reimbursed the Shortfall amount, we may suspend your BantuPay Account. In addition, we reserve the right to charge you an Administration Fee (BantuPay`s Fees and Limits Schedule) for each transaction that you make using your BantuPay Account that results in a Shortfall.</p>
            <p>10.4. You agree to honour all transactions carried out by the account holder. You will be responsible for the use of your BantuPay Account and for any applicable fees and charges.</p>
          </section>

          <section id="our-liability" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">11. Our liability</h2>
            <p>11.1. We cannot guarantee all retailers will accept your BantuPay Account payments, or that we will necessarily authorise any particular transaction. This may be because of a systems problem, something outside our reasonable control, to comply with legal and regulatory requirements, or because we have suspended, restricted, or cancelled your BantuPay Account in accordance with these Terms and Conditions. We shall not be liable in any event that a retailer refuses to accept your BantuPay Payments, or if we do not authorise a transaction, or if we cancel or suspend use of your BantuPay Account.</p>
            <p>11.2. From time to time, your ability to use your BantuPay Account may be interrupted, e.g., when we carry out maintenance. If this happens, you may be unable (a) to use your BantuPay Account to pay for purchases or obtain cash from a mobile money agent. To obtain information about the funds available in your BantuPay Account and/or about your recent transactions. We will not be liable for any loss arising from such interruptions.</p>
            <p>11.3. Unless otherwise required by law, we shall not be liable for any direct or indirect loss or damage you may suffer including loss of revenue, goodwill, opportunity, or anticipated savings as a result of your total or partial use or inability to use your BantuPay Account, or the use of your BantuPay Account by any third party.</p>
            <p>11.4. We are not responsible for the quality, safety, legality or any other aspect of any goods or services purchased with your BantuPay Account. Remember that once you have used your BantuPay Account to make a purchase we cannot stop that transaction.</p>
          </section>

          <section id="changes" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">12. Changes to these Terms and Conditions</h2>
            <p>12.1. We may change these Terms by notifying you by e-mail or other agreed means at least 2 months before the change is due to take effect. The notices and up-to-date version of the BantuPay Terms and Conditions will always be available on the Website. You should check the site regularly for such notices and changes.</p>
            <p>12.2. Unless you tell us that you do not agree to the change prior to the change being effective we will assume you accept such change. Any objections to our charges will be treated as notification that you wish immediately to terminate. In such circumstances we will refund any balance on your BantuPay Account and you will not be charged any fees.</p>
            <p>12.3. Any changes to the exchange rate used to convert foreign transactions will be made immediately.</p>
          </section>

          <section id="your-details" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">13. Your details</h2>
            <p>
              You must let us know as soon as possible if you change name, address, telephone number, mobile number or e-mail address. If we contact, you in relation to your BantuPay Account we will use the most recent contact details you have provided to us. Any e-mail or push message sent to you will be treated as being received as soon as it is sent by us. We will not be liable to you if your contact details have changed, and you have not told us.
            </p>
          </section>

          <section id="data-protection" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">14. Data protection</h2>
            <p>14.1. We will process and retain personal data in order to open, administer and run your BantuPay Account. We will transfer your personal data within our groups of companies and to other third parties in order to issue and run your BantuPay Account. We will transfer your personal data, including details of your transactions, within our group of companies and to the Distributor to carry out, monitor and analyse our relevant business. If we transfer your information to third parties outside of the European Union, we will take steps to ensure that the third party agrees to apply the same levels of protection that apply in the UK.</p>
            <p>14.2. If you have agreed, we or other third parties may also contact you to let you know about services that are of interest to you. You can contact us if you don’t want to receive any marketing materials from us or other third parties.</p>
            <p>14.3. We may check personal information with fraud protection agencies and other organisations, and we may get information about you from recognised agencies to verify your identity. A record of such enquiries may be left on your file.</p>
            <p>14.4. We will tell fraud prevention agencies if you give us false or inaccurate information and we suspect fraud.</p>
            <p>14.5. We may monitor and/or record telephone calls we have with you to help us maintain and improve the quality of the service we provide to you.</p>
            <p>14.6. If you wish to obtain a copy of your personal data we hold, please contact Customer Services. For further information please see our privacy policy.</p>
          </section>

          <section id="communication" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">15. Communication</h2>
            <p>If you have an enquiry relating to your BantuPay Account, contact Customer Services. We will deal with your enquiry promptly.</p>
          </section>

          <section id="complaints" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">16. Complaints</h2>
            <p> If you are unhappy in any way with your BantuPay Account or the way it is managed, you can contact Customer Services so we can investigate the circumstances for you. Any complaints you have will be dealt with quickly and fairly. If we are unable to resolve your complaint to your satisfaction you may contact the Financial Ombudsman Service at South Quay Plaza, 183 Marsh Wall, London E14 9SR. Telephone: 0845 080 1800 or +44 (0)20 7964 1000 (for calls from outside the UK) and e-mail: <a className={linkClass} href="mailto:enquiries@financial-ombudsman.org.uk">enquiries@financial-ombudsman.org.uk</a></p>
          </section>

          <section id="compensation" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">17. Compensation and fund protection</h2>
            <p>BantuPay Account is an electronic money product and although it is a product regulated by the Financial Conduct Authority, it is not covered by the Financial Services Compensation Scheme. No other compensation scheme exists to cover losses claimed in connection with the BantuPay Account. We ensure that any funds received by you are held in a segregated account so that should we become insolvent your funds will be protected against claims made by creditors.</p>
          </section>

          <section id="assignment" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">18. Assignment</h2>
            <p>18.1. You may not transfer or assign any rights or obligations you may have under these Terms and Conditions to any other person without our prior written consent.</p>
            <p>18.2. We may assign the benefit and burden of these Terms and Conditions to any other person at any time on giving you 1-month prior notice of this. If we do this, your rights will not be affected.</p>
          </section>

          <section id="governing-law" className="scroll-mt-32 space-y-4">
            <h2 className="font-semibold">19. Governing law</h2>
            <p>This agreement is concluded in English. All communications with you will be in English. These Terms and Conditions will be construed in accordance with English law and the exclusive jurisdiction of the English courts.</p>
          </section>

          <p>
            <em>These Terms and Conditions were last provided by you for publication.</em>
          </p>
        </article>
      </div>
    </main>
  );
}
