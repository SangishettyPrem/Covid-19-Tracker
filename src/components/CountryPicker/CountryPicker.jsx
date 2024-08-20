import React from 'react'
import { Country } from 'country-state-city';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleChangeCountry }) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleChangeCountry(e.target.value)}>
        {Country.getAllCountries().map(country => (
          <option key={country.name} value={country.name}>
            {country.name} - {country.isoCode}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker