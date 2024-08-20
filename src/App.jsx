import React from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './API'

class App extends React.Component {
  state = {
    data: {},
    country: 'Afghanistan'
  }
  async componentDidMount() {
    const fetchedData = await fetchData('Afghanistan');
    this.setState({ data: fetchedData });
  }
  handleChangeCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src='https://i.ibb.co/7QpKsCX/image.png' alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleChangeCountry={this.handleChangeCountry} />
        <Chart data={data} country={country} />
      </div >
    )
  }

}

export default App