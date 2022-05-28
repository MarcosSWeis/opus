const {Social_space} = require("../db");

const SpaceLoad = [
  {
    space: "Swimming pool",
    images: ["https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1653772780/No-Country/Spaces/swimming%20pool/3_mzqczk.jpg","https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1653772773/No-Country/Spaces/swimming%20pool/woman-gc5c3e0f37_1920_usqkmi.jpg","https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1653772774/No-Country/Spaces/swimming%20pool/01-SMART-Lane-1024x683_czdmva.jpg"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    condominium_id: 1,
  },
  {
    space: "Social room",
    images: ["https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1653773685/No-Country/Spaces/Social%20room/salon_2_zhmpvv.jpg","https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1653773685/No-Country/Spaces/Social%20room/Salon1_kneiwf.jpg"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    condominium_id: 1,
  },
  {
    space: "Gym",
    images: ["https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1653773996/No-Country/Spaces/Gym/gym1_seh769.jpg","https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1653773996/No-Country/Spaces/Gym/gym2_qwerir.jpg","https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1653773995/No-Country/Spaces/Gym/gym3_ecm4gq.jpg"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    condominium_id: 1,
  },
  {
    space: "Playground",
    images: ["https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1653773706/No-Country/Spaces/Playground/pexels-elina-fairytale-4543631_rguv5u.jpg","https://res.cloudinary.com/jair1020/image/upload/t_No-Country/v1653773702/No-Country/Spaces/Playground/home-productos.parques-infantiles-tobogan_xua0mh.jpg"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    condominium_id: 1,
  }
]

const LoadSpace = async () => {
  try {
    await Promise.all(SpaceLoad.map( async (space) =>{ 
    await Social_space.create(space)  
    }))
   
  } catch (error) {
    console.log (error);
  }
}

module.exports = {
  LoadSpace,
}