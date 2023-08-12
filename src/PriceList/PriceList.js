import React, { Component } from "react";
import "./PriceList.css";
import moment from "moment";
import Swal from "sweetalert2";
import axios from "axios";

class PriceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPurchasedPlansNetflix: [],
      userPurchasedPlansHbomax: [],
      userPurchasedPlansDisney: [],
      netflix: [],
      hbomax: [],
      disney: [],
    };
  }
  getCurrentDatePlus6Months(month) {
    const currentDate = new Date();
    const sixMonthsLater = new Date(currentDate);
    sixMonthsLater.setMonth(currentDate.getMonth() + month);
    return sixMonthsLater.toLocaleDateString();
  }
  componentDidMount = () => {
    axios
      .get("./netflix.json")
      .then((response) => {
        this.setState({ netflix: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("./hbomax.json")
      .then((response) => {
        this.setState({ hbomax: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("./disney.json")
      .then((response) => {
        this.setState({ disney: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    const userPurchasedPlansNetflix = [1];
    this.setState({ userPurchasedPlansNetflix });

    const userPurchasedPlansHbomax = [];
    this.setState({ userPurchasedPlansHbomax });

    const userPurchasedPlansDisney = [];
    this.setState({ userPurchasedPlansDisney });
  };

  handleSendClick = (planID) => {
    const { netflix, hbomax, disney } = this.state;

    this.setState((prevState) => ({
      userPurchasedPlansNetflix: [
        ...prevState.userPurchasedPlansNetflix,
        planID,
      ],
      userPurchasedPlansHbomax: [...prevState.userPurchasedPlansHbomax, planID],
      userPurchasedPlansDisney: [...prevState.userPurchasedPlansDisney, planID],
    }));
    Swal.fire({
      icon: "success",
      title: "Thanks for renewal your subscription",
    });
  };

  render() {
    const { userPurchasedPlansNetflix } = this.state;
    const { userPurchasedPlansHbomax } = this.state;
    const { userPurchasedPlansDisney } = this.state;

    return (
      <div className="ContainerPrice">
        
        <div className="price-list">
        <h1 className="price">Your Subscription</h1>
          <h1 className="tille-name">Netflix</h1>
          <div className="BlockLarge">
            <div className="BlockSmall">
              {this.state.netflix.map((plan) => (
                <div
                  className={`Bundle ${
                    userPurchasedPlansNetflix.includes(plan.ID)
                      ? "purchased"
                      : "not-purchased"
                  }`}
                  key={plan.ID}
                >
                  <div className="Title">
                    <span>{plan.Name}</span>
                  </div>
                  <div className="price">
                    <span>
                      {userPurchasedPlansNetflix.includes(plan.ID)
                        ? "0$"
                        : `${plan.cost}$`}
                    </span>
                  </div>
                  <div className="TitleSmall">
                    <div>
                      <p className="active">Standard 4K image quality</p>
                    </div>
                    <div>
                      <p>No ads</p>
                    </div>
                    <div>
                      <p>Say No to Trial Account</p>
                    </div>
                    <div>
                      <p>full-time warranty</p>
                    </div>
                    <div>
                      <p>Optimum usage time</p>
                    </div>
                  </div>
                  <div className="date">
                  <span>
  {userPurchasedPlansNetflix.includes(plan.ID)
    ? plan.dealine
    : ''}
</span>
                  <span>
  {userPurchasedPlansNetflix.includes(plan.ID)
    ? this.getCurrentDatePlus6Months(plan.month)
    : plan.expired}
</span>

                  </div>
                  <div className="button">
                    {userPurchasedPlansNetflix.includes(plan.ID) ? (
                      <button type="button" className="button-buy" disabled>
                        {plan.button}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="button-buy"
                        onClick={() => this.handleSendClick(plan.ID)}
                      >
                        buy
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* hbomax */}

          <h1 className="tille-name">Hbomax</h1>
          <div className="BlockLarge">
            <div className="BlockSmall">
              {this.state.hbomax.map((plan) => (
                <div
                  className={`Bundle ${
                    userPurchasedPlansHbomax.includes(plan.ID)
                      ? "purchased"
                      : "not-purchased"
                  }`}
                  key={plan.ID}
                >
                  <div className="Title">
                    <span>{plan.Name}</span>
                  </div>
                  <div className="price">
                    <span>
                      {userPurchasedPlansNetflix.includes(plan.ID)
                        ? "0$"
                        : `${plan.cost}$`}
                    </span>
                  </div>
                  <div className="TitleSmall">
                    <div>
                      <p className="active">Standard 4K image quality</p>
                    </div>
                    <div>
                      <p>No ads</p>
                    </div>
                    <div>
                      <p>Say No to Trial Account</p>
                    </div>
                    <div>
                      <p>full-time warranty</p>
                    </div>
                    <div>
                      <p>Optimum usage time</p>
                    </div>
                  </div>
                  <div className="date">
                  <span>
  {userPurchasedPlansHbomax.includes(plan.ID)
    ? plan.dealine
    : ''}
</span>
                  <span>
  {userPurchasedPlansHbomax.includes(plan.ID)
    ? this.getCurrentDatePlus6Months(plan.month)
    : plan.expired}
</span>
                  </div>
                  <div className="button">
                    {userPurchasedPlansHbomax.includes(plan.ID) ? (
                      <button type="button" className="button-buy" disabled>
                        {plan.button}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="button-buy"
                        onClick={() => this.handleSendClick(plan.ID)}
                      >
                        buy
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* disney */}

          <h1 className="tille-name">Disney</h1>
          <div className="BlockLarge">
            <div className="BlockSmall">
              {this.state.disney.map((plan) => (
                <div
                  className={`Bundle ${
                    userPurchasedPlansDisney.includes(plan.ID)
                      ? "purchased"
                      : "not-purchased"
                  }`}
                  key={plan.ID}
                >
                  <div className="Title">
                    <span>{plan.Name}</span>
                  </div>
                  <div className="price">
                    <span>
                      {userPurchasedPlansNetflix.includes(plan.ID)
                        ? "0$"
                        : `${plan.cost}$`}
                    </span>
                  </div>
                  <div className="TitleSmall">
                    <div>
                      <p className="active">Standard 4K image quality</p>
                    </div>
                    <div>
                      <p>No ads</p>
                    </div>
                    <div>
                      <p>Say No to Trial Account</p>
                    </div>
                    <div>
                      <p>full-time warranty</p>
                    </div>
                    <div>
                      <p>Optimum usage time</p>
                    </div>
                  </div>
                  <div className="date">
                  <span>
  {userPurchasedPlansNetflix.includes(plan.ID)
    ? plan.dealine
    : ''}
</span>
                  <span>
  {userPurchasedPlansNetflix.includes(plan.ID)
    ? this.getCurrentDatePlus6Months(plan.month)
    : plan.expired}
</span>
                  </div>
                  <div className="button">
                    {userPurchasedPlansDisney.includes(plan.ID) ? (
                      <button type="button" className="button-buy" disabled>
                        {plan.button}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="button-buy"
                        onClick={() => this.handleSendClick(plan.ID)}
                      >
                        buy
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceList;
