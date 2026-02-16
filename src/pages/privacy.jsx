import PageHeader from "../components/PageHeader";
export default function Privacy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        backgroundImage="https://kualakubsworldschool.com/assets/kualakubs%20home%20image%202-DokhlqL5.png"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Privacy Policy", active: true },
        ]}
      />
      <section className="container my-5">
        <p>
          Thank you for visiting the Kualakubs World School website and
          reviewing our privacy policy. Our policy is simple: We collect no
          personal information about you unless you choose to provide that
          information to us. We strictly do not share, give, transfer, or sell
          any of your personal information to any third party.
        </p>

        <p>
          If you would like to understand how we record non-personal information
          when you visit our website or how we use the information you
          voluntarily submit, please read further.
        </p>

        <h3>Non-Personal Information That We Record</h3>

        <p>
          When you visit our website and browse, read pages, or download
          information, our website’s operating system may automatically record
          certain general information about your visit.
        </p>
        <p>During your visit, our system may record:</p>
        <ul>
          <li>
            The Internet domain of your internet service provider, such as
            "xyz.com" or "xyz.net," if you are using a private internet access
            account, or if you are accessing from a school, college, or
            organizational domain.
          </li>
          <li>
            The type of browser you are using (for example, Chrome, Firefox,
            Safari, etc.).
          </li>
          <li>
            The operating system you are using (such as Windows, macOS, Linux,
            Android, or iOS).
          </li>
          <li>The date and time of your visit.</li>
          <li>The pages you access on our website.</li>
          <li>
            The address of the previous website you visited, if you linked to us
            from another website.
          </li>
        </ul>
        <p>
          This information is collected for statistical analysis and to help us
          improve the usability and effectiveness of our website. No individual
          or personally identifiable information is recorded through this
          tracking process.
        </p>

        <h3>Cookies</h3>

        <p>
          We use “cookies” on certain pages of the Kualakubs World School
          website to enhance your browsing experience and enable interactive
          features.
        </p>
        <p>
          A cookie is a small file that a website transfers to your computer’s
          hard drive, usually to keep track of your session while you are
          connected to that website.
        </p>
        <p>The cookies used on our website:</p>

        <ul>
          <li>Do not collect personal information.</li>
          <li>Help maintain your browser session.</li>
          <li>
            Make navigation easier by preventing you from having to re-enter the
            same information while moving between pages.
          </li>
        </ul>

        <p>
          To protect your privacy, please ensure that you close your browser
          completely after completing your session on websites that use cookies.
        </p>

        <p>
          If you are concerned about cookies, you can configure your browser
          settings to notify you before accepting cookies. Most modern browsers
          provide options to view, manage, or disable cookies.
        </p>
      </section>
    </>
  );
}
