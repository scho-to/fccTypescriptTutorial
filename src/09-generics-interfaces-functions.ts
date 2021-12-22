//const searchStr = "foo";
//const hasSearchedString = any<string>((el: string) => el.contains(searchStr),["foo", "bar", "baz"])

const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id
    }
}

interface UserInterface09<T, V> {
    name: string;
    data: T;
    meta: V;
}

const user09: UserInterface09<{meta: string}, string> = {
    name: "Jack",
    data: {
        meta: "foo",
    },
    meta: "bar"
}

const user09_2: UserInterface09<string[], null> = {
    name:"John",
    data: ["foo", "bar", "baz"],
    meta: null
}

const result = addId(user09);
console.log(result);