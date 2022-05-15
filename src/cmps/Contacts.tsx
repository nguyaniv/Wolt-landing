type Props = {};

export default function Contacts({}: Props) {
  return (
    <div className="contacts">
      <div className="contacts__container">
        <h2 className="contacts__header">Contacts</h2>

        <div className="contacts__content">
          <form className="contacts__form">
            <h4>Leave your details</h4>
            <p>Our operator will contact you</p>

            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Phone" />
            <input type="email" placeholder="E-mail" />

            <button>See more</button>
          </form>
          <div className="contacts__features">
            <h2>phone</h2>
            <li>054-760-20-25</li>
            <h2>E-mail</h2>
            <li>yanivcode@gmail.com</li>
            <h2>Facebook</h2>
            facebook.com/Wolt
          </div>

          <div className="contacts__location">
            <h2>Our office location</h2>
            <img src={process.env.PUBLIC_URL + '/images/Map.png'} alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
}
