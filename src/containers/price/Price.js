import { PageBuilder } from '../../components/pageBuilder/PageBuilder';
import { uniqueId } from 'lodash';
import { getService } from '../../api/service';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/loader/Loader';
import { COLORS } from '../../assets/colors/colors';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  text-align: left;
  color: ${COLORS.GUMBO};
`;

const TableName = styled.tr`
  background-color: ${COLORS.KARRY_TRANSPARENT};
  font-size: medium;
  font-weight: bold;
  text-transform: uppercase;
`; 

const Name = styled.td`
  border-style: solid;
  border-width: 2px;
  border-color: ${COLORS.KARRY};
  padding: 10px;
`;

const Cost = styled(Name)`
  text-align: center;
`;

const PriceTable = ({ priceList = [], isLoading = false }) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Table>
      <tbody>
        <TableName><Name>Service</Name><Cost>Cost</Cost></TableName>
        {priceList.map(({ name, description = '-' }) => 
          <tr key={uniqueId('price_')}>
            <Name>{name}</Name>
            <Cost>{description}</Cost>
          </tr>  
        )}
      </tbody>
    </Table>
  );
};

export const Price = () => {
  const [priceList, setPriceList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => { 
    setPriceList(await getService());
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return <PageBuilder main={<PriceTable priceList={priceList} isLoading={isLoading} />} />;
};
