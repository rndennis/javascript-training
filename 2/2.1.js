(function() {
  function printDate(month, day, year) {
    console.log(month + day + ', ' + year); // without template literal
    console.log(`${month} ${day}, ${year}`); // with template literal
  }
  printDate('January', 1, 2018);

  function printAddress(name, street, city, state, zip) {
    console.log(`${name}
${street}
${city}, ${state} ${zip}`);
  }
  printAddress(
    'Union Pacific Railroad',
    '1400 Douglas St.',
    'Omaha',
    'NE',
    '68179'
  );
})();
