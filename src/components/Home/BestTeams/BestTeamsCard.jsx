/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const BestTeamsCard = ({ testimonial }) => {
  console.log(testimonial);
  return (
    <div className="max-h-[460px] h-full flex flex-col ">
      <div className="space-y-7 flex-1">
        <img src={testimonial?.logo} alt="" />
        <p className="text-lg text-primary text-justify">
          {testimonial?.testimonialsContent}
        </p>
      </div>
      <div className="flex gap-5 mt-12">
        <div>
          <img src={testimonial.image} alt="" />
        </div>
        <div className="text-sm text-primary/60">
          <p>{testimonial.customer_name}</p>
          <p>{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );
};
