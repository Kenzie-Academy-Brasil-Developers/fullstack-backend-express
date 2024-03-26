import { toast } from "react-toastify";
import { api } from "../../services/api"

const registerClient = async (formData: any) => {
    try {
        await api.post("/clients", formData);
        toast.success("Registrado com sucesso!");
    } catch (error) {
        console.log(error);
        toast.error("Erro ao registrar.");
    }
}

export default registerClient;