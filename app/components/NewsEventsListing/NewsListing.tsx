import '@/app/components/NewsEventsListing/listing.scss'
import LightSectionContainer from "../Common/LightSectionContainer";
import { newsEvents } from "../NewsEvents/data";
import ListItem from "./NewsListItem";
const Listing = () => {
    return (
      <LightSectionContainer>
        <div className="container">
          <div className="news-list">
            {newsEvents.map((item)=>( 
                <ListItem listData={item} key={item.id} />
            ))}
          </div>
        </div>
      </LightSectionContainer>
    );
}
 
export default Listing;