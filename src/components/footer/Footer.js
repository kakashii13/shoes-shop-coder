import "../../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className=" d-flex align-items-center justify-content-between container mx-2">
        <h3>Shoes shop</h3>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/matias-dominguez-b9b91a142/"
          >
            <img src="https://icongr.am/fontawesome/linkedin-square.svg?size=29&color=36768c" />
          </a>
          <a target="_blank" href="https://github.com/kakashii13">
            <img src="https://icongr.am/fontawesome/github-square.svg?size=29&color=333738" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
