import React from 'react';
import img1 from '../sass/img/nat-8.jpg';
import img2 from '../sass/img/nat-9.jpg';
import video from '../sass/img/video.mp4';
import video2 from '../sass/img/video.webm';

export default function Stories() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <source src={video2} type="video/webm" />
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people generously happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={img1} alt="person on a tour" className="story__img" />
            <figcaption className="story__caption">Mary blood</figcaption>
          </figure>

          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever here with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              reprehenderit nisi vitae sit officiis inventore similique ea
              libero sequi. Distinctio perferendis impedit consequuntur ad ea
              inventore consectetur quae temporibus? Tenetur reiciendis dolores
              quas eius, reprehenderit assumenda ducimus amet nulla, omnis dicta
              deserunt impedit neque ab.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={img2} alt="person on a tour" className="story__img" />
            <figcaption className="story__caption">James Bond</figcaption>
          </figure>

          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I just loved it, simple it is
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              reprehenderit nisi vitae sit officiis inventore similique ea
              libero sequi. Distinctio perferendis impedit consequuntur ad ea
              inventore consectetur quae temporibus? Tenetur reiciendis dolores
              quas eius, reprehenderit assumenda ducimus amet nulla, omnis dicta
              deserunt impedit neque ab.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="" className="btn-text">
          Read all Stories!!
        </a>
      </div>
    </section>
  );
}
