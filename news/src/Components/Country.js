const Country = ({ setCountry, setCurrentPage }) => {
    const countryMap = {
      in: 'India',
      us: 'United States',
      gb: 'United Kingdom',
      cn: 'China',
      jp: 'Japan',
      th: 'Thailand',
    };
  
    const handleCountryChange = (e) => {
      setCountry(e.target.value);
      setCurrentPage(1); 
    };
  
    return (
      <div className="my-4">
        <select
          onChange={handleCountryChange}
          className="p-2 border rounded"
        >
          {Object.keys(countryMap).map((code, index) => (
            <option key={index} value={code}>
              {countryMap[code]}
            </option>
          ))}
        </select>
      </div>
    );
  };
  export default Country;