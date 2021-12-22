const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
}

console.log(statuses.inProgress);

enum StatusEnum {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Done = "done"
}

interface Task {
    id: string;
    status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress);