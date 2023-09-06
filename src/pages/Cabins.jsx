import Heading from '../ui/Heading.jsx';
import Row from '../ui/Row.jsx';
import CabinTable from '../features/cabins/CabinTable.jsx';

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;
