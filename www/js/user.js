const user = {
    name: 'bibi',
    score: 30,
    favoris: []
  };
  
  // Storing a user object
  localStorage.setItem('user', JSON.stringify(user));
  
  // Retrieving and parsing the user object
  const storedUser = JSON.parse(localStorage.getItem('user'));