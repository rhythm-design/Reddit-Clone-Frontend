export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.jwtToken) {
        console.log("user service: ", user.jwtToken);
      return { Authorization: 'Bearer ' + user.jwtToken };
    } else {
      return {};
    }
  }