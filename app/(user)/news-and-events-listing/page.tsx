import Index from "../../components/NewsEventsListing/Index";
import { Suspense } from "react";

const NewsAndEventsListingPage = () => {
    return ( 
        <Suspense>
        <Index/>
        </Suspense>
     );
}
 
export default NewsAndEventsListingPage;