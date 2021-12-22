type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface05 {
    id: ID;
    name: string;
    surname: string;
}

const popularTags: PopularTag[] = ['dragon', 'coffee'];

const deragonsTag: MaybePopularTag = "dragon";

let username: string = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;

//let user: UserInterface05 | null = null;

let someProp: string | number | null | undefined | string[] | object = null;