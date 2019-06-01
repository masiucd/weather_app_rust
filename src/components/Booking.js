/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

export default function Booking() {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start Booking Now!</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  required
                  placeholder="full name"
                  id="name"
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  required
                  placeholder="email"
                  id="email"
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    name="size"
                    id="small"
                    className="form__radio-input"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button" />
                    Small tour group
                  </label>
                </div>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    name="size"
                    id="large"
                    className="form__radio-input"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button" />
                    Large tour group
                  </label>
                </div>
              </div>
              <div className="form__group">
                <button className="btn btn--green">Next Step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
