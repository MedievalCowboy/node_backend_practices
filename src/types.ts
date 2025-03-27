import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable,
} from 'kysely';

export interface Database {
    show: ShowTable
    person: PersonTable

}

/*
show:
    show_id
    type: movie?
    title,
    director -> person,
    cast: -> muchas person,
    country_origin->selector,
    release_date,
    rating,

person:
name,
surname,
*/

export interface PersonTable{
    id: Generated<number>
    first_name: string
    last_name: string | null
    created_at: ColumnType<Date, string | undefined, never>

}
export type Person = Selectable<PersonTable>
export type NewPerson = Insertable<PersonTable>
export type PersonUpdate = Updateable<PersonTable>

export interface ShowTable{
    id: Generated<number>
    show_id: number
    type: 'movie' | 'tv_show'
    country_origin: string
    release_date: ColumnType<Date, string | undefined, never>
    
}
export type Show = Selectable<ShowTable>
export type NewShow = Insertable<ShowTable>
export type ShowUpdate = Updateable<ShowTable>

export interface CastTable{
    show_id:number
    person_id:number
}
export type Cast = Selectable<CastTable>
export type NewCast = Selectable<CastTable>
export type CastUpdate = Updateable<CastTable>

export interface DirectorTable{
    show_id:number
    person_id:number
}
export type Director = Selectable<DirectorTable>
export type NewDirector = Selectable<DirectorTable>
export type DirectorUpdate = Updateable<DirectorTable>

