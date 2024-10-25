import { ArrowBack } from '@mui/icons-material';
import {
  Box,
  Button,
  // ButtonGroup,
  CircularProgress,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link as ReactRouter, useNavigate, useParams } from 'react-router-dom';

import {
  useGetFilmQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery,
} from '../../../services/kinopoiskApi';
import ErrorMessage from '../../ui/ErrorMessage';
import MovieCard from '../../ui/MovieCard/MovieCard';
import VideoPlayer from '../../ui/VideoPlayer';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const responseFilm = useGetFilmQuery(id);
  const responseSequelsAndPrequels = useGetSequelsAndPrequelsQuery(id);
  const responseStaff = useGetStaffQuery(id);

  if (
    responseFilm.isLoading ||
    responseSequelsAndPrequels.isLoading ||
    responseStaff.isLoading
  ) {
    return (
      <Box display="flex" justifyContent="center" margin="auto">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (responseFilm.error || responseStaff.error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <Grid container spacing={2} sx={{ mt: { md: 2 } }}>
        <Grid item md={4} sm={12}>
          <img
            src={responseFilm.data.posterUrl}
            alt={responseFilm.data.nameEn}
            width="100%"
          />
        </Grid>
        <Grid item md={6} sm={12}>
          <Grid container>
            <Grid item xs={2}>
              <Button
                startIcon={<ArrowBack />}
                size="large"
                onClick={() => navigate(-1)}
              />
            </Grid>
            <Grid item xs={4} alignContent="center">
              <Typography variant="h5">{responseFilm.data.nameEn}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography>Year</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{responseFilm.data.year}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>Country</Typography>
            </Grid>
            <Grid item xs={6}>
              {responseFilm.data.countries.map(({ country }) => (
                <Typography gutterBottom key={country}>
                  {country}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={6}>
              <Typography>Genres</Typography>
            </Grid>
            <Grid item xs={6}>
              {responseFilm.data.genres.map(({ genre }) => (
                <Typography gutterBottom key={genre}>
                  {genre}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={6}>
              <Typography>Directors</Typography>
            </Grid>
            <Grid item xs={6}>
              {responseStaff.data
                .filter((el) => el.professionText === 'РDirectors')
                .map(({ nameEn }) => (
                  <Typography gutterBottom key={nameEn}>
                    {nameEn}
                  </Typography>
                ))}
            </Grid>

            <Grid item xs={6}>
              <Typography>Time</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>
                {responseFilm.data.filmLength} minutes
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography gutterBottom>Description</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>
                {responseFilm.data.description
                  ? responseFilm.data.description
                  : 'Description is missing'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} sm={12}>
          <Typography variant="h6">In the main roles</Typography>
          {responseStaff.data
            .filter((el) => el.professionText === 'Actors')
            .slice(0, 10)
            .map(({ nameEn, staffId }) => (
              <div key={nameEn}>
                <Link
                  component={ReactRouter}
                  to={`/actor/${staffId}`}
                  gutterBottom
                >
                  {nameEn}
                </Link>
              </div>
            ))}
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {/* <Grid item xs={12}>
          <ButtonGroup variant="outlined" size="small">
            <Button
              target="_blank"
              href={responseFilm.data.webUrl}
              endIcon={<Language />}
            >
              Кинопоиск
            </Button>
            <Button
              target="_blank"
              href={`https://www.imdb.com/title/${responseFilm.data.imdbId}`}
              endIcon={<Movie />}
            >
              IMDB
            </Button>
          </ButtonGroup>
        </Grid> */}

        <Grid item xs={12}></Grid>
        <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
          Watch online
        </Typography>
        <VideoPlayer />
      </Grid>

      {responseSequelsAndPrequels.data && (
        <Stack alignItems="center">
          <Typography gutterBottom variant="h5" sx={{ mt: 2, mb: 2 }}>
            Sequels and prequels
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            sx={{ gap: 2 }}
          >
            {responseSequelsAndPrequels.data.map((el) => (
              <MovieCard key={el.filmId} movie={el} reload />
            ))}
          </Stack>
        </Stack>
      )}
    </>
  );
}
