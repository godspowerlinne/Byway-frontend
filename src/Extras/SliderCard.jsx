import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    quote: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.",
    name: "Jane Doe",
    role: "Designer"
  },
  {
    quote: "The practical assignments and real-world projects helped me build a strong portfolio. I landed my dream job thanks to these courses!",
    name: "John Smith",
    role: "Developer"
  },
  {
    quote: "The instructors are industry experts who provide valuable insights. The community support is incredible too.",
    name: "Sarah Wilson",
    role: "Product Manager"
  },
  {
    quote: "Comprehensive curriculum that covers both fundamentals and advanced concepts. Worth every penny!",
    name: "Mike Johnson",
    role: "Tech Lead"
  }
];

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col gap-4 max-w-[432px] p-6 h-[276px] rounded-2xl border border-slate-200 bg-white transition-colors hover:bg-blue-500/10">
      <div className="p-2">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-500"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <q className="text-gray-700">{review.quote}</q>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
          <span className="text-slate-600 text-lg font-medium">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <h5 className="text-lg font-semibold">{review.name}</h5>
          <small className="text-sm text-gray-600">{review.role}</small>
        </div>
      </div>
    </div>
  );
};

const CustomArrow = ({ direction, onClick }) => {
  const Icon = direction === 'next' ? ChevronRight : ChevronLeft;
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"
      aria-label={`${direction} slide`}
    >
      <Icon className="w-5 h-5 text-slate-700" />
    </button>
  );
};

const CustomersReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          What Our Customers Say
        </h2>
        <div className="hidden lg:flex gap-2">
          <CustomArrow direction="prev" onClick={() => {}} />
          <CustomArrow direction="next" onClick={() => {}} />
        </div>
      </div>
      <div className="reviews-slider">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomersReviews;