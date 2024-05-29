import { Link } from "react-router-dom";
// import banner3_1 from "../../../assets/images/media/banner3-1.png";
// import banner3_2 from "../../../assets/images/media/banner3-2.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BannerThree() {
 return (
  <div className="hero-banner-promo-three">
   <div className="body">
    <div className="first-image">
     <LazyLoadImage
      className="banner"
      src={"https://a-s3-backoffice.s3.amazonaws.com/web/banner3-1_b8gask.png"}
     />
    </div>
    <div className="section-text">
     <h2>Maneja tu tienda virtual en un solo lugar</h2>
     <div className="content-button">
      {/* <input placeholder="Correo electrónico"/> */}
      <Link to={"/nueva-tienda"} className="btn-one">
       Crear tu tienda
      </Link>
     </div>
     <p>¡Despreocúpate! Empieza a vivir la experiencia de una Tienda Online.</p>
    </div>
    <div className="second-image">
     <LazyLoadImage
      className="banner"
      src={"https://a-s3-backoffice.s3.amazonaws.com/web/banner2-2_pwcof7.png"}
     />
    </div>
   </div>
  </div>
 );
}

export default BannerThree;
