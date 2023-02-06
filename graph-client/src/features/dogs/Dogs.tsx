import { Button, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useDogQueryService from './useDogQueryService';
import { Image } from 'mui-image';
import { useParams, useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [dogId, setDogId] = useState<number>(1);
  const { isLoading, data } = useDogQueryService(dogId);

  const handleNewFactClick = () => {
    setDogId(dogId === 10 ? 1 : dogId + 1);
  };

  const params = useParams<{ id: string }>();
  const [urlSearchParams] = useSearchParams();
  const idFromQueryParams = urlSearchParams.get('id');
  const idFromParams = params.id;

  useEffect(() => {
    let id: number;
    if (idFromQueryParams) {
      id = parseInt(idFromQueryParams, 10);
      setDogId(id > 10 || id < 1 ? 1 : id);
    } else if (idFromParams) {
      id = parseInt(idFromParams, 10);
      setDogId(id > 10 || id < 1 ? 1 : id);
    }
  }, [idFromParams, idFromQueryParams]);

  const { dog: { name = '', id = null, imageFileName = '' } = {} } = { ...data };
  const imageSrc = `http://localhost:5601/images/${imageFileName}`;
  return (
    <>
      <Container sx={{ mt: 3 }}>
        <Typography variant='body1'>
          <span style={{ fontSize: 24, marginRight: 10 }}>Dog details: </span>
          {isLoading ? 'Loading new dog...' : 'Dog details are given below'}
        </Typography>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={5}>
            <Typography>
              <span style={{ fontSize: 24, marginRight: 10 }}>Name: </span>
              {name}
            </Typography>
            <Typography>
              <span style={{ fontSize: 24, marginRight: 10 }}>Id: </span>
              {id}
            </Typography>
            <Button variant='outlined' sx={{ mt: 5 }} onClick={handleNewFactClick}>
              Next
            </Button>
          </Grid>
          <Grid item xs={7}>
            {imageFileName && <Image src={imageSrc}></Image>}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dogs;
