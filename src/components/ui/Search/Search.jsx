import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setSearchQuery } from '../../../features/searchQuerySlice';
import { useGetFilmsQuery } from '../../../services/kinopoiskApi';

const movieTypes = {
  FILM: 'Movie',
  TV_SERIES: 'Series',
  TV_SHOW: 'TV Show',
  MINI_SERIES: 'Mini-series',
};

export default function Search() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { countries, genreId, order, type, year, page, keyword } = useSelector(
    (state) => state.searchQuerySlice
  );

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery({ keyword: input }));
    }, 500);

    return () => clearTimeout(setTimeoutId);
  }, [input]);

  const { data, isFetching } = useGetFilmsQuery({
    countries,
    genreId,
    order,
    type,
    year,
    page,
    keyword,
  });

  return (
    <Autocomplete
      freeSolo
      sx={{
        width: 300,
        backgroundColor: 'rgba(255,255,255, 0.15)',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
      }}
      getOptionLabel={(option) =>
        `${option.nameEn} - ${movieTypes[option.type]} - ${option.year}`
      }
      options={data ? data.items : []}
      onInputChange={(_, value) => {
        setInput(value);
      }}
      onChange={(_, value) => {
        navigate(`/movie/${value.kinopoiskId}`);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isFetching ? (
                  <CircularProgress size={20} color="inherit" />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
