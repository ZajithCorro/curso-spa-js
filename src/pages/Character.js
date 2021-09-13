import getHash from '@utils/getHash'
import getData from '@utils/getData'

const Character = async () => {
  const idHash = getHash();
  const infoCharacter = await getData(idHash)

  const { image, 
  name,  
  episode,
  status,
  species,
  gender,
  origin, 
  location } = infoCharacter;

  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
      </article>
      <article class="Character-card">
        <h3>Episodes: ${episode.length}</h3>
        <h3>Status: ${status}</h3>
        <h3>Species: ${species}</h3>
        <h3>Gender: ${gender}</h3>
        <h3>Origin: ${origin.name}</h3>
        <h3>Last Location: ${location.name}</h3>
      </article
    </div>
  `;

  return view;
};

export default Character;