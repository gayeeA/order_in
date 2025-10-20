import InventoryImg from "../../assets/Dashboard/inventory.png";
import MenuImg from "../../assets/Dashboard/menu.png";
import FinancialImg from "../../assets/Dashboard/finance.png";
import OrdersImg from "../../assets/Dashboard/order.png";
// import Header from "./header.jsx"
// import Footer from "./footer.jsx"

import "./Dashboard.css";

const LandingPage = () => {
  return (
    <div>
    <div className="landing-container-">
      <div className="content-">
        <div style={{marginBottom: '30px'}}>
            <h2 style={{marginBottom:'10px', color : '#43A047'}}> Simplifying restaurant management</h2>
            <h2 >one click at a time</h2>
        </div>

        <div className="cards-section">
          <div className="card-">
            <img src={MenuImg} alt="MenuIcon" />
            <h3>Menu</h3>
            <p>Keep dishes, categories, and promotions updated.</p>
            <button>Open</button>
          </div>

          <div className="card-">
            <img src={FinancialImg} alt="Financial" />
            <h3>Financial</h3>
            <p>Handle transactions, generate bills, and access reports.</p>
            <button>Open</button>
          </div>

          <div className="card-">
            <img src={OrdersImg} alt="Orders" />
            <h3>Orders</h3>
            <p>Track live orders and view history in real time.</p>
            <button>Open</button>
          </div>

          <div className="card-">
            <img src={InventoryImg} alt="Inventory" />
            <h3>Inventory</h3>
            <p>Monitor stock levels and receive low-stock alerts.</p>
            <button>Open</button>
          </div>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
    </div>

  );
};

export default LandingPage;
