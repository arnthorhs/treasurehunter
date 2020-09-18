import axios, {AxiosResponse} from 'axios';
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
interface PurchaseResponse {
    equipmentId: number;
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
async function purchaseRequest(equipmentId: number): Promise<AxiosResponse | void>{
    const url = 'http://localhost:5000/purchases';
    const resp = await axios.post(url,{equipmentId:equipmentId}).catch((e)=>console.log(e));
    console.log(resp);
    return resp;
}
export { CharacterModel, Equipment, getCharacter, getShop, purchaseRequest, PurchaseResponse}
