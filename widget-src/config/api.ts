const api_url = 'http://localhost:3000';


export async function fetchData(endpoint:string) {
    
    try {
        
        const respuesta = await fetch(`${api_url}/${endpoint}`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        if (!respuesta.ok) throw new Error(`Error: ${respuesta.statusText}`);
        

        const data = await respuesta.json();
        console.log('data recibida',data);
        return data;

    } catch (error) {
        console.error('Error al obtener las epicas',error);
    }
}