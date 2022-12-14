import { useEffect, useState } from "react";
import { getReviews } from "../api";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import './ReviewForm.css'
import { createReview, updateReview } from "../api";

const LIMIT = 10;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  // const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = id => {
    const nextItems = items.filter(item => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async options => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);

      result = await getReviews(options);
    } catch (error) {

      setLoadingError(error);
      return;

    } finally {
      setIsLoading(false);
    }

    const { reviews, paging } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems(prevItems => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = async () => {
    handleLoad({ order, offset, LIMIT });
  };

  const handleCreateSuccess = (review) => {
    setItems((prevItems) => [review, ...prevItems]);
  }

  const handleUpdateSuccess = (review) => {
    setItems((prevItems) => {
    const splitIdx =  prevItems.findIndex((item)=> item.id===review.id);
    return [
      ...prevItems.slice(0, splitIdx), 
      review, 
      ...prevItems.slice(splitIdx + 1)
    ]
  })
}
  useEffect(
    () => {
      handleLoad({ order, offset: 0, limit: LIMIT });
    },
    [order]
  );

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>?????????</button>
        <button onClick={handleBestClick}>????????????</button>
      </div>
      <ReviewForm onSubmit = {createReview} onSubmitSuccess = {handleCreateSuccess} ></ReviewForm>
      <ReviewList items={items} onUpdate = {updateReview} onUpdateSuccess = {handleUpdateSuccess} onDelete={handleDelete} />
      {hasNext &&
        <button disabled={isLoading} onClick={handleLoadMore}>
          ?????????
        </button>}
        {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
