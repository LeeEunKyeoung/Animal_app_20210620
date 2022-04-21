function Animal({ name, picture }) {
   return(
     <div>
      <h1>I like {name}</h1>
      <img src={picture} /> 
      </div>
   );
}

const animalILike = [
  {
    name: 'Bear',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2F8e%2F60%2F1920x1080_px_animals_bears-773103.jpg!d&f=1&nofb=1',
  },
  {
    name: 'Cat',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.ap-northeast-2.amazonaws.com%2Felasticbeanstalk-ap-northeast-2-176213403491%2Fmedia%2Fmagazine_img%2Fmagazine_209%2F%25EC%258D%25B8%25EB%2584%25A4%25EC%259D%25BC.jpg&f=1&nofb=1',
  },
  {
    name: 'Rabbit',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJzdt4KmHeJR55SF8LhWiHp19cLKCZSlSqQwvw%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1',
  },
  {
    name: 'Elphant',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.animalplanet.co.kr%2Fthumbnail%2F2020%2F08%2F28%2F2000%2F7024nh5c67c1apx3k7e2.jpg&f=1&nofb=1',
  },
  {
    name: 'Horse',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.sbs.co.kr%2Fnewimg%2Fnews%2F20171201%2F201120445_1280.jpg&f=1&nofb=1',
  },
];


function App() {
  return (
    <div>
      {animalILike.map(dish => <Animal key={dish.name} name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;