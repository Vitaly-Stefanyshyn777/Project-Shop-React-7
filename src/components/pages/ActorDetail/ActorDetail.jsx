import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";

import { useGetStaffByIdQuery } from "../../../services/kinopoiskApi";
import ErrorMessage from "../../ui/ErrorMessage";

export default function ActorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetStaffByIdQuery(id);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" margin="auto">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) return <ErrorMessage />;

  return (
    <>
      <Grid container spacing={4} pt={1}>
        <Grid item xs={12} md={4}>
          <img
            src={data.posterUrl}
            style={{ width: "100%" }}
            alt={data.nameEn}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack flexDirection="row">
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              color="primary"
            ></Button>
            <Stack flexDirection="column">
              <Typography variant="h5">{data.nameEn}</Typography>
              <Typography>{data.nameEn}</Typography>
            </Stack>
          </Stack>
          <Typography gutterBottom variant="h5">
            About the actor
          </Typography>
          <Grid container>
            <Grid xs={6}>
              <Typography gutterBottom>Career</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography gutterBottom>{data.profession}</Typography>
            </Grid>

            <Grid xs={6}>
              <Typography gutterBottom>РGrowth</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography gutterBottom>{data.growth}</Typography>
            </Grid>

            <Grid xs={6}>
              <Typography gutterBottom>birth father</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography gutterBottom>
                {data.birthday} ({data.age} years)
              </Typography>
            </Grid>

            <Grid xs={6}>
              <Typography gutterBottom>All movies</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography>{data.films.length}</Typography>
            </Grid>

            <Grid xs={6}>
              <Typography gutterBottom>The facts</Typography>
            </Grid>
            <Grid xs={12}>
              {data.facts.map((fact, index) => (
                <Typography gutterBottom key={fact}>
                  {index + 1}.{fact}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Movies</Typography>
        </Grid>
      </Grid>
      <Stack>
        {data.films
          .filter(
            (item, index, self) =>
              index === self.findIndex((el) => el.filmId === item.filmId),
          )
          .map((film, index) => (
            <Stack
              key={film.filmId}
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography>{index + 1}</Typography>
              <Link component={RouterLink} to={`/movie/${film.filmId}`}>
                {film.nameEn ? film.nameEn : film.nameEn}
              </Link>
              <Typography>{film.rating ? film.rating : "-"}</Typography>
            </Stack>
          ))}
      </Stack>
    </>
  );
}
