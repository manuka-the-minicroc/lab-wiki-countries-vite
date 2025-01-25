import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function CountryDetailsPage() {
  const { alpha3Code } = useParams()
  const [country, setCountry] = useState(null);
  console.log("this is the id--->>")
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => {

        setCountry(response.data);
      });
  }, [alpha3Code]);

  return (
    <div>
      { }
      {country && <div>
        <h1>{country.name.common}</h1>
        <p>Capital:{country.capital}</p>
        <p>Area:{country.area}</p>
        <p>Borders:</p>
        <ul>
          {country.borders.map((country) => 
            <li>
              <p> <Link to={`/${country}`}>{country}</Link></p>
            </li>
          )}

        </ul>
      </div>}
    </div>
  );
}

export default CountryDetailsPage;
