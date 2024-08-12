import { TYPE_RELEASE } from "./typeRelease";

export interface IRelease {
    id: string,
    name: string,
    description: string,
    type: TYPE_RELEASE,
    release_date_of: Date,
    payday: Date,
    value: number,
    selected: boolean,
    isPaid: boolean,
}