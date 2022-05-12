import axios from "axios";

const baseURL = "https://viacep.com.br/ws"

export const getAddressInfo = async (zipcode: string): Promise<string> => {
    try {

        const res = await axios.get(`${baseURL}/${zipcode}/json`)
        const address = `${res.data.logradouro},${res.data.bairro} - ${res.data.localidade} / ${res.data.uf}`


        return address;

    } catch (error: any) {
        throw new Error("Erro no ViaCep")
    }
}