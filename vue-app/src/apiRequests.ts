import axios from 'axios';
interface Equipment{
    id: number;
    name: string; 
    type: string;
    hpModifier: number;
    luckModifier: number;
    value: number;
}
interface CharacterModel {
    name: string;
    hitPoints: number;
    luck: number;
    wealth: number;
    equipment: Equipment[];
}

async function getCharacter(): Promise<CharacterModel> {
    const url = 'http://localhost:5000/character';
    const resp = await axios.get<CharacterModel>(url);
    console.log(resp);
    return resp.data;
}
async function getShop(): Promise<Equipment[]> {
    const url = 'http://localhost:5000/equipment';
    const resp = await axios.get<Equipment[]>(url);
    console.log(resp);
    return resp.data;
}
export { CharacterModel, Equipment, getCharacter, getShop}
