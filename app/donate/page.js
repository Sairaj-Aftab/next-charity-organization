"use client";
import { useEffect, useState } from "react";
import DonateForm from "@/components/DonateForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function Donate() {
  const [clientSecret, setClientSecret] = useState(null);
  const [input, setInput] = useState({
    amount: "",
    name: "",
    email: "",
  });
  const changeInputValue = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleNextProcessing = (e) => {
    e.preventDefault();
    if (!input.amount || !input.name || !input.email) {
      console.log("All fields are required");
    } else {
      // Create PaymentIntent as soon as the page loads
      axios
        .post(`/api/create_payment`, {
          data: { id: "xl-tshirt", amount: input.amount },
        })
        .then((res) => setClientSecret(res?.data?.clientSecret))
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <section className="donate-section">
      <div className="section-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mx-auto">
            {!clientSecret && (
              <form
                className="custom-form donate-form"
                onSubmit={handleNextProcessing}
              >
                <h3 className="mb-4">Make a donation</h3>

                <div className="row">
                  <div className="col-lg-12 col-12">
                    <h5 className="mb-3">Donation Frequency</h5>
                  </div>

                  <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="DonationFrequency"
                        id="DonationFrequencyOne"
                        checked
                      />

                      <label
                        className="form-check-label"
                        htmlFor="DonationFrequencyOne"
                      >
                        One Time
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="DonationFrequency"
                        id="DonationFrequencyMonthly"
                      />

                      <label
                        className="form-check-label"
                        htmlFor="DonationFrequencyMonthly"
                      >
                        Monthly
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-12">
                    <h5 className="mt-2 mb-3">Select an amount</h5>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="amount"
                        id="flexRadioDefault1"
                        value="10"
                        onChange={changeInputValue}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        $10
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="amount"
                        id="flexRadioDefault2"
                        value="15"
                        onChange={changeInputValue}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        $15
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="amount"
                        id="flexRadioDefault3"
                        value="20"
                        onChange={changeInputValue}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        $20
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="amount"
                        id="flexRadioDefault4"
                        value="30"
                        onChange={changeInputValue}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault4"
                      >
                        $30
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="amount"
                        id="flexRadioDefault5"
                        value="45"
                        onChange={changeInputValue}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault5"
                      >
                        $45
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="amount"
                        id="flexRadioDefault6"
                        value="50"
                        onChange={changeInputValue}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault6"
                      >
                        $50
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12 form-check-group">
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        $
                      </span>

                      <input
                        type="number"
                        min="10"
                        className="form-control"
                        placeholder="Custom amount"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="amount"
                        // value={input.amount}
                        onChange={changeInputValue}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-12">
                    <h5 className="mt-1">Personal Info</h5>
                  </div>

                  <div className="col-lg-6 col-12 mt-2">
                    <input
                      type="text"
                      name="name"
                      id="donation-name"
                      className="form-control"
                      placeholder="Jack Doe"
                      required
                      value={input.name}
                      onChange={changeInputValue}
                    />
                  </div>

                  <div className="col-lg-6 col-12 mt-2">
                    <input
                      type="email"
                      name="email"
                      id="donation-email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Jackdoe@gmail.com"
                      required
                      value={input.email}
                      onChange={changeInputValue}
                    />
                  </div>

                  {/* <div className="col-lg-12 col-12">
            <h5 className="mt-4 pt-1">Choose Payment</h5>
          </div> */}

                  <div className="col-lg-12 col-12 mt-2">
                    {/* <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="DonationPayment"
                id="flexRadioDefault9"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault9">
                <i className="bi-credit-card custom-icon ms-1"></i>
                Debit or Credit card
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="DonationPayment"
                id="flexRadioDefault10"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault10">
                <i className="bi-paypal custom-icon ms-1"></i>
                Paypal
              </label>
            </div> */}

                    <button type="submit" className="form-control mt-4">
                      Next processing
                    </button>
                  </div>
                </div>
              </form>
            )}
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <DonateForm />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donate;
