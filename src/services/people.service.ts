import {db} from '../database'

async function get_all_people(){
    const people = await db.person.findMany()
    return people;

}
const  test_services = {
    get_all_people,
}
export default  test_services;

