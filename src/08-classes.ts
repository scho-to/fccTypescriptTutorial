interface UserInterface08 {
    getFullname(): string;
}

class User08 implements UserInterface08 {
    protected firstName: string;
    private lastName: string;
    readonly unchangableName: string;
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }

    changeUnchangableName(): void {
        // this.unchangableName = "foo";
    }

    getFullname(): string {
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends User08 {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

const user = new User08("Monster", "lessons");
console.log(user.getFullname());
console.log(User08.maxAge);

const admin = new Admin("Foo", "Bar");
console.log(admin.getEditor())