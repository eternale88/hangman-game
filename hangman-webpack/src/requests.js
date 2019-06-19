//Now with fetch + async await added, finally the end is near!
const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Unable to fetch puzzle');
  }
};

// redone fetch with async
const getCountryDetails = async (alpha2Code) => {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${alpha2Code}`,
    {}
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('An error has occurred.');
  }
};

//redone getLocation with fetch + async
const getLocation = async () => {
  const response = await fetch(
    `http://ipinfo.io/json?token=666865ba333883`,
    {}
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('An error has occurred in obtaining IP address');
  }
};
