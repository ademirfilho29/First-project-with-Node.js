export async function listarposts(req, res)  {

    const resultado = await getTODOSPOSTS()

    res.status(200).json(resultado);

    } 