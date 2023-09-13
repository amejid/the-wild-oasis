import styled from 'styled-components';

import Spinner from '../../ui/Spinner.jsx';
import { useCabins } from '../cabins/useCabins.js';
import TodayActivity from '../check-in-out/TodayActivity.jsx';
import DurationChart from './DurationChart.jsx';
import SalesChart from './SalesChart.jsx';
import Stats from './Stats.jsx';
import { useRecentBookings } from './useRecentBookings.js';
import { useRecentStays } from './useRecentStays.js';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, numDays, isLoading: isLoading2 } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
