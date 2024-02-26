import { toast } from "react-toastify";
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";


const registerClient = async (formData: any) => {
    const navigate = useNavigate();

    try {
        await api.post("/clients", formData)
        toast.success("registrado com sucesso!");
        
        setTimeout(() => {
            navigate("/");
        }, 2000);
    } catch (error) {
        console.log(error)
        toast.error("Erro ao registrar.");
    }
}

export default registerClient