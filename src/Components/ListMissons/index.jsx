import React, { useEffect, useState} from 'react';
import Missons from '../Missions';
import fetch from "isomorphic-fetch";
import {Mdescription, MissonsContainer, MList, MTexts, MTitle} from './missions.style';
import {ApolloClient, InMemoryCache,ApolloProvider,useQuery,gql } from "@apollo/client";
const ListMissons = () => {
//    fetch('http://localhost:1337/missions').then((response) => {
//     console.log(response.json());
//    }).catch((error) => {
//     console.log(error.json());
//    })


const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });


  
   
  const [posts, setPosts] =  useState([]);
  
    useEffect( () => {
        getallMissons();
        
    }, [])

async function getallMissons() {

    try{

        const res = await fetch('https://enjiri-admin-dashboard.herokuapp.com/missions')
        const data = res.json();

        console.log(data);
         data.then((response) => {
            setPosts(response);
            console.log(response);
         })
     
    }catch(err){

 console.error(err);
    }

}


    return (
        <div>
            <MissonsContainer>
               <MTexts>
                   <MTitle>
                   Our Missions 
                   </MTitle>
                   <Mdescription> 
                   Enjiri Center Ministries is an evangelistic ministry  with Various  services, training conferences and mission outreach programs.
                   </Mdescription>   

               </MTexts> 
               <MList>

                  {
                      posts.map((post, index)=>(
                        <Missons key={index} post={post}/>
                      ))
                  }

               {/* <Missons/>
               <Missons/>
               <Missons/>
               <Missons/>
               <Missons/>
               <Missons/> */}
               </MList>
            </MissonsContainer>
        </div>
    );
}


export default ListMissons;