
  export interface SimpleComic{
    id:number,
    title: string,
    issueNumber:number,
    thumbnail:string,
    price:number,
    description:string
  }
  interface creator {
    available: number;
    collectionURI: string;
    items: any[]; // Remplacer 'any' par le type approprié si connu
    returned: number;
  };
  interface Collection{
    resourceURI:string,
    name:string,
  }
  interface Acteur{
    available: number;
    collectionURI: string;
    items: { resourceURI: string; name: string }[];
    returned: number;

  }
 export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: any ;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: any[]; // Remplacer 'any' par le type approprié si connu
    resourceURI: string;
    urls: { type: string; url: string }[];
    series: { resourceURI: string; name: string };
    variants: any[]; // Remplacer 'any' par le type approprié si connu
    collections: {resourceURI:string,name:string}[]; // Remplacer 'any' par le type approprié si connu
    collectedIssues: any[]; // Remplacer 'any' par le type approprié si connu
    dates: { type: string; date: string }[];
    prices: { type: string; price: number }[];
    thumbnail: { path: string; extension: string };
    images: {path:string,extension:string}[]; // Remplacer 'any' par le type approprié si connu
    creators: {
      available: number;
      collectionURI: string;
      items: any[]; // Remplacer 'any' par le type approprié si connu
      returned: number;
    };
    characters: {
      available: number;
      collectionURI: string;
      items: { resourceURI: string; name: string }[];
      returned: number;
    };
    stories: {
      available: number;
      collectionURI: string;
      items: {
        resourceURI: string;
        name: string;
        type: string;
      }[];
      returned: number;
    };
    events: {
      available: number;
      collectionURI: string;
      items: any[]; // Remplacer 'any' par le type approprié si connu
      returned: number;
    };
  }
export class model{

}