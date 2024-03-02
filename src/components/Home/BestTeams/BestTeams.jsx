import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BestTeamsCard } from "./BestTeamsCard";
import testimonial from "../../../../public/testimonial.json";
const BestTeams = () => {
  console.log(testimonial);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="py-[60px]">
      <div className="container">
        <div>
          <h2 className="text-primary  text-5xl font-bold text-center">
            Loved by the world's best teams
          </h2>
          <div className="text-center mt-6 flex items-center justify-center">
            <Link
              className="px-9 py-2 flex items-center gap-2 rounded-full border border-solid border-secondary text-lg text-secondary"
              to={""}
            >
              See all customer stories <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* teams */}
        <div className="mt-24">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all 10s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px px-10"
          >
            {testimonial.map((item, index) => (
              <BestTeamsCard testimonial={item} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BestTeams;
