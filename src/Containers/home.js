import React from 'react'
import Navbar from '../Components/navbar'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div>
            <h1 style={{marginTop:'10px'}}>
            Welcome to my application
            </h1>
            <h4>What is the application about?</h4>  
            <p>This Application demonstrates the usage of API integrations. There are 2 main functionalities - 
              <center style={{marginTop:'10px'}}>1.View fetched posts</center>
              <center>2.Create posts</center>
            </p>
            <h4>How is this being achieved?</h4>
            <p> I have used `https://jsonplaceholder.typicode.com/posts` in order to fetch posts using a GET method and in order to 
              create posts using POST method. 
              </p> 
            <h4>Technologies/Libraies used</h4> 
            <p>
          <center><b>ReactJs</b> - My Favorite JS Library</center>
          <center><b>Material UI</b> - To use ready made components and save time!</center>
          <center><b>Axios</b> - To integrate REST API's</center>
          <center><b>sass</b> - To use scss for animations</center>
          <center><b>React-paginate</b> - To create a paginator component</center>
          <center><b>React-router-dom</b> - For routing within the app</center>
          <center><b>Git/Github</b> - To store the code</center>
          <center><b>Netlify</b> - To host the application</center>
            </p>
            <h4>Important Links</h4>
            <p>Repository: <a href='https://github.com/Vignesh-shenoy-10/Viamagus-test/tree/master'>Github URL</a> </p>
            <p>Live Link: <a href='https://github.com/Vignesh-shenoy-10/Viamagus-test/tree/master'>Application URL</a> </p>
            </div>  
            <p>P.S - I have written a README.MD file which contains some technical documentation</p>
    </div>
  )
}
