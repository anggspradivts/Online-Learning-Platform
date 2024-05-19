export const signOut = async () => {
  try {
    const response = await fetch('/api/signout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const success = data.data
    if (data.error) {
      console.error('Error signing out:', data.error);
    } else {
      window.location.href = "/"
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

// Fetch Server side getuser
// export const getUser = async () => {
//   try {
//     const res = await fetch("/api/getuser", {
//       method: "GET",
//     })
//     if(!res.ok) {
//       console.log("Response from the server is not oke")
//     }
//     const data = await res.json()
//     const userEmail = data.user.email
//   } catch (error) {
//     console.log("err when fetch getuser", error)
//   }
// }