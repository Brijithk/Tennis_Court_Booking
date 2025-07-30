import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/Home.css';
import { FaClock } from 'react-icons/fa';
import { forwardRef } from 'react';
import CalendarModal from './CalendarModal';

import { useState } from 'react';

type Court = {
  id: number;
  location: string;
  availableFrom: number;
  availableTo: number;
};

const courtData: Court[] = [
  { id: 1, location: 'sengkang', availableFrom: 4, availableTo: 9 },
  { id: 2, location: 'Punggol', availableFrom: 9, availableTo: 14 },
  { id: 3, location: 'sengkang', availableFrom: 4, availableTo: 9 },
  { id: 4, location: 'Punggol', availableFrom: 14, availableTo: 19 },
];
const CustomInputButton = forwardRef<HTMLButtonElement, any>(({ value, onClick }, ref) => (
  // <button className="home-common calendar-custom-input " onClick={onClick} ref={ref}>
       <button className="home-common home-size calendar-custom-input " onClick={onClick} ref={ref}>

    {value || 'Calendar'}
  </button>
));
export function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);


  const [bookedCourt, setBookedCourt] = useState<Court | null>(null);

  // const [showCalendar, setShowCalendar] = useState(true);

 const [startDate, setStartDate] = useState<Date | null>(null); 
const [endDate, setEndDate] = useState<Date | null>(null);    
const [filterStartDate, setFilterStartDate] = useState<Date | null>(null); 
const [filterEndDate, setFilterEndDate] = useState<Date | null>(null);     

  const [locationFilter, setLocationFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [filteredCourts, setFilteredCourts] = useState<Court[]>(courtData);


  const handleClear = () => {
    setLocationFilter('');
    setTimeFilter('');
 setFilterStartDate(null);
setFilterEndDate(null);
    setFilteredCourts(courtData);
  };

  const handleApply = () => {
    let filtered = [...courtData];

    if (locationFilter) {
      filtered = filtered.filter(
        (court) => court.location.toLowerCase() === locationFilter.toLowerCase()
      );
    }

    if (timeFilter) {
      const [from, to] = timeFilter.split('-').map(Number);
      filtered = filtered.filter(
        (court) =>
          court.availableFrom >= from && court.availableTo <= (to === 0 ? 24 : to)
      );
    }

    setFilteredCourts(filtered);
  };

  return (
    <div className="home-page-container1">

      {/* Banner content and banner image start */}
      <div className="home-banner-content">
        <h1>Slot Booking</h1>
        <br />
        <p>See slots available for booking.</p>
      </div>
      {/* Banner content and banner image End */}

      <div className="home-content-wrapper">
        <aside className="home-filter">
          <h3>Filter</h3>

          <select
            className="home-select home-common  input-padding-left"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">All Location</option>
            <option value="sengkang">Seng Kang</option>
            <option value="Punggol">Punggol</option>
          </select>

<DatePicker
  selected={filterStartDate}
  onChange={(dates) => {
    const [start, end] = dates as [Date, Date];
    setFilterStartDate(start);
    setFilterEndDate(end);
  }}
  startDate={filterStartDate}
  endDate={filterEndDate}
  selectsRange
  placeholderText="Calendar"
  customInput={<CustomInputButton value={
    filterStartDate && filterEndDate
      ? `${filterStartDate.toLocaleDateString()} - ${filterEndDate.toLocaleDateString()}`
      : 'Calendar'
  } />}
  // withPortal={window.innerWidth > 100}

/>




          <select
            className="home-common home-time input-padding-left "
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option value="">Time</option>
            <option value="04-09">04AM - 09AM</option>
            <option value="09-14">09AM - 02PM</option>
            <option value="14-19">02PM - 07PM</option>
            <option value="19-00">07PM - 12AM</option>
          </select>

          <div className="home-buttons">
            <button className="home-clear" onClick={handleClear}>Clear Filter</button>
            <button className="home-apply" onClick={handleApply}>Apply</button>
          </div>
        </aside>

        <div className="home-cards">
          {filteredCourts.length === 0 ? (
            <p>No Slots Available.</p>
          ) : (
            filteredCourts.map((court) => (
              <div className="home-card" key={court.id}>
                <div className="home-images">
                  <img src={`images/court${court.id}.jpg`} alt={`Court ${court.id}`} />
                </div>
                <div className="home-info">
                  <div className="home-top">
                    <h4>{`Court ${court.id}`}</h4>
                    <span>{court.id === 1 ? '4 Slots' : '5 Slots'}</span>
                  </div>
                  <div className="home-place">
                 
                    <p>{court.location}, Singapore</p>
                  </div>
                  <div className="home-time-icon">
                    <p className="home-time-info">
                      <FaClock  className="icon" /> {court.availableFrom}am to{' '}
                      {court.availableTo === 24 ? '12am' : `${court.availableTo}pm`}
                    </p>
                      <button  onClick={() => setIsModalOpen(true)}>
                         {/* setShowCalendar(true); */}
                      Book</button>



                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {isModalOpen && <CalendarModal onClose={() => setIsModalOpen(false)} />}

        
</div>


      
    </div>
  );
}
