export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: string[];
  url: string;
  created: string;
}

export interface LocationListProps {
  residents: Character[];
  loading: boolean;
}

export interface CharacterListProps {
  characters: Character[];
  loading: boolean;
}
export interface EpisodeListProps {
  characters: Character[];
  loading: boolean;
}
