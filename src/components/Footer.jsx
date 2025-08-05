import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Tax Refund Germany. Все права защищены.
      </p>
    </footer>
  );
}

export default Footer;