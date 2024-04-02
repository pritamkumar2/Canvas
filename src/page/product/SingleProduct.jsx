import React, { useState } from "react";
import "./singleProduct.css";
import FeedbackSection from "../../Components/Review&Rating/FeedbackSection";
import RateSection from "../../Components/Review&Rating/RateSection";
import ReviewsSection from "../../Components/Review&Rating/ReviewsSection";
import ProductDetailSection from "../../Components/ProductDetail/ProductDetailSection";
import SimilarProduct from "../../Components/SimilerProduct/SimilerProduct";

const SingleProduct = () => {
  const [showRating, setShowRating] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

const data = {
  
}


  const handleRateClick = (e) => {
    e.preventDefault();
    setShowRating(true);
    setShowReviews(false);
    setShowFeedback(false);
  };

  const handleReviewClick = (e) => {
    e.preventDefault();
    setShowRating(false);
    setShowReviews(true);
    setShowFeedback(false);
  };

  const handleFeedbackClick = (e) => {
    e.preventDefault();
    setShowRating(false);
    setShowReviews(false);
    setShowFeedback(true);
  };

  return (
    <div>
      <div className="text-gray-900 py-4 bg-white">
        <div className="container mx-auto px-6">
          <div className="py-3">
            <ProductDetailSection />
            {/* Rating, Reviews, and Feedback Buttons */}
            <div className="mt-6 flex justify-center center bg-gray-300 ">
              <button onClick={handleRateClick} className="mr-4">
                Rate
              </button>
              <button onClick={handleReviewClick} className="mr-4">
                Review
              </button>
              <button onClick={handleFeedbackClick}>Feedback</button>
            </div>

            {showRating && <RateSection />}

            {showReviews && <ReviewsSection />}

            {showFeedback && <FeedbackSection />}
          </div>
        </div>

        {/* similer product */}
<SimilarProduct product={data}/>
        
      </div>
    </div>
  );
};

export default SingleProduct;
