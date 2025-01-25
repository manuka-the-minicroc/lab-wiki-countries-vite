import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);
  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <table className="table overflow-auto" >
        <tbody>
          {countries.map((country) => {
            return (
              <tr id="country._id">
                <td><Link to={`/${country.alpha3Code}`}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />{country.name.common} </Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;

