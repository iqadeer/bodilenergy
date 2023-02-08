import { Button, Container, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import useCatFactQueryService from './useCatFactQueryService';

const CatFacts = () => {
  const { isLoading, data, isFetching } = useCatFactQueryService();
  const client = useQueryClient();
  const handleNewFactClick = () => {
    client.invalidateQueries({ queryKey: ['getNewCatFact'] });
  };
  const fact = isLoading ? 'Fetching new fact...' : data?.catFact.fact;
  const length = data?.catFact.length;
  return (
    <>
      <Typography variant='h6' sx={{ mt: 3, ml: 3 }}>
        Cat facts are given below
      </Typography>
      <Container sx={{ mt: 3 }}>
        <Typography variant='body1' sx={{ height: 150 }}>
          <span style={{ fontSize: 24, marginRight: 10 }}>Fact: </span>
          {fact ?? ''}
        </Typography>
        <Typography variant='body1' sx={{ height: 50 }}>
          <span style={{ fontSize: 24, marginRight: 10 }}>Length: </span>
          {length ?? ''}
        </Typography>
        <Button variant='outlined' sx={{ mt: 5 }} onClick={handleNewFactClick} disabled={isFetching}>
          New fact
        </Button>
      </Container>
    </>
  );
};

export default CatFacts;
